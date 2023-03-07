import { useContext, useEffect } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { PrimaryButton } from '../styledComponents'
import { connect } from 'react-redux'
import { useRef } from 'react'

const ContextMenuWrapper = styled.div`
    width: max-content;
    min-width: 160px;
    position: absolute;
    left: ${props => props.contextMenuCoords.x}px;
    top: ${props => props.contextMenuCoords.y}px;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    border: 1px solid #cbcbcb;
    box-shadow: 0 0 10px 10px rgb(0 0 0 / 3%);
    background: #f5f4f4;
    z-index: 999;

    & > p {
        padding: 0 1rem;
    }
`

const ContextMenuButton = styled(PrimaryButton)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0;
    color: grey;
    background: #f5f4f4;
    font-size: 1rem;
    transition: 0.2s ease-in;

    &:hover {
        color: #cd2020;
        filter: brightness(0.95);
    }
`

const ContextMenu = props => {
    const contextMenuRef = useRef(null)

    useEffect(() => {
        if (props.contextMenuVisibility) {
            document.addEventListener('mousedown', handleWindowClicked)
            document.addEventListener('keydown', handleKeyDown)
        } else {
            document.addEventListener('mousedown', handleWindowClicked)
        }

        return () => {
            document.removeEventListener('mousedown', handleWindowClicked)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleWindowClicked = event => {
        if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
            props.resetContextMenuCoords()
        }
    }

    const handleKeyDown = event => {
        if (event.key === 'Escape') {
            props.resetContextMenuCoords()
        }
    }

    return (
        <ContextMenuWrapper ref={contextMenuRef} {...props}>
            <ContextMenuButton onClick={() => props.resetContextMenuCoords()}>
                <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faTrash} />
                Usuń
            </ContextMenuButton>
        </ContextMenuWrapper>
    )
}

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords,
    contextMenuVisibility: state.utils.contextMenuVisibility
})

const mapDispatchToProps = dispatch => ({
    resetContextMenuCoords: () =>
        dispatch({ type: 'REMOVE_CONTEXT_MENU_COORDS', coords: { x: -9999, y: -9999 } })
})

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu)

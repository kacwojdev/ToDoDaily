// react deps
import { useEffect, useRef } from 'react'
// redux
import { connect } from 'react-redux'
import {
    getCurrentListContextMenu,
    getContextMenuVisibilty,
    getContextMenuCoords,
    getCurrentTaskContextMenu,
    removeContextMenuCoords,
    removeList,
    removeTask
} from '../store'
import { deleteList, deleteTask } from '../firebase'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// styles
import styled from 'styled-components'
import { PrimaryButton } from '../styledComponents'

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
        // eslint-disable-next-line
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

    const handleRemoveButtonPressed = event => {
        if (props.currentListContextMenu && !props.currentTaskContextMenu) {
            deleteList(props.currentListContextMenu)
            props.removeList(props.currentListContextMenu)
            props.resetContextMenuCoords()
        }
        if (props.currentTaskContextMenu && props.currentTaskContextMenu) {
            deleteTask(props.currentListContextMenu, props.currentTaskContextMenu)
            props.removeTask(props.currentListContextMenu, props.currentTaskContextMenu)
            props.resetContextMenuCoords()
        }
    }

    return (
        <ContextMenuWrapper ref={contextMenuRef} {...props}>
            <ContextMenuButton onClick={handleRemoveButtonPressed}>
                <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faTrash} />
                Usuń
            </ContextMenuButton>
        </ContextMenuWrapper>
    )
}

const mapStateToProps = state => ({
    contextMenuCoords: getContextMenuCoords(state),
    contextMenuVisibility: getContextMenuVisibilty(state),
    currentListContextMenu: getCurrentListContextMenu(state),
    currentTaskContextMenu: getCurrentTaskContextMenu(state)
})

const mapDispatchToProps = dispatch => ({
    resetContextMenuCoords: () =>
        dispatch(removeContextMenuCoords({ coords: { x: -9999, y: -9999 } })),
    removeList: listIdToRemove => dispatch(removeList({ listIdToRemove })),
    removeTask: (listId, taskId) => dispatch(removeTask({ listId, taskId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu)

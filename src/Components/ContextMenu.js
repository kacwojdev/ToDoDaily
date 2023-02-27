import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { PrimaryButton } from '../styledComponents'

const ContextMenuWrapper = styled.div`
    width: max-content;
    min-width: 160px;
    position: absolute;
    left: 0;
    top: 110%;
    display: ${props => (props.show ? 'flex' : 'none')};
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
    return (
        <ContextMenuWrapper {...props}>
            <ContextMenuButton>
                <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faTrash} />
                Usuń
            </ContextMenuButton>
        </ContextMenuWrapper>
    )
}

export default ContextMenu

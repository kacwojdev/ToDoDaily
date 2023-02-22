import { ListBox, AddBtn, EditBtn } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSliders } from '@fortawesome/free-solid-svg-icons'
import Task from '../Task'
const List = () => {
    return (
        <div>
            <ListBox>
                <h4>Lista zadań</h4>
                <Task />
                <Task />
                <Task />
                <div>
                    <AddBtn>
                        <FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faPlus} />
                        Dodaj
                    </AddBtn>
                    <EditBtn style={{ marginLeft: '1rem' }}>
                        <FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faSliders} />
                        Edytuj
                    </EditBtn>
                </div>
            </ListBox>
        </div>
    )
}

export default List

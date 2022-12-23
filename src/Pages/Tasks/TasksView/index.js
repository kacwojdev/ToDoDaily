import React, {useState} from 'react'
import SingleTask from '../../../Components/SingleTask'
import styled from 'styled-components'
import { AddTaskButton } from '../../../Components/AddButtons'
import { groups } from '../../../Utils/groups'



const TasksViewStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: baseline;
    gap: 18px;
    margin-top: 1rem;
`

const TasksView = () => {

    const [listOfTasks, setListOfTasks] = useState(groups[0].data)

    return (
        <div>
            <AddTaskButton>
                + Create new task
            </AddTaskButton>
            <TasksViewStyled>
                {listOfTasks != null ? listOfTasks.map((singleTask)  => <SingleTask key={singleTask.id} data={singleTask} />) : "Something went wrong with fetching data.."} 
            </TasksViewStyled>
        </div>
    )

}

export default TasksView
import React, {useState} from 'react'
import SingleTask from '../../../Components/SingleTask'
import styled from 'styled-components'
import { AddTaskButton } from '../../../Components/AddButtons'
import { TasksViewStyled } from '../../../styledComponents'
import { groups } from '../../../Utils/groups'

const TasksView = () => {

    const [listOfTasks, setListOfTasks] = useState(groups[0].data)

    return (
        <div>
            <AddTaskButton>
                + Create new task
            </AddTaskButton>
            <TasksViewStyled>
                {listOfTasks != null ? listOfTasks.filter(task => task.archive == false).map(task  => <SingleTask key={task.id} data={task} />) : "Something went wrong with fetching data.."} 
            </TasksViewStyled>
        </div>
    )

}

export default TasksView
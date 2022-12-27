import React, {useState} from "react"
import { groups } from '../../../Utils/groups'
import { TasksViewStyled } from "../../../styledComponents"
import SingleTask from '../../../Components/SingleTask'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons"

const Archive = () => {
    const [listOfTasks, setListOfTasks] = useState(groups[0].data)
    
    return (
        <div>
            <h2>
                <FontAwesomeIcon style={{marginRight: '10px'}} icon={faBoxArchive} />
                Archived
            </h2>
            <TasksViewStyled>
                {listOfTasks ? listOfTasks.filter(task => task.archive == true).map(task => <SingleTask key={task.id} data={task} />) : 'Something went wrong..'}
            </TasksViewStyled>
        </div>
    )
}

export default Archive
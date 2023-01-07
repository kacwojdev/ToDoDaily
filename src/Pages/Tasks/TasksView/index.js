import { connect } from 'react-redux'
import SingleTask from '../../../Components/SingleTask'
import { AddTaskButton } from '../../../Components/AddButtons'
import { TasksViewStyled } from '../../../styledComponents'
import { useParams } from 'react-router'

const TasksView = ({ groups, addTask }) => {
    const { groupId } = useParams()

    const handleCreateNewTask = () => {
        addTask({
            id: 99,
            content: {
                title: 'Your task title',
                description: 'description here'
            },
            lastModified: new Date().toLocaleTimeString(),
            background: {
                color: 'rgb(255,255,255)',
                image: null
            },
            done: false,
            archive: false,
            dateGoal: new Date().toLocaleDateString()
        })
    }

    return (
        <div>
            <AddTaskButton handleCreatingNewTask={handleCreateNewTask}>
                + Create new task
            </AddTaskButton>
            <TasksViewStyled>
                {groups
                    .filter(group => group.id == groupId)[0]
                    .data.map(task => (
                        <SingleTask key={task.title} data={task} />
                    ))}
            </TasksViewStyled>
        </div>
    )
}

const mapStateToProps = state => ({
    groups: state.groups
})

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch({ type: 'TASK_ADD', task })
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksView)

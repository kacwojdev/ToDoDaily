import { connect } from 'react-redux'
import TasksGroup from '../../Components/TasksGroup'

const GroupsList = ({ groups }) => {
    return (
        <>
            {groups.map(group => (
                <TasksGroup groupData={group} />
            ))}
        </>
    )
}

const mapStateToProps = state => ({
    groups: state.groups
})

export default connect(mapStateToProps)(GroupsList)

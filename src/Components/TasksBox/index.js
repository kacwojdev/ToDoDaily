import React, { useState } from 'react'

const TasksBox = ({title}) => {

    const defaultTasks = [{
        title: "Lorem",
        desc: "Lorem ipsum dolor sit amet. qafasdf 2  awsfaef 2 2 ",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 2",
        desc: "Lorem ipsum dolor sit amet. asd q we r23 2 23 2 af a",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 3",
        desc: "Lorem ipsum dolor sit amet. asdf wewq sad fqwe fqw ",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 4",
        desc: "Lorem ipsum dolor sit amet. asdfas sadf ",
        date: new Date().toLocaleTimeString(),
    }]

    const [listOfTasks, setListOfTasks] = useState(defaultTasks)

    const createNewTask = () => {
        console.log('created new task')
    }

    return (
        <div>
            <h2>{title}</h2>
            {listOfTasks.map(singleTask => <SingleTask 
                                                key={singleTask.date}
                                                title={singleTask.title}
                                                description={singleTask.desc}
                                                date={singleTask.date} />)} 
            <button onClick={() => createNewTask()}>New task</button>    
        </div>
    )
}

const SingleTask = ({title, description, date}) => {

    const [isEditing, setEditingState] = useState(false);


    return isEditing ? (
        <div>
            <input placeholder={title} />
            <textarea value={description}>

            </textarea>
            <span>{date}</span>
            <button onClick={() => setEditingState(false)}>Save</button>
        </div>
    ) : (
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <span>{date}</span>
            <button onClick={() => setEditingState(true)}>Edit</button>
        </div>
    )
}

export default TasksBox;
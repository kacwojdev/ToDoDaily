import React, { useState, useEffect, forwardRef, createRef } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faImage, faBoxArchive, faEllipsisVertical, faDropletSlash, faTrashCan, faTag } from '@fortawesome/free-solid-svg-icons'
import { DarkenButton, CardTask, TaskOptionsButton } from '../styledComponents'

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row-reversed;
    justify-content: space-between;
    align-items: baseline;

    & span {
        font-size: 0.7em;
    }
`

const BgModalStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    background: white;
    padding: .5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);
`

const OptionsModalStyled = styled.div`
    background: white;
    padding: 0.5rem 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);

    button {
        border: none;
        padding: .5rem 1rem;
        background: white;
        cursor: pointer;
        color: grey;
        transition: all .2s ease-in;
    }

    button:hover {
        color: black;
        background: rgb(241 241 241);
    }
`

const ColorCircle = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: ${props => props.color || 'white'};

    &:hover {
        border: 2px solid black;
    }
`

const NoColorCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 36px;
    width: 36px;
    border-radius: 50%;

    &:hover {
        border: 2px solid black;
    }
`

const SingleTask = ({data, handleRemoveTask, handleSavingTask}) => {

    const optionsModalBtnRef = createRef()
    const bgModalBtnRef = createRef()

    const [taskDesc, setTaskDesc] = useState(data.content.description)
    const [taskTitle, setTaskTitle] = useState(data.content.title)
    const [taskBackground, setTaskBackground] = useState(data.background)
    const [lastModified, setNewLastModified] = useState(data.lastModified)
    const [isArchivied, setArchivied] = useState(data.archivied)
    const [isDone, setDone] = useState(data.done)
    const [taskDateGoal, setTaskDateGoal] = useState(data.dateGoal)
    const [bgModalOpened, setBgModalOpened] = useState(false)
    const [optionsModalOpened, setOptionsModalOpened] = useState(false)
    const [optionsModalPos, setOptionsModalPos] = useState({})
    const [bgModalPos, setBgModalPos] = useState({})

    useEffect(() => {
        function handleWindowResize() {
            setOptionsModalPos({
                top: optionsModalBtnRef.current.getBoundingClientRect().bottom,
                left: optionsModalBtnRef.current.getBoundingClientRect().right
            })
            
            setBgModalPos({
                top: bgModalBtnRef.current.getBoundingClientRect().bottom,
                left: bgModalBtnRef.current.getBoundingClientRect().right
            })
        }

        
        window.addEventListener('resize', handleWindowResize)
    })

    useEffect(() => {
        setOptionsModalPos({
            top: optionsModalBtnRef.current.getBoundingClientRect().bottom,
            left: optionsModalBtnRef.current.getBoundingClientRect().right
        })
        
        setBgModalPos({
            top: bgModalBtnRef.current.getBoundingClientRect().bottom,
            left: bgModalBtnRef.current.getBoundingClientRect().right
        })

        console.log(optionsModalPos)
        console.log(bgModalPos)
    }, [])

    const saveTask = taskId => {
        
    }

    const deleteTask = (taskId) => {
       
    }

    const handleBgModalOpen = () => {
        console.log('open  bg modal')
        setBgModalOpened(!bgModalOpened);
    }

    const handleOptionsModalOpen = () => {
        console.log('open options modal')
        setOptionsModalOpened(!optionsModalOpened);
    }

    const handleAddReminder = () => {
        console.log('adding new reminder')
    }

    const handleArchive = () => {
        console.log('task added to archive')
    }

    const handleChangeColor = color => {
        setTaskBackground({
            color: color,
            image: null
        })
    }

    return (
        <CardTask style={{backgroundColor: taskBackground.color}}>
            <TaskTitleArea content={taskTitle} />
            <TaskDescriptionArea content={taskDesc} />
            <span>Due time: {taskDateGoal}</span>
            <span>Last modified: {lastModified}</span>
            <ActionsContainer>
                <ActionButton action={handleAddReminder}>
                    <FontAwesomeIcon icon={faBell} />
                </ActionButton>
                <ActionButton ref={bgModalBtnRef} action={handleBgModalOpen}>
                    <FontAwesomeIcon icon={faImage} />
                </ActionButton>
                <ActionButton action={handleArchive}>
                    <FontAwesomeIcon icon={faBoxArchive} />
                </ActionButton>
                <ActionButton ref={optionsModalBtnRef} action={handleOptionsModalOpen}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </ActionButton>
            </ActionsContainer>
            <BgModal style={{
                position: 'absolute',
                top: bgModalPos.top,
                left: bgModalPos.left,
                transition: 'all .2s ease-in-out'
            }} opened={bgModalOpened} handleChangeColor={handleChangeColor} />
            <OptionsModal style={{
                position: 'absolute',
                top: optionsModalPos.top,
                left: optionsModalPos.left,
                transition: 'all .2s ease-in-out'
            }}  opened={optionsModalOpened} />
        </CardTask>
    )
}

const ActionButton = forwardRef((props, ref) => {

    return (
        <TaskOptionsButton ref={ref} onClick={props.action}>
            {props.children}   
        </TaskOptionsButton>
    )
})

class TaskDescriptionArea extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef();
        this.state = {html: props.content}
    }

    handleChange = event => {
        this.setState({html: event.target.value})
    }

    render() {
        return (
            <ContentEditable
                style={{
                    minHeight: '50px',
                    width: '100%',
                    fontSize: '1rem',
                }}
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange} />
        )
    }
}

class TaskTitleArea extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef()
        this.state = {html: props.content}
    }

    handleChange = event => {
        this.setState({html: event.target.value})
    }

    render() {
        return (
            <ContentEditable
                style={{
                    width: '100%',
                    fontWeight: 'bold',
                }}
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange} />
        )
    }
}

const OptionsModal = (props) => {
    return props.opened && (
        <OptionsModalStyled {...props}>
            <button style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}>
                <FontAwesomeIcon icon={faTrashCan} />
                Remove task
            </button>
            <button style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}>
                <FontAwesomeIcon icon={faTag} />
                Add label
            </button>
        </OptionsModalStyled>
    )
}

const BgModal = (props) => {

    // colors that user could change task background
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#fdcfe8']

    const changeColor = color => {
        props.handleChangeColor(color)
    }

    return props.opened && (
        <BgModalStyled {...props}>
            <NoColorCircle onClick={() => changeColor('white')}>
                <FontAwesomeIcon icon={faDropletSlash} />
            </NoColorCircle>
            { colors.map(color => <ColorCircle onClick={() => changeColor(color)} color={color} />)}
        </BgModalStyled>
    )
}

export default SingleTask
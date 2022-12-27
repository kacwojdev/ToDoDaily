import React, { useState, forwardRef, useRef, createRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faImage, faBoxArchive, faEllipsisVertical, faDropletSlash, faTrashCan, faTag } from '@fortawesome/free-solid-svg-icons'
import { CardTask, TaskOptionsButton } from '../../styledComponents'

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
    z-index: 999;
    gap: 10px;
    align-items: center;
    background: white;
    padding: .5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);
    position: absolute;
    display: ${({opened}) => opened ? 'flex' : 'none'};
    max-width: ${({parentWidth}) => parentWidth + 'px'}
    flex-direction: row;
    flex-wrap: wrap;
`

const OptionsModalStyled = styled.div`
    z-index: 999;
    position: absolute;
    background: white;
    padding: 0.5rem 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);
    display: ${({opened}) => opened ? 'flex' : 'none'};
    flex-direction: column;

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

    const optionsModalRef = createRef()
    const optionsModalBtnRef = createRef()
    const bgModalRef = createRef()
    const bgModalBtnRef = createRef()
    const selfRef = useRef(null)

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
    const [isTaskHover, setTaskHover] = useState(false)
    const [selfWidth, setSelfWidth] = useState(0)

    useLayoutEffect(() => {
        setSelfWidth(selfRef.current.offsetWidth)
    }, [])

    const saveTask = taskId => {
        
    }

    const deleteTask = (taskId) => {
       
    }

    const handleBgModalOpen = () => {
        setBgModalOpened(!bgModalOpened);
    }

    const handleOptionsModalOpen = () => {
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
        <CardTask ref={selfRef} style={{backgroundColor: taskBackground.color}}>
            <TaskTitleArea content={taskTitle} />
            <TaskDescriptionArea content={taskDesc} />
            <span>Due time: {taskDateGoal}</span>
            <span>Last modified: {lastModified}</span>
            <ActionsContainer isHover={isTaskHover}>
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
            <BgModal 
                ref={bgModalRef} 
                style={{
                    top: '100%',
                    left: 0,
                    maxWidth: selfWidth
                }} 
                opened={bgModalOpened} 
                handleChangeColor={handleChangeColor} 
            />
            <OptionsModal ref={optionsModalRef} style={{
                    top: '100%',
                    right: 0,
                }} 
                opened={optionsModalOpened}
            />
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

    handleBlur = event => {
        console.log('save title with value: ', this.state.html)
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
                onChange={this.handleChange} 
                onBlur={this.handleBlur}/>
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

    handleBlur = event => {
        console.log('save title with value: ', this.state.html)
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
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
        )
    }
}

const OptionsModal = forwardRef((props, ref) => {
    return (
        <OptionsModalStyled ref={ref} {...props}>
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
})

const BgModal = forwardRef((props, ref) => {

    // colors that user could change task background
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb',]

    const changeColor = color => {
        props.handleChangeColor(color)
    }

    return (
        <BgModalStyled ref={ref} {...props} >
            <NoColorCircle onClick={() => changeColor('white')}>
                <FontAwesomeIcon icon={faDropletSlash} />
            </NoColorCircle>
            { colors.map(color => <ColorCircle onClick={() => changeColor(color)} color={color} key={color}/>)}
        </BgModalStyled>
    )
})

export default SingleTask
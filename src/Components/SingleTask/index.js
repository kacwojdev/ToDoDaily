import React, { useState, forwardRef, useRef, createRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faImage,
    faBoxArchive,
    faEllipsisVertical,
    faDropletSlash,
    faTrashCan,
    faTag
} from '@fortawesome/free-solid-svg-icons'
import { CardTask, TaskOptionsButton } from '../../styledComponents'
import OutsideClickHandler from 'react-outside-click-handler'
import {
    ActionsContainer,
    BgModalStyled,
    OptionsModalStyled,
    ColorCircle,
    NoColorCircle
} from './styles'

const SingleTask = ({ data, handleRemoveTask, handleSavingTask }) => {
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

    const saveTask = taskId => {}

    const deleteTask = taskId => {}

    const handleBgModalOpen = value => {
        setBgModalOpened(value)
    }

    const handleOptionsModalOpen = value => {
        setOptionsModalOpened(value)
    }

    const handleAddReminder = () => {
        console.log('adding new Reminder')
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
        <CardTask ref={selfRef} style={{ backgroundColor: taskBackground.color }}>
            <TaskTitleArea content={taskTitle} />
            <TaskDescriptionArea content={taskDesc} />
            <div>
                <span>Due time: {taskDateGoal}</span>
                <span>Last modified: {lastModified}</span>
            </div>
            <ActionsContainer isHover={isTaskHover}>
                <ActionButton action={handleAddReminder}>
                    <FontAwesomeIcon icon={faBell} />
                </ActionButton>
                <ActionButton action={() => handleBgModalOpen(true)}>
                    <FontAwesomeIcon icon={faImage} />
                </ActionButton>
                <ActionButton action={handleArchive}>
                    <FontAwesomeIcon icon={faBoxArchive} />
                </ActionButton>
                <ActionButton action={() => handleOptionsModalOpen(true)}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </ActionButton>
            </ActionsContainer>
            <BgModal
                style={{
                    top: '100%',
                    left: 0,
                    maxWidth: selfWidth
                }}
                handleOutsideClick={handleBgModalOpen}
                opened={bgModalOpened}
                handleChangeColor={handleChangeColor}
            />
            <OptionsModal
                style={{
                    top: '100%',
                    right: 0
                }}
                handleOutsideClick={handleOptionsModalOpen}
                opened={optionsModalOpened}
            />
        </CardTask>
    )
}

const ActionButton = props => {
    return <TaskOptionsButton onClick={props.action}>{props.children}</TaskOptionsButton>
}

class TaskDescriptionArea extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef()
        this.state = { html: props.content }
    }

    handleChange = event => {
        this.setState({ html: event.target.value })
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
                    fontSize: '1rem'
                }}
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }
}

class TaskTitleArea extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef()
        this.state = { html: props.content }
    }

    handleChange = event => {
        this.setState({ html: event.target.value })
    }

    handleBlur = event => {
        console.log('save title with value: ', this.state.html)
    }

    render() {
        return (
            <ContentEditable
                style={{
                    width: '100%',
                    fontWeight: 'bold'
                }}
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }
}

const OptionsModal = props => {
    return (
        <OptionsModalStyled {...props}>
            <OutsideClickHandler onOutsideClick={() => props.handleOutsideClick(false)}>
                <button
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                    Remove task
                </button>
                <button
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <FontAwesomeIcon icon={faTag} />
                    Add label
                </button>
            </OutsideClickHandler>
        </OptionsModalStyled>
    )
}

const BgModal = (props, ref) => {
    // colors that user could change task background
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb']

    const changeColor = color => {
        props.handleChangeColor(color)
    }

    return (
        <BgModalStyled {...props}>
            <OutsideClickHandler onOutsideClick={() => props.handleOutsideClick(false)}>
                <NoColorCircle onClick={() => changeColor('white')}>
                    <FontAwesomeIcon icon={faDropletSlash} />
                </NoColorCircle>
                {colors.map(color => (
                    <ColorCircle onClick={() => changeColor(color)} color={color} key={color} />
                ))}
            </OutsideClickHandler>
        </BgModalStyled>
    )
}

export default SingleTask

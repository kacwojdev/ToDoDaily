import React, { useState, forwardRef, useRef, createRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faImage,
    faBoxArchive,
    faEllipsisVertical,
    faDropletSlash,
    faTrashCan,
    faTag,
    faClock
} from '@fortawesome/free-solid-svg-icons'
import { CardTask, TaskOptionsButton } from '../../styledComponents'
import OutsideClickHandler from 'react-outside-click-handler'
import {
    ActionsContainer,
    BgModalStyled,
    OptionsModalStyled,
    ColorCircle,
    NoColorCircle,
    OptionsModalBtn,
    DueTimeLabel,
    ReminderModalStyled
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
    const [reminderModalOpened, setReminderModalOpened] = useState(false)
    const [optionsModalPos, setOptionsModalPos] = useState({})
    const [isTaskHover, setTaskHover] = useState(false)
    const [selfWidth, setSelfWidth] = useState(0)
    const [calendarValue, setCalendarValue] = useState(new Date())

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

    const handleReminderModalOpen = value => {
        setReminderModalOpened(value)
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
                <DueTimeLabel>
                    <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faClock} />
                    <span>{taskDateGoal}</span>
                </DueTimeLabel>
            </div>
            <ActionsContainer isHover={isTaskHover}>
                <ActionButton action={() => handleReminderModalOpen(true)}>
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
            <ReminderModal
                style={{
                    top: '100%',
                    right: 0
                }}
                handleOutsideClick={handleReminderModalOpen}
                opened={reminderModalOpened}
                setCalendarValue={setCalendarValue}
                calendarValue={calendarValue}
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
                <OptionsModalBtn>
                    <FontAwesomeIcon icon={faTag} />
                    Add label
                </OptionsModalBtn>
                <OptionsModalBtn>
                    <FontAwesomeIcon icon={faClock} />
                    Set due time
                </OptionsModalBtn>
                <OptionsModalBtn>
                    <FontAwesomeIcon icon={faTrashCan} />
                    Remove task
                </OptionsModalBtn>
            </OutsideClickHandler>
        </OptionsModalStyled>
    )
}

const BgModal = props => {
    // colors that user could change task background
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb']

    const changeColor = color => {
        props.handleChangeColor(color)
    }

    return (
        <OutsideClickHandler onOutsideClick={() => props.handleOutsideClick(false)}>
            <BgModalStyled {...props}>
                <NoColorCircle onClick={() => changeColor('white')}>
                    <FontAwesomeIcon icon={faDropletSlash} />
                </NoColorCircle>
                {colors.map(color => (
                    <ColorCircle onClick={() => changeColor(color)} color={color} key={color} />
                ))}
            </BgModalStyled>
        </OutsideClickHandler>
    )
}

const ReminderModal = props => {
    return (
        <ReminderModalStyled {...props}>
            <OutsideClickHandler onOutsideClick={() => props.handleOutsideClick(false)}>
                <Calendar onChange={props.setCalendarValue} value={props.calendarValue} />
            </OutsideClickHandler>
        </ReminderModalStyled>
    )
}

export default SingleTask

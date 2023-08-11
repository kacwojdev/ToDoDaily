import { getRandomKeyFor } from './helpers'

export const getCurrentListOfGroups = () => {
    let l = JSON.parse(localStorage.getItem('todoDaily_data'))
    if (l) {
        return l.groups
    } else {
        return null
    }
}

export const getGroupOfId = id => {
    let l = JSON.parse(localStorage.getItem('todoDaily_data'))
    let g = l.groups.filter(group => group.groupId == id)
    return g[0]
}

export const getCurrentListOfTasks = () => {
    let l = JSON.parse(localStorage.getItem('todoDaily_data'))
    return l.groupId.tasks
}

export const createNewGroup = newName => {
    let currentList = getCurrentListOfGroups('todoDaily_data')
    let updatedList = []
    if (currentList) {
        updatedList = [
            { groupId: getRandomKeyFor('group'), groupName: newName, tasks: [] },
            ...currentList
        ]
    } else {
        updatedList = [{ groupId: getRandomKeyFor('group'), groupName: newName, tasks: [] }]
    }
    localStorage.setItem('todoDaily_data', JSON.stringify({ groups: updatedList }))
}

export const removeGroupOfId = groupId => {
    let currentList = getCurrentListOfGroups('todoDaily_data')
    let indexToRemove = 0
    for (let element of currentList) {
        if (!(element.groupId == groupId)) {
            indexToRemove += 1
        } else {
            break
        }
    }

    currentList.shift(indexToRemove, 1)
    localStorage.setItem('todoDaily_data', currentList)
}

export const updateGroup = (groupId, newGroupName) => {
    let currentList = getCurrentListOfGroups('todoDaily_data')
    let indexToUpdate = 0
    for (let element of currentList) {
        if (!(element.groupId == groupId)) {
            this.indexToUpdate += 1
        } else {
            break
        }
    }
    currentList[indexToUpdate] = { groupName: newGroupName, ...currentList[indexToUpdate] }
    localStorage.setItem('todoDaily_data', currentList)
}

export const createTaskInGroupOfId = id => {
    const defaultTask = [
        {
            title: 'Your favourite title goes here',
            desc: 'Create yours first task here. Edit this or create the new one :D',
            date: new Date().toLocaleTimeString()
        }
    ]

    let l = JSON.parse(localStorage.getItem('todoDaily_data'))
    let g = l.groups.filter(group => group.groupId == id)
    let t = []
    if (g.tasks) {
        t = [defaultTask, ...g.tasks]
    } else {
        t = [defaultTask]
    }
    g.tasks = t
    let index = 0
    for (let element of l.groups) {
        if (element.groupId != id) {
            index += 1
        } else {
            break
        }
    }
    l.groups[index] = g
    console.log(index)
    console.log(l)
    console.log(g)

    localStorage.setItem('todoDaily_data', JSON.stringify(l))
}

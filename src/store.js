import { configureStore } from '@reduxjs/toolkit'

// selectors
export const getContextMenuCoords = state => state.utils.contextMenuCoords
export const getContextMenuVisibilty = state => state.utils.contextMenuVisibility
export const getCurrentListContextMenu = state => state.utils.currentListContextMenu
export const getCurrentTaskContextMenu = state => state.utils.currentTaskContextMenu
export const getAllLists = state => state.lists

// action creators
export const setContextMenuCoords = payload => ({ type: 'SET_CONTEXT_MENU_COORDS', payload })
export const removeContextMenuCoords = payload => ({ type: 'REMOVE_CONTEXT_MENU_COORDS', payload })
export const removeList = payload => ({ type: 'REMOVE_LIST', payload })
export const addList = payload => ({ type: 'ADD_LIST', payload })
export const updateLists = payload => ({ type: 'UPDATE_LISTS', payload })
export const addTask = payload => ({ type: 'ADD_TASK', payload })
export const removeTask = payload => ({ type: 'REMOVE_TASK', payload })
export const updateTasks = payload => ({ type: 'UPDATE_TASKS', payload })
export const setTaskDone = payload => ({ type: 'SET_TASK_DONE', payload })

// sub reducers
const utilsSubReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTEXT_MENU_COORDS':
            return {
                ...state,
                utils: {
                    contextMenuCoords: action.payload.coords,
                    contextMenuVisibility: true,
                    currentListContextMenu: action.payload.list,
                    currentTaskContextMenu: action.payload.task
                }
            }
        case 'REMOVE_CONTEXT_MENU_COORDS':
            return {
                ...state,
                utils: {
                    contextMenuCoords: action.payload.coords,
                    contextMenuVisibility: false,
                    currentListContextMenu: null,
                    currentTaskContextMenu: null
                }
            }
        default:
            return state
    }
}

const listsSubReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_LIST':
            console.log(action.payload)
            return {
                ...state,
                lists: state.lists.filter(list => list.id != action.payload.listIdToRemove)
            }
        case 'ADD_LIST':
            console.log(state.lists)
            return {
                ...state,
                lists: [...state.lists, action.payload.newList]
            }
        case 'UPDATE_LISTS':
            return {
                ...state,
                lists: [...action.payload.updatedLists]
            }
        default:
            return state
    }
}

const tasksSubReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return Object.assign({}, state, {
                lists: state.lists.map(list => {
                    if (list.id != action.payload.listId) {
                        return list
                    }
                    return Object.assign({}, list, {
                        tasks: list.tasks.filter(task => task.id != action.payload.taskId)
                    })
                })
            })
        case 'ADD_TASK':
            return Object.assign({}, state, {
                lists: state.lists.map(list => {
                    if (list.id != action.payload.listId) {
                        return list
                    }
                    let newList = {}
                    if (list.tasks) {
                        newList = Object.assign({}, list, {
                            tasks: [...list.tasks, action.payload.newTask]
                        })
                    } else {
                        newList = Object.assign({}, list, {
                            tasks: [action.payload.newTask]
                        })
                    }
                    return newList
                })
            })

        case 'UPDATE_TASKS':
            return Object.assign({}, state, {
                lists: state.lists.map(list => {
                    if (list.id != action.payload.listId) {
                        return list
                    }
                    return Object.assign({}, list, {
                        tasks: [...action.payload.updatedTasks]
                    })
                })
            })
        case 'SET_TASK_DONE':
            return Object.assign({}, state, {
                lists: state.lists.map(list => {
                    if (list.id != action.payload.listId) {
                        return list
                    }
                    return Object.assign({}, list, {
                        tasks: list.tasks.map(task => {
                            if (task.id != action.payload.taskId) {
                                return task
                            }
                            return Object.assign({}, task, {
                                done: action.payload.isDone
                            })
                        })
                    })
                })
            })
        default:
            return state
    }
}

// reducer
const reducer = (state, action) => {
    let newState = state
    newState = utilsSubReducer(newState, action)
    newState = listsSubReducer(newState, action)
    newState = tasksSubReducer(newState, action)
    return newState
}

const initialState = {
    lists: [],
    utils: {
        contextMenuCoords: { x: -9999, y: -9999 },
        contextMenuVisibility: false,
        currentListContextMenu: null,
        currentTaskContextMenu: null
    }
}

const store = configureStore({
    reducer,
    preloadedState: initialState
})

export default store

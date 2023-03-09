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

// reducer
const reducer = (state, action) => {
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
        case 'REMOVE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list.id != action.payload.listIdToRemove)
            }
        case 'ADD_LIST':
            return {
                ...state,
                lists: [...state.lists, action.payload.newList]
            }
        case 'UPDATE_LISTS':
            return {
                ...state,
                lists: [...action.payload.updatedLists]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                lists: state.lists.tasks.filter(task => task.id != action.payload.taskIdToRemove)
            }
        case 'ADD_TASK':
            const tasksUpdated = [
                ...state.lists.filter(list => list.id == action.payload.listId).tasks,
                action.newTask
            ]
            const listUpdated = state.lists.filter(list => list.id == action.payload.listId)
            listUpdated.tasks = tasksUpdated
            return {
                ...state,
                lists: [state.lists.filter(list => list.id != action.payload.listId), listUpdated]
            }
        case 'UPDATE_TASKS':
            const _tasksUpdated = [...action.payload.updatedTasks]
            const _listUpdated = state.lists.filter(list => list.id == action.payload.listId)
            _listUpdated.tasks = _tasksUpdated
            return {
                ...state,
                lists: [
                    ...state.lists.filter(list => list.id != action.payload.listId),
                    _listUpdated
                ]
            }
        default:
            return state
    }
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

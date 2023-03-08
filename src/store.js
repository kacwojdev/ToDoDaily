import { configureStore } from '@reduxjs/toolkit'
import { groups } from './Utils/groups'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTEXT_MENU_COORDS':
            return {
                ...state,
                utils: {
                    contextMenuCoords: action.coords,
                    contextMenuVisibility: true,
                    currentListContextMenu: action.list,
                    currentTaskContextMenu: action.task
                }
            }
        case 'REMOVE_CONTEXT_MENU_COORDS':
            return {
                ...state,
                utils: {
                    contextMenuCoords: action.coords,
                    contextMenuVisibility: false,
                    currentListContextMenu: null,
                    currentTaskContextMenu: null
                }
            }
        case 'REMOVE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list.id != action.listIdToRemove)
            }
        case 'ADD_LIST':
            return {
                ...state,
                lists: [...state.lists, action.newList]
            }
        case 'UPDATE_LISTS':
            return {
                ...state,
                lists: [...action.updatedLists]
            }
        default:
            return state
    }
}

const initialState = {
    lists: ['testowe'],
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

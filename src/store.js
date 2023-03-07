import { configureStore } from '@reduxjs/toolkit'
import { groups } from './Utils/groups'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTEXT_MENU_COORDS':
            return { utils: { contextMenuCoords: action.coords, contextMenuVisibility: true } }
        case 'REMOVE_CONTEXT_MENU_COORDS':
            return { utils: { contextMenuCoords: action.coords, contextMenuVisibility: false } }
        default:
            return state
    }
}

const initialState = {
    groups: groups,
    utils: {
        contextMenuCoords: { x: -9999, y: -9999 },
        contextMenuVisibility: false
    }
}

const store = configureStore({
    reducer,
    preloadedState: initialState
})

export default store

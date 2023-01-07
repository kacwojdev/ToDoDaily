import { createStore } from 'redux'
import { groups } from './Utils/groups'

const reducer = (state, action) => {
    switch (action.type) {
        case 'GROUP_ADD':
            return { groups: [...state.groups, action.group] }
        default:
            return state
    }
}

const initialState = {
    groups: groups
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

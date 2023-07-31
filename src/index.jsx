// react deps
import React from 'react'
import ReactDOM from 'react-dom/client'
// redux deps
import { Provider } from 'react-redux'
import store from './store'
// components
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

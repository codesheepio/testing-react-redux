import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './style.css'

const preloadedState = {
  todos: [
    { id: 1, text: 'Feed cat', complete: false },
    { id: 2, text: 'Drink coffee', complete: true },
  ],
}

const store = createStore(
  rootReducer,
  preloadedState,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)

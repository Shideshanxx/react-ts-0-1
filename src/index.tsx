import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@css/index.scss'

try {
    ReactDOM.render(<App/>, document.getElementById('root'))
} catch (error) {
    console.log(error)
}
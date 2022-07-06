import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {
    BrowserRouter,
    Routers,
    Route,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>Hello World</BrowserRouter>)
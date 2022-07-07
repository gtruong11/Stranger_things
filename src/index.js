import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {
    BrowserRouter,
    Routers,
    Route,
} from 'react-router-dom'
import{
    App,
    Header,
    Register,
} from "./components"

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    <Header/>
    <Register/>
    
      <App />
    </BrowserRouter>)
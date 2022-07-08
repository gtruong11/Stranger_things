import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { getAllPosts } from "../api";
import { Header, Register, Login, Home, Search, PostPage } from "./";
import "./App.css"


// This would be in your component File
async function handleSubmit(event) {
  event.preventDefault();
  console.log("this is your event");
  const backFromAPI = awaitregisterPerson(event);
}

{
  /* <form>

</form>
const result = await response.json()
const token = result.data.token


localStorage.setItem("token", token)
localStorage.getItem(token)

const g */
}

const App = () => {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/posts" element={<PostPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path='/home" */}
      </Routes>

      {/* <Register />
      <Login /> */}
    
      {/* <div id='main-section'>
          <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
          </Switch>
      </div> */}
      
    </div>
  );
};
export default App;

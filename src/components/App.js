import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { getAllPosts } from "../api";
import { Header, Register, Login, Home, Search } from "./";
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
  const [allPosts, setAllPosts] = useState([]);
  // const fetchAllPosts = async () => {
  //   const data = await getAllPosts();
  //   setAllPosts(data);
  // };
  // fetchAllPosts();
  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setAllPosts(posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const displayPosts = allPosts.map((posts, index) => {
    return (
      <div id="fullPost">
        <h2>{posts.title}</h2>
        <h3>{posts.description}</h3>
        <div>
          <div>{posts.location}</div>
          <div>{posts.price}</div>
        </div>
        
      </div>
    );
  });
  return (
    <div>
      
      <Header />
      <Register />
      <Login />
      <div>
        {displayPosts}
        <button onClick={getAllPosts}>Push Me</button>
      </div>
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

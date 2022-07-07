import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";
import { Header, Register } from "./";

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
      <div posts={posts} key={index}>
        <h2>{posts.title}</h2>
        <h3>{posts.description}</h3>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <Register />
      <div>
        {displayPosts}
        <button onClick={getAllPosts}>Push Me</button>
      </div>
    </div>
  );
};
export default App;

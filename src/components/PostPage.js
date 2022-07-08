import React, {useState, useEffect } from "react";
import { getAllPosts } from "../api";

const PostPage = (props) => {
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
            {displayPosts}
        </div>
    )
}
export default PostPage
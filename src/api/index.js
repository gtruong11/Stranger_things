const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2206-FTB-ET-WEB-FT";
 
export const getToken = ()=>{
  return localStorage.getItem('token');
}

export async function registerPerson(registerUsername, registerPassword) {
  try {
    console.log(registerUsername, registerPassword);
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: registerUsername,
          password: registerPassword,
        },
      }),
    });
    const result = await response.json();

    return result.data.token;
  } catch (error) {
    throw error;
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`);
    const result = await response.json();
    const posts = result.data.posts;
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(Username, Password) {
  try {
    console.log(Username, Password);
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: Username,
          password: Password
        }
      })
    })
    const result = await response.json();
    return result.data.token
  } catch(error) {
    throw error
  }
}
    //       },
    //       body: JSON.stringify({
    //         message: {
    //           content,
    //         },
    //       }),
    //     });
    //     const {
    //       message: { content: newMessage },
    //     } = await response.json();
    //     return newMessage();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

//

export async function editPost(
  title,
  description,
  price,
  location,
  willDeliver,
  POST_ID
) {
  const token = getToken();

  try {
    const response = await fetch(`${BASE_URL}/users/me`, 
      {
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    const token = result.data.token;
    return data;
  } catch (error) {
    throw error;
  }
}


export const deletePost = async (token, postID) => {
  try {
    await fetch(`${BASE_URL}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};



export const addNewPost = async (
    title,
    description,
    price,
    location,
    willDeliver,
    POST_ID,
    token
  ) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        post,
        title,
    description,
    price,
    location,
    willDeliver,
    POST_ID
      }),
    });
    const {
      data: { post: freshPost },
    } = await response.json();
    return freshPost;
  } catch (error) {
    console.error(error);
  }
};


// export async function getUserInfo(){
// >>>>>>> Stashed changes

//     const result = await response.json();
//     const token = result.data.token;

//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function makeMessage(postID, content) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: {
              content,
            },
          }),
        });
        const {
          message: { content: newMessage },
        } = await response.json();
        return newMessage();
      } catch (error) {
        console.error(error);
      }
};


export async function getUserInfo(token){
      try { 
        const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {
    
        headers: {
          'Content-Type': "application/JSON",
          'Authorization': `Bearer ${token}`
        }})
        
        const result = await response.json()
        // const token = result.data.token
        return result;
      } catch (error) {
        throw error;
      }}

//

// export async function editPost(
//   title,
//   description,
//   price,
//   location,
//   willDeliver,
//   POST_ID
// ) {
//   const token = getToken();

//   try {
//     const response = await fetch(`${BASE_URL}/users/me`, 
//       {
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/JSON",
//           "Authorization": `Bearer ${token}`,
//         },
//       }
//     );
//     const result = await response.json();
//     const token = result.data.token;
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }


// export const deletePost = async (token, postID) => {
//   try {
//     await fetch(`${BASE_URL}/posts/${postID}`, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json",
//         "Authorization": `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };



// export const addNewPost = async (
//     title,
//     description,
//     price,
//     location,
//     willDeliver,
//     POST_ID,
//     token
//   ) => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Authorization": `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         post,
//         title,
//     description,
//     price,
//     location,
//     willDeliver,
//     POST_ID
//       }),
//     });
//     const {
//       data: { post: freshPost },
//     } = await response.json();
//     return freshPost;
//   } catch (error) {
//     console.error(error);
//   }
// };


// export async function Authentication (){
  
//     try{
//       const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`,
//       const result = await response.json(),
//       const posts = result.data.posts,{method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
//   return {data}
// }})
// }

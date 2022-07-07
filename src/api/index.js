import axios from "axios"


const BASE_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT_NAME = "2206-FTB-ET-WEB-FT"

export async function registerPerson(registerUsername, registerPassword){
  try{ 
    console.log(registerUsername, registerPassword)
    const response = await 
        fetch(`${BASE_URL}${COHORT_NAME}/users/register`,
        {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            user: {
              username: registerUsername,
              password: registerPassword
            }
          })
        }
        )
        const result = await response.json();

        return result.data.token
    } catch (error){
      throw error
    }
}

 
export async function getAllPosts() {
        try {
            const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`)
            const result = await response.json()
            const posts = result.data.posts
            console.log(posts)
            return posts
        }
        catch (error) {
            console.error(error);

       }
}


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

  
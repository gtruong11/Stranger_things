
const BASE_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT_NAME = "2206-FTB-ET-WEB-FT"

export async function registerPerson(registerUsername, registerPassword){

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
        console.log(response)
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


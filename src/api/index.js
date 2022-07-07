
const BASE_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT_NAME = "2206-FTB-ET-WEB-FT"

async function registerPerson(event){
    const registerUsername = event.target[0].value
    const registerPassword = event.target[1].value

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
    }

export async function getAllPosts() {
        try {
            const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`)
            const result = await response.json()
            const posts = result.data.posts
            return posts
        }
        catch (error) {
            console.error(error);
       }
}


import React from "react";
import {
    getAllPosts
} from "../api"







// // This would be in your component File
// async function handleSubmit(event) {
//     event.preventDefault(
//         console.log("this is your event")
//         const backFromAPI = awaitregisterPerson(event)
//     )
// }



{/* <form>

</form>
const result = await response.json()
const token = result.data.token


localStorage.setItem("token", token)
localStorage.getItem(token)

const g */}

const App= ()=>{
    return(<h1>App Component
        <button onClick={
            getAllPosts
        }
        
        >Push Me</button>
    </h1>)
}
export default App
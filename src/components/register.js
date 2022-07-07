import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import { registerPerson } from '../api'

const Register = () => {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
  
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('i am submitting');
        registerPerson(username, password);
    }

return (
<form id= "register" onSubmit={handleSubmit}>
    <div>
        <fieldset>
    <label>
        Register New User
        <input name='username' type="text" value={username} onChange={(event)=>{
            setUsername(event.target.value)
            console.log(username)
        }}/>
    </label>
    </fieldset>
    <fieldset>
    <label>
        Password 
        <input
        name='password'
        type='text'
        value={password}
        onChange={(event)=>{
            setPassword(event.target.value)
        }}/>
    </label>
    </fieldset>
    </div>
    <button type="submit">Submit</button>

</form>
    )}
export default Register
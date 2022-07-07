import React { useState } from "react";
import ReactDOM from "react-dom/client"

const Register = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const setIsLoading = props.setIsLoading;
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
  
    return (
<form onSubmit={(event) =>{
    event.preventDefault();
    console.log('i am submitting');
    setUsername('');
    setPassword('');
}}>
    <label>Register New User
        <input name='username' type="text" value={username} onChange={(event)=>{
            setUsername(event.target.value)
            console.log(even.target.value)
        }}/>
    </label>

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

    <button type="submit">Submit</button>

</form>
    )}
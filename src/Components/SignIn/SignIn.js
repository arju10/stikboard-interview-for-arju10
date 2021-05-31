import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

const SignIn = () => {
const history = useHistory()
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser =async (e) =>{
        e.preventDefault();

       const res = await fetch('/signin',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
               email,password
           })
       });
       const data  =res.json();

       if(res.status === 400 || !data){
           window.alert("Invalid Email or Password");
       }else{
           window.alert("Login Successfull!");
           history.push("/dashboard");
       }
    }
 
    return (
        <div>
            <h1>Sign In</h1>
            <div>

<form method ="POST">

<div className= "form-group">
    <label htmlFor="email"></label>
    <input type="email" name ="email" id="email" autoComplete="off"  placeholder = "Email Address" 
    value = {email} onChange = {(e) => setEmail(e.target.value)}/>
</div>


<div className= "form-group">
    <label htmlFor="password"></label>
    <input type="password" name ="password" id="password" autoComplete="off"  placeholder = "Password"
    value = {password} onChange = {(e) => setPassword(e.target.value)} />
</div>


<div className= "form-group">
    <input type="submit" name  ="signin" id = "signin" className="form-submit" value = "signin" onClick = {loginUser}/>
    <br />
    <br />
    <small>Sign up Please <Link to = "/signup">Signup</Link></small>
</div>
</form>
</div>
        </div>
    );
};

export default SignIn;
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    const history  = useHistory();
    const [user, setUser] = useState({
        name:"name" , email :"email" ,phone:"phone",password:"password",cpassword:"cpassword"
    });

    let name , value;
    const handleInputs = (e)  => {
console.log(e);
name = e.target.name;
value = e.target.value;

setUser({...user, [name]:value})

    };


const postData = async (e) => {
e.preventDefault();

const {name, email, phone ,password,cpassword} =user;

const res = await fetch("/register", {
    method: "POST",
    headers:{
        "content-type":"application/json"
    },
    body : JSON.stringify({
        name, email, phone ,password,cpassword
    })
});
const data = await res.json();

if(data.status === 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
}else{
    window.alert(" Registration successfull");
    console.log(" Registration successfull");

    history.push("/login")
}

};

    return (
        <div>

            <form method ="POST">
            <div className= "form-group">
                <label htmlFor="name"></label>
                <input type="text" name ="name" id="name" autoComplete="off" value = {user.name} onChange = {handleInputs} placeholder = "Your Name" />
            </div>

            <div className= "form-group">
                <label htmlFor="email"></label>
                <input type="email" name ="email" id="email" autoComplete="off" value = {user.email} onChange = {handleInputs} placeholder = "Email Address" />
            </div>

            <div className= "form-group">
                <label htmlFor="phone"></label>
                <input type="text" name ="phone" id="phone" autoComplete="off" value = {user.phone} onChange = {handleInputs} placeholder = "Phone number" />
            </div>

            <div className= "form-group">
                <label htmlFor="password"></label>
                <input type="password" name ="password" id="password" autoComplete="off" value = {user.password} onChange = {handleInputs} placeholder = "Password" />
            </div>

            <div className= "form-group ">
                <label htmlFor="cpassword"></label>
                <input type="text" name ="cpassword" id="cpassword" autoComplete="off" value = {user.cpassword} onChange = {handleInputs} placeholder = "Confirm Password" />
            </div>
            <div className= "form-group">
                <input type="submit" name  ="signup" id = "signup" className="form-submit" value = "register" onClick = {postData}/>
            </div>
            </form>
            <small>Already have account ? <Link to ="/login">Sign In</Link></small>
            
        </div>
    );
};

export default Signup;
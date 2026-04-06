import { signUp } from "./service/AuthService";
import { useState } from "react";
function SignUp() {
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const [name,setName] = useState("");
    const handleSignUp = async (e) =>{
        e.preventDefault();
        var data =await signUp(name,userEmail,userPassword);
         alert(JSON.stringify(data));
    } 
    return (
        <div>
            <form>
                <label htmlFor="user_name">Enter your Name :   </label>
                <input type="text" id="user_name" value={name} onChange={(e) =>setName(e.target.value)}/><br /><br />
                <label htmlFor="user_email">Enter your Email :   </label>
                <input type="text" id="user_email" value={userEmail} onChange={(e) =>setUserEmail(e.target.value) }/><br /><br />
                <label htmlFor="password">Enter your Password : </label>
                <input type="password" id="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/><br /><br />
                <button type="button" onClick={handleSignUp}>signup :</button>
            </form>
        </div>
    );
}

export default SignUp;
import { signUp } from "./service/AuthService";
function SignUp() {
    return (
        <div>
            <form>
                <label htmlFor="user_name">Enter your Name :   </label>
                <input type="text" id="user_name" /><br /><br />
                <label htmlFor="user_email">Enter your Email :   </label>
                <input type="text" id="user_email" /><br /><br />
                <label htmlFor="password">Enter your Password : </label>
                <input type="password" id="password" /><br /><br />
                <button type="button" onClick={() => signUp(document.getElementById("user_name").value, document.getElementById("user_email").value, document.getElementById("password").value)}>signup :</button>
            </form>
        </div>
    );
}

export default SignUp;
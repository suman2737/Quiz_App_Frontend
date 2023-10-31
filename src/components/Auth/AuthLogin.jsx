import "./AuthLogin.css"
import {useAuth} from "../../context/index";
import { loginHandler } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";


export const AuthLogin = () => {

    const navigate = useNavigate();
    const {username, password, authDispatch} =useAuth();
    console.log({username, password});
    
    const handleChangeUserName = (e) => {
        authDispatch({
            type: "USERNAME",
            payload: e.target.value
        })
    }

    const handleChangePassword = (e)  => {
        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })

    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const token = loginHandler(username,password);
        if(token){
            navigate("/")
        }
        authDispatch({
            type:"TOKEN",
            payload: token
        })
        authDispatch({
            type:"CLEAR_CREDENTIALS"
        })
    }

    const handleTestCredentialClick = () =>{
        const token = loginHandler("suman123","suman123");
        authDispatch({
            type:"TOKEN",
            payload: token
        })
        if(token){
            navigate("/")
        }

    }

    return (
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form onSubmit = {handleFormSubmit}>
                <div className="form-container">
                    <label className="form-lable">Username</label>
                    <input className="form-input lh-ls" placeholder="username" onChange = {handleChangeUserName}/>
                </div>
                <div className="from-container">
                    <label className="from-lable">Password</label>
                    <input  className="form-input lh-ls" placeholder="*******" onChange = {handleChangePassword}/>
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                </div>
            </form>
            <div>
                <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick = {handleTestCredentialClick}>
                    Login with Test Credentials
                </button>
            </div>  
        </div>
    </div>
    )
}
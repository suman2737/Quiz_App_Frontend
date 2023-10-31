import { Fragment } from "react";
import {Link, useNavigate} from "react-router-dom"
import { useQuiz } from "../../context";
import "./Navbar.css"
// import {useAuth} from "../../context/index"

export const Navbar = ({route}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz();

    const handleAuthClick = () => {
        if(token){
            localStorage.clear(); 
            quizDispatch(
                {
                    type: "QUIT"
                }
            )
        }
        navigate("/")
    }

    const handelEndGame = () =>{
        quizDispatch({
            type: "QUIT"
        })

    }


    return(
        <header className="heading d-flex grow-shrink-basis align-center">
           <div className="heading-title-icon d-flex grow-shrink-basis align-center">
             {/* <img class="icon mr-1" src="/assets/image.png" alt="lightbul"/> */}
             <h1 className="heading-title">
                {
                    route === "home" || route === "login" ? (<Link className="link" to="/">Quizify</Link>):"Quizify"
                }
             </h1>
           </div>
       <nav className="navigation">
        <ul className="list-non-bullet">
            {/* {
                token?(
                    <li className="list-item-inline">
                    <Link to="/auth/login" className="link cursor" onClick= {handleLogOutClick}>Logout</Link>
                    </li>

                ):(
                    <li className="list-item-inline">
                    <Link to="/auth/login" className="link cursor">Login</Link>
                    </li>
                )
            } */}

            {
                route === "home" && (
                <li className="list-item-inline">
                <Link to="/auth/login" className="link cursor"onClick= {handleAuthClick}>{token?"Logout":"Login"}</Link>
                </li>

                )
            }
            {
                route === "result" && (
                    <Fragment>
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor" onClick = {handelEndGame}>Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <span cassName="link cursor" onClick = {handleAuthClick}>Logout</span>
                    </li>
                    </Fragment>
                )
            }
        </ul>
    </nav>
</header>
    )
}
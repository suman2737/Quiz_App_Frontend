import "./Result.css"
import {useQuiz} from "../../context";
import { Navbar } from "../../components";
import { Fragment } from "react";


export const Result = () => {

    const {score} = useQuiz();

    return (
        <Fragment>
            <Navbar route="result"/>
            <main className="results">
            <h2>Result</h2>
            <div>
                <span>Your score is {score} 🍕🍕</span>
            </div>

            </main>
        </Fragment>
    )
}
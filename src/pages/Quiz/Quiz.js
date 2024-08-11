import { Fragment } from "react"
import axios from "axios";
import { Navbar,QuestionAndOption } from "../../components"
import { useEffect } from "react"
import { useQuiz } from "../../context/index";

export const Quiz = () =>{

    const { quizCategory, quiz, quizDispatch} = useQuiz();

    useEffect(() => {
        (async () => {
            try{
                const data = await axios.get(`https://quiz-app-backend-mu.vercel.app/`, {
                    headers: { authorization: localStorage.getItem("token") }
                });
                
                const filteredData = data.data.users.filter(({category})=> category === quizCategory)
                // console.log(filteredData)
                if(filteredData && filteredData.length >0){
                    quizDispatch({
                        type:"SET_QUIT",
                        payload: filteredData
                    })
                    localStorage.setItem("quiz", JSON.stringify(filteredData))
                }
                

            }catch(error){
                console.log(error)
            }
        })()

    },[])


    return(
        <Fragment>
            <Navbar route="quiz"/>
            {
                quiz && quiz.length > 0 && <QuestionAndOption quizData={quiz}/>
            }
        </Fragment>
    )
}

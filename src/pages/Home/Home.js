import { Navbar, QuizCard } from "../../components/index"
import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import "./Home.css"

export const Home = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const data = await axios.get(`https://quiz-app-backend.cyclic.app/categories`);
                setCategories(data.data.users);
            }catch(error){
                console.log(error)
            }
        })()
    },[])
    return(
        <Fragment>
             <Navbar route="home"/>
             <main className="main d-flex wrap gap-md align-center justify-center">
             {categories.map((category) => (
              <QuizCard quizCategory={category} key={category.id} />
             ))
             }      
             </main>
        </Fragment>
       
    )
}
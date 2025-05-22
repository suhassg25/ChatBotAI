import Styles from "./Home.module.css";
import Logo from "../assets/logo.png";
import Edit from "../assets/new.png";
import crumbar from "../assets/crumbar.png";
import Soul from "../assets/SoulAi.png";
import sample from "../assets/samplData.json";
import SampleCard from "../Components/SampleCard/SampleCard"
import { useState } from "react";
import {Link} from "react-router-dom";
import ChatPage from "../Components/ChatPage/ChatPage";
const Home = ({children}) => {

    const [clicked, setClicked] = useState({});
    const [input, setInput] = useState('');
    const [questions, setQuestions] = useState([]);
    const [userInput, setUserInput] = useState('');
    
    const matched = (userQuestion)=>{
        const matched = sample.find((item) => item.question.toLowerCase() === userQuestion.toLowerCase());
        if (matched) {
            return matched;
        } else {
            return {question: userQuestion, response: 'Sorry, Did not understand your query!'};
        }
        
    }

    const handleClick = (item) => {
        setClicked(matched(item.question));
        setQuestions([...questions, matched(item.question)]);
    }
const handleSelect = () => {
  
    localStorage.setItem('saved', JSON.stringify(questions));
}
    return (
        <div className={Styles.home}>
            <aside className={Styles.aside}>
                <div className={Styles.aside__header}>
                    <img className={Styles.logo} src={Logo} alt="" />
                 <Link to="/">  <p  onClick={()=>{setClicked({}); setInput(''); setQuestions([]);}}>New Chat</p> </Link>
                     <img className={Styles.edit} src={Edit} alt="" />
                </div>
               <Link to="/history"> <button className={Styles.aside_button}> Past Conversations</button> </Link>
            </aside>
            <div className={Styles.main}>
                <img src={crumbar} className={Styles.crumbar} alt="" />
             <p className={Styles.mainHeading} >Bot AI</p>
                <div className={Styles.main__container}>
                    {
                        children  ? children  : (!clicked['id'] && !input) ?
                        <div className={Styles.main__container}>
                            <h1>How Can I Help You Today?</h1>
                            <img src={Soul} alt="Soul Ai image" style={{ width: 65.3, height: 69, borderRadius: '50%' }} />
                            {
                                <div className={Styles.cards}>
                                    {sample.map((item, index) => (
                                        index < 4 && <SampleCard key={index} samples={item} handler={handleClick} />
                                    ))}
                                </div>
                            }
                        </div>
                    :  <div className={Styles.main__container_2}>
                        {questions.map((it, index)=>{
                          return <ChatPage key={index} data={it}/>
                        })}                
                     </div>
                    }

                    <div className={Styles.inputContainer}>
                        <input className={Styles.input} type="text" value={userInput} onChange={(e)=>setUserInput(e.currentTarget.value)} placeholder="‘Message Bot AI…" />
                        <button className={Styles.btnFont} onClick={()=>{setInput(userInput);  userInput || alert('empty text can not be Sent', false); handleClick({question : userInput}); setUserInput('') }} type="submit" >Send</button>
                        <button className={Styles.btnFont} type="button" onClick={handleSelect}>Save</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
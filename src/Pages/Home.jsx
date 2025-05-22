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
import Feedback from "../Components/FeedBacks/FeedBack";

const Home = ({children}) => {

    const [clicked, setClicked] = useState({});
    const [input, setInput] = useState('');
    const [questions, setQuestions] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [feedBack, setFeedback] = useState('');
    const [isHidden, setIsHidden] = useState(true);
    
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
    setIsHidden(false);
    localStorage.setItem('saved', JSON.stringify(questions));
}   

const setFeedBack = (someFeed) =>{
    setFeedback(someFeed);
    setIsHidden(true);
    alert('Thank you for your feedback', false);
}
    return (
        <div className={Styles.home}>
            <aside className={Styles.aside}>
                <div className={Styles.aside__header}>
                    <img className={Styles.logo} src={Logo} alt="" />
                 <a href="/">  <p  onClick={()=>{setClicked({}); setInput(''); setQuestions([]);}}>New Chat</p> </a>
                     <img className={Styles.edit} src={Edit} alt="" />
                </div>
               <Link to="/history"> <button className={Styles.aside_button}> Past Conversations</button> </Link>
            </aside>
            <div className={Styles.main}>
                <img src={crumbar} className={Styles.crumbar} alt="" />
             <header> <h1 className={Styles.mainHeading} >Bot AI</h1></header>
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

                    {/* <Feedback isHidden={isHidden} handle={setFeedBack}/> */}
                    <form className={Styles.inputContainer} onSubmit={(e)=>{e.preventDefault(); setInput(userInput);  userInput || alert('empty text can not be Sent', false); handleClick({question : userInput}); setUserInput('') }}>
                        <input className={Styles.input} type="text" value={userInput} onChange={(e)=>setUserInput(e.currentTarget.value)} placeholder="Message Bot AI..." />
                        <button className={Styles.btnFont}  type="submit" >Send</button>
                        <button className={Styles.btnFont} type="button" onClick={handleSelect}>Save</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Home;
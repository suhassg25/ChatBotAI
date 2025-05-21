import Styles from "./Home.module.css";
import Logo from "../assets/logo.png";
import Edit from "../assets/new.png";
import crumbar from "../assets/crumbar.png";
import Soul from "../assets/SoulAi.png";
import sample from "../assets/samplData.json";
import SampleCard from "../Components/SampleCard/SampleCard"
const Home = () => {

    return (
        <div className={Styles.home}>
            <aside className={Styles.aside}>
                <div className={Styles.aside__header}>
                    <img className={Styles.logo} src={Logo} alt="" />
                    <p >New Chat</p>
                    <img className={Styles.edit} src={Edit} alt="" />
                </div>
                <button className={Styles.aside_button}> Past Conversations</button>
            </aside>
            <div className={Styles.main}>
                <img src={crumbar} className={Styles.crumbar} alt="" />
                <p className={Styles.mainHeading}>Bot AI</p>
                <div className={Styles.main__container}>
                    <h1>How Can I Help You Today?</h1>
                    <img src={Soul} alt="Soul Ai image" style={{ width: 65.3, height: 69, borderRadius: '50%' }} />
                    {
                        <div className={Styles.cards}>
                            {sample.map((item, index) => (
                               index<4 && <SampleCard key={index} samples={item} />
                            ))}
                        </div>
                    }


                    <div className={Styles.inputContainer}>
                        <input className={Styles.input} type="text" placeholder="‘Message Bot AI…" />
                        <button className={Styles.btnFont} type="submit" >Send</button>
                        <button className={Styles.btnFont} type="button" >Save</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
import Styles from "./SoulAi.module.css";
import soul from "../../assets/SoulAi.png"
import like from "../../assets/like.png"
function UserCard({answer}){
return(
    <span className={Styles.soul}>
        <img src={soul} alt="" style={{width:65, height:69}} />
        <div className={Styles.userCard_content}>
            <h1 className={Styles.userCard__heading}>Soul AI</h1>
            <p className={Styles.userCard__para}> {answer}</p>
            <div style={{display:'flex', gap:40, alignItems:'flex-start', marginTop:-5}}>
                <span className={Styles.userCard_span}> 10.00 AM</span>
                <div style={{display:'flex', gap:10, alignItems:'flex-start'}}> 
                    <img className={Styles.like} src={like} alt="like" />
                    <img className={Styles.disLike} src={like} alt="dislike" />
                </div>
            </div>
        </div>

    </span>
)
}
export default UserCard;
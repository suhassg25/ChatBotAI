import Styles from "./UserCard.module.css";
import userImage from "../../assets/userImage.png"
function UserCard({question}){
return(
    <div className={Styles.userCard}>
        <img src={userImage} alt="" style={{width:65, height:69}} />
        <div className={Styles.userCard_content}>
            <h1 className={Styles.userCard__heading}>You</h1>
            <p className={Styles.userCard__para}> {question}</p>
            <span className={Styles.userCard_span}> </span>
        </div>

    </div>
)
}
export default UserCard;
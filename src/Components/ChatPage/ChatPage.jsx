import UserCard from "../UserCard/UserCard";
import SoulAi from "../SoulAiCard/SoulAi";

function ChatPage({ data }) {
    return (
        <div >
            <UserCard question={data.question} />
            <SoulAi answer={data.response} />
        </div>
    );
}
export default ChatPage;
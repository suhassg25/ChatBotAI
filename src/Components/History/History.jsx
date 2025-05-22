import ChatPage from "../ChatPage/ChatPage"
import { useState } from "react";
function History() {

    const [history, setHistory] = useState(() => localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : []);

    return (<div>
        {history.length>0 ? history.map((item, index) => {
            return <ChatPage key={index} data={item} />
        }) :
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1 style={{ color: '#000' }}>No History Found</h1>
            </div>

        }
    </div>)
}

export default History;
import {useState} from 'react';

function Feedback({isHidden, handle}){
    
    const [feedback, setFeedback] = useState('');

    return <div style={{display:'flex', justifyContent:'center', alignItems:'center', backdropFilter:'brightness(0.5)', padding:180}} display={isHidden ? 'none' : 'block'}>
        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', width:766, height:335,position:'relative', top:120 }} >
        <h1 style={{marginTop:30, marginBottom:30}}>Provide Additional Feedback</h1>
        <form onSubmit={(e)=>{e.preventDefault(); handle(feedback);}}>
            <textarea rows="4" cols="50" value={feedback} onChange={(e)=>{setFeedback(e.target.value)}}></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
}
export default Feedback;
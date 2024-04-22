import React , { useEffect , useState } from 'react';
import st from './Main.module.scss'

let tg =window.Telegram.WebApp;
const Main = ()=>{
    useEffect ( ()=>{
        tg.ready();
        tg.expand();
    } , [] );
    console.log(tg.answerWebAppQuery)
    console.log(tg.viewportStableHeight)
    console.log(tg.isExpanded)
    const [text,setText]=useState(null)
    const doExpand=()=>{
        tg.expand()
    }
   
    return (
        <div className={st.container}>
            {text&&text}
            <button onClick={()=>{setText(tg.viewportHeight)}}>send Data</button>
            {tg.isExpanded.toString()}
            <button onClick={doExpand}>a</button>
           
            
        </div>
    );
};

export default Main;
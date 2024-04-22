import React , { useState } from 'react';
import st from './Main.module.scss'

let tg =window.Telegram.WebApp;
const Main = ()=>{
    console.log(tg.answerWebAppQuery)
    console.log(tg.viewportStableHeight)
    const [text,setText]=useState(null)
    debugger
    return (
        <div className={st.container}>
            <div>
                {text && text}
            </div>
            <button onClick={()=>{setText(tg.viewportHeight)}}>send Data</button>
           
            
        </div>
    );
};

export default Main;
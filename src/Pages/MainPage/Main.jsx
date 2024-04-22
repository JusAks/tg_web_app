import React , { useEffect , useState } from 'react';
import st from './Main.module.scss'

let tg =window.Telegram.WebApp;
const Main = ()=>{
    const [data,setData] = useState(null)
    useEffect ( ()=>{
        tg.ready();
        tg.expand();
        
    } , [] );
    const [text,setText]=useState(null)
    const knowYou=()=>{
        setData(tg.initDataUnsafe.user)
    }
   
    return (
        <div className={st.container}>
            {text&&text}
            <button onClick={()=>{setText(tg.viewportHeight)}}>send Data</button>
            <div>
                {data && 
                    data?.first_name+" "+data?.last_name
                }
                <button onClick={ knowYou }>knowYou</button>
            </div>


        </div>
    );
};

export default Main;
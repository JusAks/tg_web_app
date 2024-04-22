import React , { useEffect , useState } from 'react';
import st from './Main.module.scss'

let tg =window.Telegram.WebApp;
const Main = ()=>{
    const [data,setData] = useState(null)
    useEffect ( ()=>{
        tg.ready();
        tg.expand();
        
    } , [] );
    const knowYou=()=>{
        setData(tg.initDataUnsafe.user)
    }
    return (
        <div className={ st.container }>
            
            { data && 
                <>
                    <div className={ st.data }>
                        <div>Your name: { data.first_name ? data.first_name:"No first_Name" }</div>
                        <div>Your surname: { data.last_name ? data.last_name : "You haven't surname" }</div>
                        <div>Your username: @{ data.username? data.username:"no username" }</div>
                    </div>
                </> 
            }
            <button onClick={ knowYou }>Показать мои данные</button>
            <button onClick={ ()=>{tg.close ()} }>Закрыть приложение</button>
        </div>
    );
};

export default Main;
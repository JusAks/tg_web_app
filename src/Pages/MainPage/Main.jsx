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
   console.log(tg.initDataUnsafe)
    return (
        <div className={ st.container }>
            { text && text }
            {/*<button onClick={()=>{setText(tg.viewportHeight)}}>send Data</button>*/ }
            <div className={ st.data }>
                        <div>Your name: { data.first_name }</div>
                        <div>Your surname: { data.last_name ? data.last_name : "You haven't surname" }</div>
                        <div>Your username: @{ data.username }</div>
            </div>
            <button onClick={ knowYou }>Показать мои данные</button>
            <button onClick={ ()=>{
                tg.close ()
            } }>Закрыть приложение
            </button>

        </div>
    );
};

export default Main;
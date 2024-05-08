import React , { useEffect} from 'react';
import st from './Main.module.scss'
import { Navigate , NavLink , Outlet } from "react-router-dom";

let tg =window.Telegram.WebApp;
const Main = ()=>{
/*    const [data,setData] = useState(null)*/
    useEffect ( ()=>{
        tg.ready();
        tg.expand();
    } , [] );
  /*  const knowYou=()=>{
        setData(tg.initDataUnsafe.user)
    }*/
   
    return (
        /*<div className={ st.container }>
            <div className={st.navBar}>
                <NavLink to='' end>Shop</NavLink>
                <NavLink to='game'>Game</NavLink>
                <NavLink to='test'>Test</NavLink>
            </div>
            <Outlet/>
            {/!*{ data && 
                <>
                    <div className={ st.data }>
                        <div>Your name: { data.first_name ? data.first_name:"No first_Name" }</div>
                        <div>Your surname: { data.last_name ? data.last_name : "You haven't surname" }</div>
                        <div>Your username: @{ data.username? data.username:"no username" }</div>
                    </div>
                </> 
            }
            <button onClick={ knowYou }>Показать мои данные</button>
            <button onClick={ ()=>{tg.close ()} }>Закрыть приложение</button>*!/}
        </div>*/
        <Navigate to='/admin'/>
    );
};

export default Main;
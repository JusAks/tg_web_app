import React , { useState } from 'react';
import st from './Shop.module.scss'
import kartofanchik from './../../../images/shopImages/kartofanchik.jpg'
import kokolya from './../../../images/shopImages/kokolya.jpg'
import holybochek from './../../../images/shopImages/holybochek.jpg'
import ruba from './../../../images/shopImages/ruba.jpg'
import noshka from './../../../images/shopImages/noshka.jpg'
import midyshki from './../../../images/shopImages/midyshki.jpg'
import  paperonya  from './../../../images/shopImages/paperonya.jpg'
import richFish from './../../../images/shopImages/rich fish.jpg'
import shashluchok from './../../../images/shopImages/shashluchok.jpg'
import tortik from './../../../images/shopImages/tortik.jpg'
import vanatsya from './../../../images/shopImages/vanatsya.jpg'

let tg =window.Telegram.WebApp;

const shopItems =[
    {
        name: "Картофанчик",
        price: 10,
        image: kartofanchik
    },
    {
        name: "Коколя",
        price: 10,
        image: kokolya
    },
    {
        name: "Голубочек",
        price: 10,
        image: holybochek
    },
    {
        name: "Рыба гриль",
        price: 10,
        image: ruba
    },
    {
        name: "Куриная ножка",
        price: 10,
        image: noshka
    },
    {
        name: "Мидяшки",
        price: 10,
        image: midyshki
    },
    {
        name: "Пицца Пепероня",
        price: 10,
        image: paperonya
    },
    {
        name: "Рыбный стрейк из Лосося",
        price: 10,
        image: richFish
    },
    {
        name: "Шашлычок",
        price: 10,
        image: shashluchok
    },
    {
        name: "Тортик",
        price: 10,
        image: tortik
    },
    {
        name: "Пицца Венеция",
        price: 10,
        image: vanatsya
    },
]
const ItemsList=({close,addItem,bucket})=>{
    return(
        <div className={st.itemsListContainer}>
            <div className={ st.close }>
                <button onClick={()=>{close(false)}}>X</button>
            </div>

            {
                shopItems.map ( el=><div key={el.name} className={ st.item }>
                    <img src={`${el.image}`} alt=""/>
                    <div>{ el.name }</div>
                    <div>{el.price} $</div>
                    <button onClick={()=>{
                        let a = bucket.some(elem=>elem.name===el.name)
                        if(a===false){addItem(prev=>[...prev,el])}
                        if(a===true){tg.showAlert("Товар уже добален в корзину!")}
                    }
                    }>Купить</button>
                </div> )
            }
            
        </div>
    )
}

const Shop = ()=>{
    const [bucket,setBucket]=useState([])
    const [isOpen,setIsOpen]=useState(false)
    
    return (
        <div className={ st.container }>
            {
                isOpen 
                    ? <ItemsList bucket={bucket} close={setIsOpen} addItem={setBucket}/>
                    : <>
                        <div>
                            <span>Доступные товары: </span>
                            <button onClick={()=>{setIsOpen(true)}}>Показать товары</button>
                        </div>
                        <div style={ { display : "grid" , gridTemplateColumns : "max-content 1fr" , gridGap : "5px",backgroundColor:"rgba(255,255,255,0.7)"} }>
                            <span>Ваша корзина: </span>
                            <div>
                                {
                                    bucket?.length>0 
                                        ? <>
                                        {bucket.map(el=><div>{el.name}</div>)}
                                        </>
                                        : <div>Ваша корзина пока пуста! </div>
                                }

                            </div>
                        </div>
                    </>

            }

        </div>
    );
};

export default Shop;
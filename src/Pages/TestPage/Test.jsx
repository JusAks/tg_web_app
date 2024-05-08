import React , { useRef } from 'react';
import st from './Test.module.scss'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import attack from './../../images/GameImages/Skeleton Attack.gif'

const Test = ()=>{
    const testRef=useRef(null)
    const { contextSafe } = useGSAP({scope: testRef});
    const handleClick=contextSafe((button) => {
        button.disabled = true;
        const boxes = gsap.utils.toArray('.box');
        gsap.timeline()
            .to(boxes[1], {duration:1,top:'15%',left:"40%"})
            .to(boxes[1], {duration:0.3,rotation:"+=360"})
            .to(boxes[0], {duration:0.3,top:0,backgroundColor:"gray"})
            .to(boxes[0], {duration:0.3,top:5,backgroundColor:"black"})
            .to(boxes[1], {duration:0.5,top:"80%",left:"5%"})
            .to(boxes[2], {duration:1,top:'15%',right:"40%"})
            .to(boxes[2], {duration:0.3,rotation:"+=360"})
            .to(boxes[0], {duration:0.3,top:0,backgroundColor:"gray"})
            .to(boxes[0], {duration:0.3,top:5,backgroundColor:"black"})
            .to(boxes[2], {duration:1,top:"80%",right:"5%",onComplete:()=>{button.disabled = false}})
            
            
    } );
    
    
    return (
        <div className={st.container}>
            <div className={st.fightArena}>
                <div ref={testRef}>
                    <div className={ `box ${st.boss}`}>Boss</div>
                    <div className={ `box ${st.hero1}`}><img src={attack}  alt=""/></div>
                    <div className={ `box ${st.hero2}`}>Hero2</div>
                </div>

            </div>
            <div className={ st.fightBut }>
                <button onClick={(e)=>{ handleClick(e.currentTarget) }}>Fight</button>
            </div>
        </div>
    );
};

export default Test;
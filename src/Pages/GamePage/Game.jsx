import React from 'react';
import st from './Game.module.scss'
const Game = ()=>{
    return (
        <div className={st.container}>
               <div className={st.bossLine}>
                      <div className={st.bossNormal}>
                             Boss
                      </div>
               </div>
            <button>test</button>
               <div>team</div>
        </div>
    );
};

export default Game;
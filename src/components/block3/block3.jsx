import React from 'react';
import { MyButton } from '../mybutton/mybutton';
import s from './block3.module.scss';

export const Block3 = ()=>{

    return(
        <div className={`container panel ${s.block3}`}>
            <div className={s.block3__lc}>
                <h1>Сrypush Strategies</h1>
                <p>Well developed and studied strategies created by the <br/> professional Crypush Traders team - low risks and safe<br/> monthly earnings!</p>
                <div className={s.block3__buttons}>
                <MyButton text="Let`s Get Started" />
                </div>
            </div>
            <div className={s.block3__rc}>
                <h1>Provider Strategies</h1>
                <p>Strategies created by Crypush Official Partners and <br/>certified skilled Traders - medium-high risks with higher<br/> ROI aimed bot settings.</p>
                <div className={s.block3__buttons}>
                <MyButton text="Provider Strategies" />
                <MyButton text="Become A Provider" />
                </div>
            </div>
            <footer className={s.block3__footer}>

            </footer>
        </div>
    )
}
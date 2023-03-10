import React from 'react';
import s from './block4.module.scss';
import block4 from "../../images/block4.webp";
import { MyButton } from '../mybutton/mybutton';
import elipse from "../../images/Ellipse.webp";

export const Block4 = ()=>{

    return(
        <>
        <section className={`${s.block4} container block4__anim`}>
            <div className={s.block4__content}>
                <div className={s.block4__lc}>
                    <h1 className='block4__anim1'>Become A Trader & Save Your Time With Crypush </h1>
                    <div className={`block4__anim2 ${s.block4__buttons}`}>
                        <MyButton text="Let`s Get Started" />
                        <MyButton text="Request A Demo" />
                    </div>   
                </div>
                <div className={`block4__anim3 ${s.block4__rc}`}>
                    <img className={s.block4__elipse} src={elipse} alt="elipse" />
                    <img className={`block4__anim4 ${s.block4__img}`} src={block4} alt="block4" data-prlx-mouse="true" />
                </div>
            </div>
        </section>
        
        </>
    )
}
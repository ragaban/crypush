import React, { useEffect, useRef } from 'react';
import s from './block1.module.scss';
import phone1 from "../../images/phone1.png";
import phone2 from "../../images/phone2.png";
import svg_sprite from "../../images/sprite_icons.svg";
import scroll from "../../images/block1_scrollbutton.png";
import paralaxMouseInit from "./parallax.js";
import bytcoin from "../../images/bytcoin.png";
import elipse from "../../images/Ellipse.png";
import { MyButton } from '../mybutton/mybutton';

export const Block1 = ()=>{
    

    useEffect(()=>{
        paralaxMouseInit();
    },[]);

    return(
        <section className={`container panel ${s.block1}`}>

            <img className={`block1__anim8 ${s.block1__elipse}`} src={elipse} alt="elipse" />
            <img className={`block1__anim8 ${s.block1__bytcoin}`} src={bytcoin} alt="bytcoin" />

            <div className={s.block1__lc}>
                <h1 className='block1__anim1' >Algorithmic Crypto Trading Bot</h1>
                <p className='block1__anim2' >An AI-powered bot that allows you fully automate your trading</p>
                <div className={`block1__anim3 ${s.block1__buttons}`}>
                    <MyButton text="Let`S Get Started" />
                    <MyButton text="Request A Demo" />
                </div>
                <div className={`block1__anim4 ${s.block1__info}`}>
                    <div>
                        <span >24/7  automated process</span>
                        <svg className={s.block1__info_icon}>
                            <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </div>
                    <div>
                        <span>Algorithmic  system</span>
                        <svg className={s.block1__info_icon}>
                            <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </div>
                </div>
                <div className={`block1__anim5 ${s.block1__brands}'`}>
                    <svg className={s.block1__huobi}>
                        <use xlinkHref={`${svg_sprite}#huobi`}></use>
                    </svg>
                    <svg className={s.block1__binance}>
                        <use xlinkHref={`${svg_sprite}#binance`}></use>
                    </svg>
                </div>
                <div className={`block1__anim6 ${s.block1__scrollblock}`}>
                    <img src={scroll} alt="scroll" />
                    <div className="scroll__text">
                        <p>Skroll down <span>to discover more</span></p>
                    </div>
                </div>
            </div>
            <div className={`block1__anim7 ${s.block1__rc}`}>
                <img className={s.phone1} src={phone1} alt="phones" data-prlx-mouse="true" />
                <img className={s.phone2} src={phone2} alt="phones" data-prlx-mouse="false"/>
            </div>
        </section>
    )
}
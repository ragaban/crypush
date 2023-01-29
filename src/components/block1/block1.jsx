import React, { useEffect } from 'react';
import s from './block1.module.scss';
import phone1 from "../../images/phone1.png";
import phone2 from "../../images/phone2.png";
import arrow from "../../images/block1_arrow.png";
import svg_sprite from "../../images/sprite_icons.svg";
import scroll from "../../images/block1_scrollbutton.png";
import paralaxMouseInit from "./parallax.js";
import bytcoin from "../../images/bytcoin.png";
import elipse from "../../images/Ellipse.png";

export const Block1 = ()=>{

    useEffect(()=>{
        paralaxMouseInit();
    },[]);

    return(
        <section className={`container ${s.block1}`}>

            <img className={s.block1__elipse} src={elipse} alt="elipse" />
            <img className={s.block1__bytcoin} src={bytcoin} alt="bytcoin" />

            <div className={s.block1__lc}>
                <h1>Algorithmic Crypto Trading Bot</h1>
                <p>An AI-powered bot that allows you fully automate your trading</p>
                <div className={s.block1__buttons}>
                    <button>
                        <span>Let`S Get Started</span>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <button>
                        <span>Request A Demo</span>
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
                <div className={s.block1__info}>
                    <div>
                        <span>24/7  automated process</span>
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
                <div className={s.block1__brands}>
                    <svg className={s.block1__huobi}>
                        <use xlinkHref={`${svg_sprite}#huobi`}></use>
                    </svg>
                    <svg className={s.block1__binance}>
                        <use xlinkHref={`${svg_sprite}#binance`}></use>
                    </svg>
                </div>
                <div className={s.block1__scrollblock}>
                    <img src={scroll} alt="scroll" />
                    <div className="scroll__text">
                        <p>Skroll down <span>to discover more</span></p>
                    </div>
                </div>
            </div>
            <div className={s.block1__rc}>
                <img className={s.phone1} src={phone1} alt="phones" data-prlx-mouse="true" />
                <img className={s.phone2} src={phone2} alt="phones" data-prlx-mouse="false"/>
            </div>
        </section>
    )
}
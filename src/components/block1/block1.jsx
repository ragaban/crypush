import React, { useEffect, useRef } from 'react';
import s from './block1.module.scss';
import phone1 from "../../images/phone1.webp";
import phone2 from "../../images/phone2.webp";
import svg_sprite from "../../images/sprite_icons.svg";
import scroll from "../../images/block1_scrollbutton.png";
import paralaxMouseInit from "./parallax.js";
import bytcoin from "../../images/bytcoin.webp";
import elipse from "../../images/Ellipse.webp";
import { MyButton } from '../mybutton/mybutton';
import { useTranslation } from 'react-i18next';
import "../../18n.js";

export const Block1 = ()=>{
     
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        // Start parallax effect
        paralaxMouseInit();
    },[]);

    return(
        <section className={`container block1__anim ${s.block1}`}>

            <img className={`block1__anim8 ${s.block1__elipse}`} src={elipse} alt="elipse" />
            <img className={`block1__anim8 ${s.block1__bytcoin}`} src={bytcoin} alt="bytcoin" />

            <div className={s.block1__lc}>
                <h1 className='block1__anim1' >{t("block1_text1")}</h1>
                <p className='block1__anim2' >{t("block1_text2")}</p>
                <div className={`block1__anim3 ${s.block1__buttons}`}>
                    <MyButton text="Let`S Get Started" />
                    <MyButton text="Request A Demo" />
                </div>
                <div className={`block1__anim4 ${s.block1__info}`}>
                    <div>
                        <span >{t("block1_text3")}</span>
                        <svg className={s.block1__info_icon}>
                            <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </div>
                    <div>
                        <span>{t("block1_text4")}</span>
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
                    <div className={s.scroll__text}>
                        <p>{t("block1_text5")}<br/><span>{t("block1_text6")}</span></p>
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
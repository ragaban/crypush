import React from 'react';
import s from './footer.module.scss';
import telegram from "../../images/telegram-icon.png";
import instagram from "../../images/instagram-icon.png";
import twitter from "../../images/twitter-icon.png";
import messages from "../../images/footer-messages.png";


export const Footer = ()=>{

    return(
        <footer className={`container footer_sc block5__anim ${s.footer}`}>
                <div className={s.footer__wrapper}>
                    <div className={s.footer__lc}>
                        <div className={`footer_logo_sc ${s.footer__logo}`}></div>
                        <p>An AI-powered crypto bot that allows <br/> you fully automate your trading.</p>
                        <span>© 2017 - 2022 Copyright by CryppushTM  - All rights reserved. </span>
                    </div>
                    <div className={s.footer__rc}>
                        <h2>Follow Us On Social Media</h2>
                        <div className={s.footer__social}>
                            <img src={telegram} alt="telegram" />
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                        </div>
                        <img className={s.footer__messages} src={messages} alt="messages" />
                    </div>
                </div>
        </footer>
    )
}
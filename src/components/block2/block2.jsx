import React, { useEffect, useRef, useState } from 'react';
import s from './block2.module.scss';
import elipse from "../../images/Ellipse.webp";
import manage from "../../images/manage.png";
import traiding from "../../images/trading.png";
import api from "../../images/api.png";
import portfolio from "../../images/portfolio.png";
import manage_content from "../../images/manage-content.webp";
import traiding_content from "../../images/trading-content.webp";
import api_content from "../../images/api-content.webp";
import portfolio_content from "../../images/portfolio-content.webp";
import { MenuButton } from './menuButton';

export const Block2 = ()=>{


    const [menuState, setMenuState] = useState({image: manage_content, desc: "Connect your account to the worldwide Crypto Exchanges and manage your funds directly there."});

    const img = useRef();

    //Buttons data
    const menu = [
        {id: "button1", image: manage, text: "Manage Investments", content: manage_content, desc: "Connect your account to the worldwide Crypto Exchanges and manage your funds directly there."},
        {id: "button2", image: traiding, text: "Pro Trading Strategies", content: traiding_content, desc: "Choose a strategy that suits you best across Cryppush and Official Providers options."},
        {id: "button3", image: api, text: "API Transparency", content: api_content, desc: "Connect our trading bot API key to your account on the exchange. There is no need to move your crypto away. Your funds are safe!"},
        {id: "button4", image: portfolio, text: "Portfolio Accounting", content: portfolio_content, desc: "Check the money flow, trading history, and analytics right on the Cryppush application. "},
    ];

    //Buttons views
    const buttons = menu.map((el, index) => {
        return <MenuButton el={el} func={setMenu} key={index}/>
    });
    
    // Set active Button
    function setMenu(image, desc, buttonId){
        setMenuState({image: image, desc: desc});
        document.getElementById(buttonId).classList.add("block2__button_active");
    }

    useEffect(()=>{
        // Set first active Button
        document.getElementById("button1").classList.add("block2__button_active");
    },[]);

    useEffect(()=>{
        //Remove prev image
        img.current.classList.remove(s.active);
        //Show select image
        setTimeout(()=>{
            img.current.classList.add(s.active);
        },200);
    },[menuState]);



    return(
        <section className={`container ${s.block2}`}>
            <header className={s.header}>
                <h1 className={`block2__anim1 ${s.text}`}>Start Your AI Trading Now</h1>
                <p className='block2__anim2'>Enter the world of AI trading with an algorithmic bot <br/> system! Let us do all the hard work for you and provide <br/> the best quality!</p>
            </header>
            <div className={s.block2__content}>
                <div className={`block2__anim3 ${s.block2__lc}`}>
                    <img className={s.elipse} src={elipse} alt="Elipse" />
                    {buttons}
                </div>
                <div className={`block2__anim4 ${s.block2__rc}`}>
                    <div className={s.content} ref={img}>
                        <img className={s.image} src={menuState.image} alt="image" />
                        <p className={s.desc}>{menuState.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
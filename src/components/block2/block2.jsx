import React, { useEffect, useState } from 'react';
import s from './block2.module.scss';
import graph from '../../images/block2_graph.png';
import elipse from "../../images/Ellipse.png";
import manage from "../../images/manage.png";
import traiding from "../../images/trading.png";
import api from "../../images/api.png";
import portfolio from "../../images/portfolio.png";
import manage_content from "../../images/manage-content.png";
import traiding_content from "../../images/trading-content.png";
import api_content from "../../images/api-content.png";
import portfolio_content from "../../images/portfolio-content.png";
import { MenuButton } from './menuButton';
import { Block2Content } from './block2Content';

export const Block2 = ()=>{

    const [menuState, setMenuState] = useState({image: manage_content, desc: "Connect your account to the worldwide Crypto Exchanges and manage your funds directly there."});

    const menu = [
        {id: "button1", image: manage, text: "Manage Investments", content: manage_content, desc: "Connect your account to the worldwide Crypto Exchanges and manage your funds directly there."},
        {id: "button2", image: traiding, text: "Pro Trading Strategies", content: traiding_content, desc: "Choose a strategy that suits you best across Cryppush and Official Providers options."},
        {id: "button3", image: api, text: "API Transparency", content: api_content, desc: "Connect our trading bot API key to your account on the exchange. There is no need to move your crypto away. Your funds are safe!"},
        {id: "button4", image: portfolio, text: "Portfolio Accounting", content: portfolio_content, desc: "Check the money flow, trading history, and analytics right on the Cryppush application. "},
    ];

    const buttons = menu.map((el, index) => {
        return <MenuButton el={el} func={setMenu} key={index}/>
    });
    
    function setMenu(image, desc, buttonId){
        setMenuState({image: image, desc: desc});
        document.getElementById(buttonId).classList.add("block2__button_active");
    }
    useEffect(()=>{
        document.getElementById("button1").classList.add("block2__button_active");
    },[]);

    return(
        <section className={`container ${s.block2}`}>
            <header className={s.header}>
                <h1>Start Your AI Trading Now</h1>
                <p>Enter the world of AI trading with an algorithmic bot <br/> system! Let us do all the hard work for you and provide <br/> the best quality!</p>
            </header>
            <div className={s.block2__content}>
                <div className={s.block2__lc}>
                    <img className={s.elipse} src={elipse} alt="Elipse" />
                    {buttons}
                </div>
                <div className={s.block2__rc}>
                    <Block2Content image={menuState.image} desc={menuState.desc} />
                </div>
            </div>
        </section>
    )
}
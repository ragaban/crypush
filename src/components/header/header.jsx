import React, { useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import logo from "../../images/logo.webp";
import svg_sprite from "../../images/sprite_icons.svg";
import gsap from "gsap";
import { Link } from 'react-router-dom';
import i18n from '../../18n';




export const Header = ()=>{

    const tl = gsap.timeline();
    const header = useRef();
    const header_wrapper = useRef();
    const [theme, setTheme] = useState(true);
    const handleChange = (event) => {
        setTheme(state => !state);
      };

    const [language, setLanguage] = React.useState(null);

    const handleClick = (event) => {
        setLanguage(event.currentTarget);
    };
    
    const handleClose = () => {
        setLanguage(null);
    };

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 10){
                header.current.classList.add(s.header__mini);
                header_wrapper.current.classList.add(s.header__wrapper_active);
            }
            else{
                header.current.classList.remove(s.header__mini);
                header_wrapper.current.classList.remove(s.header__wrapper_active);
            }
        });
        showElements();
    },[]);

    function showElements(){
        tl.from(".header__anim1", {opacity: 0, duration: .5, delay: 1})
        .from(".header__anim2", {opacity: 0, duration: .3}, "-=0.2")
        .from(".header__anim3", {opacity: 0, duration: .3}, "-=0.2")
        .from(".header__anim4", {opacity: 0, duration: .3}, "-=0.2")
        .from(".header__anim5", {opacity: 0, duration: .3}, "-=0.2")
        .from(".header__anim6", {opacity: 0, duration: .3}, "-=0.2")
        .from(".header__anim7", {opacity: 0, duration: .3}, "-=0.2")
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
        <>
        <div className={s.header__wrapper} ref={header_wrapper}></div>
        <header className={s.header} ref={header}>
            <img className={`header__anim1 ${s.header__logo}`} src={logo} alt="logo"></img>
            <nav className={s.header__menu}>
                <ul>
                    <li className='header__anim2'><Link to="/">Home</Link></li>
                    <li className='header__anim3'><Link to="/about/">About Us</Link></li>
                    <li className='header__anim4'><a href="#">Strategies</a></li>
                    <li className='header__anim5'>
                        <span className={s.menu__item}>
                            <svg className={s.header__icon}>
                                <use xlinkHref={`${svg_sprite}#language_icon`}></use>
                            </svg>
                            <span className={s.header__language} onClick={handleClick}> ENG </span>
                            
                         </span>
                    </li>
                    <li className='header__anim6'>
                        <span className={s.menu__item}>
                            <label className={s.switch}>
                                <input type="checkbox" onChange={(el)=> console.log(el.target.checked)}/>
                                <span className={`${s.slider} ${s.round}`}></span>
                            </label>
                        </span>
                    </li>
                    <li className='header__anim7'>
                        <span className={s.menu__item}>
                            <svg className={s.header__icon}>
                                <use xlinkHref={`${svg_sprite}#account_icon`}></use>
                            </svg>
                            <a style={{margin: "0px"}} href="#">Account</a>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
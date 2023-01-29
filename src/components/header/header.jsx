import React, { useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import logo from "../../images/logo.png";
import svg_sprite from "../../images/sprite_icons.svg";
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';



const MySwitch = withStyles({
    root: {
        border: "1px #fff solid",
        borderRadius: "12px",
        width: "50px",
        padding: "4px"
    },
    switchBase: {
      color: "#fff",
      position: "relative",
      '&$checked': {
        color: "#fff",
      },
      '&$checked + $track': {
        backgroundColor: '#14161D',
      },
    },
    checked: {},
    track: {},
})(Switch);


export const Header = ()=>{

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
    },[]);

    return(
        <>
        <div className={s.header__wrapper} ref={header_wrapper}></div>
        <header className={s.header} ref={header}>
            <img className={s.header__logo} src={logo} alt="logo"></img>
            <nav className={s.header__menu}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Strategies</a></li>
                    <li>
                        <span className={s.menu__item}>
                            <svg className={s.header__icon}>
                                <use xlinkHref={`${svg_sprite}#language_icon`}></use>
                            </svg>
                            <span className={s.header__language} onClick={handleClick}> ENG </span>
                            <Menu id="simple-menu" anchorEl={language} keepMounted open={Boolean(language)} onClose={handleClose}>
                                <MenuItem onClick={handleClose} selected={true}>ENG</MenuItem>
                                <MenuItem onClick={handleClose}>RUS</MenuItem>
                            </Menu>
                         </span>
                    </li>
                    <li>
                        <span className={s.menu__item}>
                            <MySwitch className={s.header__switch} checked={theme} onChange={handleChange} name="theme" size='small'/>
                        </span>
                    </li>
                    <li>
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
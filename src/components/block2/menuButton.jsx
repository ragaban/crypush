import React, { useRef } from 'react';
import s from './menubutton.module.scss';

export const MenuButton = (props)=>{

    function handleClick(ev){
        const buttons = document.querySelectorAll(".block2__button");
        buttons.forEach(el => {
            el.classList.remove("block2__button_active");
        });
        props.func(props.el.content, props.el.desc, props.el.id);
    }

    return(
        <div className={`${s.button} ${s.active} block2__button`} id={props.el.id} onMouseEnter={(ev)=>{handleClick(ev)}}>
            <img src={props.el.image} alt="manage"/>
            <span>{props.el.text}</span>
        </div>
    )
}
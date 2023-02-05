import React from 'react';
import s from './mybutton.module.scss';
import arrow from "../../images/block1_arrow.png";

export const MyButton = (props)=>{

    return(
        <button className={`mybutton_sc ${s.mybutton}`}>
            <span>{props.text}</span>
            <img src={arrow} alt="arrow" />
        </button>
    )
}
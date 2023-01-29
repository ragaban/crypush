import React, { useEffect, useRef, useState } from 'react';
import s from './block2content.module.scss';

export const Block2Content = (props)=>{
    
    const img = useRef();

    useEffect(()=>{
        img.current.classList.remove(s.active);
        setTimeout(()=>{
            img.current.classList.add(s.active);
        },200);
    },[props.image]);


        return(
            <div className={s.content} ref={img}>
                <img className={s.image} src={props.image} alt="image" />
                <p className={s.desc}>{props.desc}</p>
            </div>
        )
    
}
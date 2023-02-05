import React, { useEffect } from 'react';
import s from './preloader.module.scss';
import preloader1 from "../../images/preloader1.svg";
import preloader from "../../images/preloader.svg";

export const Preloader = ()=>{

    return(
        <div className={`preloader__anim ${s.preloader}`}>
            <img className={s.preloader__img1} src={preloader1} alt="preloader"/>
            <img className={s.preloader__img2} src={preloader} alt="preloader"/>
            <p>Loading...</p>
        </div>
    )
}
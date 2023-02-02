import React from 'react';
import s from './star.module.scss';
import star from "../../images/star.png";

export const Star = (props)=>{
        const stars = [];
        for(let i=0;i<props.quantity;i++){
            stars.push(React.createElement("img", {src: star, className: s.star, key:i}));
        }
    return(
        <div className={s.stars}>
            {stars}
        </div>
    )
}
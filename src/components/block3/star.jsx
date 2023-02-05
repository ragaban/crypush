import React from 'react';
import s from './star.module.scss';
import svg_sprite from '../../images/sprite_icons.svg'

export const Star = (props)=>{
        
    return(
        <div className={s.stars}>
            <svg className={`star_sc ${s.star}`}>
                <use xlinkHref={`${svg_sprite}#star`}></use>
            </svg>
        </div>
    )
}
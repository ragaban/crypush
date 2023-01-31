import React from 'react';
import { MyButton } from '../mybutton/mybutton';
import s from './block3.module.scss';
import master from "../../images/master-hover.png";
import visa from "../../images/visa.png";
import usdt from "../../images/usdt.png";
import icon from "../../images/ic_outline.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import carousel1 from "../../images/carousel1.png";
import carousel2 from "../../images/carousel2.png";
import carousel3 from "../../images/carousel3.png";

export const Block3 = ()=>{

    return(
        <section className={`container panel ${s.block3}`}>
            <div className={s.block3__row}>
                <div className={s.block3__lc}>
                    <h1>Сrypush Strategies</h1>
                    <p>Well developed and studied strategies created by the <br/> professional Crypush Traders team - low risks and safe<br/> monthly earnings!</p>
                    <div className={s.block3__buttons}>
                    <MyButton text="Let`s Get Started" />
                    </div>
                </div>
                <div className={s.block3__rc}>
                    <h1>Provider Strategies</h1>
                    <p>Strategies created by Crypush Official Partners and <br/>certified skilled Traders - medium-high risks with higher<br/> ROI aimed bot settings.</p>
                    <div className={s.block3__buttons}>
                    <MyButton text="Provider Strategies" />
                    <MyButton text="Become A Provider" />
                    </div>
                </div>
            </div>
            <div className={s.block3__brands}>
                <img src={master} alt="master" />
                <img src={visa} alt="visa" />
                <img src={usdt} alt="usdt" />
            </div>
            <footer className={s.block3__footer}>
                <h1>User Reviews</h1>
                <div className={s.block3__content}>
                    <p>Client and Traders thoughts about Crypush</p>
                    <button className={s.mybutton}>
                        <span>Write A Review</span>
                        <img src={icon} alt="arrow" />
                    </button>
                </div>
                <Swiper
                    loop={true}
                    autoplay={{delay: 100}}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src={carousel1} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={carousel2} alt="image2" /></SwiperSlide>
                <SwiperSlide><img src={carousel3} alt="image3" /></SwiperSlide>
                </Swiper>
            </footer>
        </section>
    )
}
import React from 'react';
import { MyButton } from '../mybutton/mybutton';
import s from './block3.module.scss';
import master from "../../images/master-hover.png";
import visa from "../../images/visa.png";
import usdt from "../../images/usdt.png";
import icon from "../../images/ic_outline.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper/core';
import { Star } from './star';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import elipse from "../../images/Ellipse.png";
import { useEffect } from 'react';
import { block3Anim } from '../../animation-gsap';

export const Block3 = ()=>{

    SwiperCore.use([Autoplay, Pagination]);


    return(
        <section className={`container panel ${s.block3}`}>
             <img className={`${s.block3__elipse1}`} src={elipse} alt="elipse" />
             <img className={`${s.block3__elipse2}`} src={elipse} alt="elipse" />
            <div className={s.block3__row}>
                <div className={`block3__anim1 ${s.block3__lc}`}>
                    <h1>Сrypush Strategies</h1>
                    <p>Well developed and studied strategies created by the <br/> professional Crypush Traders team - low risks and safe<br/> monthly earnings!</p>
                    <div className={s.block3__buttons}>
                    <MyButton text="Let`s Get Started" />
                    </div>
                </div>
                <div className={`block3__anim2 ${s.block3__rc}`}>
                    <h1>Provider Strategies</h1>
                    <p>Strategies created by Crypush Official Partners and <br/>certified skilled Traders - medium-high risks with higher<br/> ROI aimed bot settings.</p>
                    <div className={s.block3__buttons}>
                    <MyButton text="Provider Strategies" />
                    <MyButton text="Become A Provider" />
                    </div>
                </div>
            </div>
            <footer className={`block3__anim3 ${s.block3__footer}`}>
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
                    pagination={{
                        type: "progressbar",
                      }}
                    speed={1000}
                    centeredSlides={true}
                    modules={[Pagination, Navigation]}
                    autoplay={{delay: 1000}}
                    slidesPerView={3}
                    
                >
                <SwiperSlide>
                    <div className={s.slide__wrapper}>
                        <div className={`${s.slide} ${s.slide1}`}>
                            <h3>Lorem Ipsum1</h3>
                            <Star quantity={1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br/> nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <a fref="#">Read Full Eeview</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide__wrapper}>
                        <div className={`${s.slide} ${s.slide1}`}>
                            <h3>Lorem Ipsum</h3>
                            <Star quantity={3} />
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis <br/> nostrud exercitation ullamco laboris nisi <br/> ut aliquip.</p>
                            <a fref="#">Read Full Eeview</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide__wrapper}>
                        <div className={`${s.slide} ${s.slide1}`}>
                            <h3>Lorem Ipsum</h3>
                            <Star quantity={1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br/> nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <a fref="#">Read Full Eeview</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide__wrapper}>
                        <div className={`${s.slide} ${s.slide1}`}>
                            <h3>Lorem Ipsum</h3>
                            <Star quantity={6} />
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis <br/> nostrud exercitation ullamco laboris nisi <br/> ut aliquip.</p>
                            <a fref="#">Read Full Eeview</a>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
                <div className={s.block3__brands}>
                    <img src={master} alt="master" />
                    <img src={visa} alt="visa" />
                    <img src={usdt} alt="usdt" />
                </div>
            </footer>
        </section>
    )
}
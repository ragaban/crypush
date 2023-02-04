import React, { useEffect, useRef } from 'react';
import s from './about.module.scss';
import face1 from "../../images/face1.webp";
import face2 from "../../images/face2.webp";
import bytcoin from "../../images/bytcoin.webp";
import elipse from "../../images/Ellipse.webp";
import phones from "../../images/phones.webp";
import svg_sprite from "../../images/sprite_icons.svg";
import { Footer } from '../footer/footer';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export const About = ()=>{

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const about = useRef();

    useEffect(()=>{
        let scroll = 0;
        const scrollHandler = (el)=>{
            console.log(about.current.offsetHeight);
            if (el.deltaY < 0 && scroll >0) scroll = scroll - 50;
            if (el.deltaY > 0 && scroll < 1350) scroll = scroll + 50;
            gsap.to(window, {
                scrollTo: {
                  y: scroll,
                  autoKill: false,
                },
                duration: 0.1,
                overwrite: true,
            });
        }

        document.addEventListener("wheel", scrollHandler);

        const tl = gsap.timeline();
        tl.from(".about__anim", {opacity: 0, duration: 0.3, delay: 0.2 })

    },[]);

    return(
        <section className={`container about__anim ${s.about}`} ref={about}>

            <img className={s.about__elipse} src={elipse} alt="elipse" />
            <img className={s.about__bytcoin} src={bytcoin} alt="bytcoin" />

            <div className={s.about__row}>
                <div className={s.about__text}>
                    <h1>Expert Team</h1>
                    <p>Crypush product executive board working on project <br/> implementation and its growth.</p>
                </div>
                <div className={s.face}>
                    <img src={face1} alt="face1" />
                    <p>Lorem Ipsum</p>
                    <span>CEO</span>
                </div>
                <div className={s.face}>
                    <img src={face2} alt="face2" />
                    <p>Lorem Ipsum</p>
                    <span>CMO</span>
                </div>
            </div>
            <div className={s.about__row}>
                <div className={s.about__text}>
                    <h1>Our Vision</h1>
                    <p>Crypush is about cooperation. To create something new <br/> and get benefits together. Both as partners and clients!</p>
                </div>
                <div className={s.about__text}>
                    <h1>Our Mission</h1>
                    <p>The main aim for Crypush Team is to bring a revolution <br/> into the world of crypto trading by developing unique <br/> technologies in combination with studied strategies and<br/> professional analytics.</p>
                </div>
            </div>
            <div className={`${s.about__row} ${s.about__footer}`}>
                <div className={s.about__text}>
                    <h1>This Is The Future</h1>
                    <span className={s.about__list}>Adding new exchange platforms into Crypush <br/> ecosystem.
                        <svg className={s.info_icon}>
                                <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </span>
                    <span className={s.about__list}>
                        Crypush user-friendly application launch.
                        <svg className={s.info_icon}>
                                <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </span>
                    <span className={s.about__list}>
                        Creating a unique referral program with extra bonuses.
                        <svg className={s.info_icon}>
                                <use xlinkHref={`${svg_sprite}#check`}></use>
                        </svg>
                    </span>
                </div>
                <img src={phones} alt="phones" />
            </div>
            <Footer />
        </section>
    )
}
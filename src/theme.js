import {createGlobalStyle} from "styled-components";
import logo from "./images/logo.webp";
import logoLight from "./images/logo-light.webp";

export const darkTheme = {
    body: "background-color: #14161D;",
    textColor: "#fff",
    reverseColor: "#000",
    logoImage: logo,
    headerWrapperColor: "#182745",
    headerWrapperBorder: "none",
    b2ButtonBg: "linear-gradient(0deg, rgba(20, 22, 29, 0.2), rgba(20, 22, 29, 0.2)), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)",
    b2ButtonBga: "linear-gradient(112.85deg, #182745 25.47%, #2B3A5B 90.88%, #1B202B 120%)",
    slideWrapper: "linear-gradient(0deg, rgba(20, 22, 29, 0.2), rgba(20, 22, 29, 0.2)), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)",
    slide: "linear-gradient(0deg, rgba(20, 22, 29, 1), rgba(20, 22, 29, 1)) padding-box, linear-gradient(360deg, #0C3483 0%, #A2B6DF 108.33%, #6B8CCE 108.33%) border-box",
    slideAfter: "linear-gradient(112.85deg, #0C3483 25.47%, #A2B6DF 90.88%, #6B8CCE 90.88%)",
    }
  
  export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    reverseColor: "#fff",
    logoImage: logoLight,
    headerWrapperColor: "#fff",
    headerWrapperBorder: "1px #000 solid",
    b2ButtonBg: "linear-gradient(0deg, rgba(162, 182, 223, 0.2), rgba(162, 182, 223, 0.2)), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)",
    b2ButtonBga: "linear-gradient(90deg, rgba(12, 52, 131, 0.2) 0%, rgba(162, 182, 223, 0.2) 100%, rgba(107, 140, 206, 0.2) 100%), linear-gradient(0deg, rgba(162, 182, 223, 0.2), rgba(162, 182, 223, 0.2)), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);",
    slideWrapper: "none",
    slide: "linear-gradient(0deg, rgba(20, 22, 29, 0.2), rgba(20, 22, 29, 0.2)), linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%)",
    slideAfter: "none",
  }
  
  export const GlobalStyles = createGlobalStyle`
   body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: 1s ease;
   }
   .header__sc a{
        color: ${props => props.theme.textColor};
   }
   .slider__sc{
        border: 1px ${props => props.theme.textColor} solid;
   }
   .slider__sc::before{
        background-color: ${props => props.theme.textColor};
    }
    .header__sc svg{
        stroke: ${props => props.theme.textColor};
    }
    .header_language_sc{
        color: ${props => props.theme.reverseColor};
    }
    .mybutton_sc{
        border: 1px ${props => props.theme.textColor} solid;
        color: ${props => props.theme.textColor};
    }
    .header_logo_sc{
        background-image: url(${props => props.theme.logoImage}) !important;
    }
    .header_wrapper_sc{
        background: ${props => props.theme.headerWrapperColor};
        border-bottom: ${props => props.theme.headerWrapperBorder};
    }
    .footer_sc{
        background-color: ${props => props.theme.reverseColor};
    }
    .footer_logo_sc{
        background-image: url(${props => props.theme.logoImage}) !important;
    }
    .block2__button{
        background: ${props => props.theme.b2ButtonBg};
    }
    .block2__button_active{
        background: ${props => props.theme.b2ButtonBga};
    }
    .slide_wrapper_sc{
        background: ${props => props.theme.slideWrapper} !important;
    }
    .slide_sc{
        background: ${props => props.theme.slide} !important;
    }
    .slide_sc::after{
        background: ${props => props.theme.slideAfter} !important;
    }
    .b3Button{
        border: 1px ${props => props.theme.textColor} solid !important;
        color: ${props => props.theme.textColor} !important;
    }
  `

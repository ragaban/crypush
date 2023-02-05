import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  stateScroll = 0;
  scrollTween = false;
  direction = false;
  theme = 'dark';
 

  setStateScroll = (state) => {
    this.stateScroll = state;
  };

  setScrollTween = (state) => {
    this.scrollTween = state;
  };

  setDirection = (state) => {
    this.direction = state;
  }

  setTheme = (theme)=>{
    console.log("swap theme - "+ theme);
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }
}
export default new store();

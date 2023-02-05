import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }
  // Scroll state homepage
  stateScroll = 0;
  scrollTween = false;
  direction = false;

  ///Theme
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
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }
}
export default new store();

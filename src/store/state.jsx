import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  stateScroll = 0;
  scrollTween = false;
  direction = false;

  setStateScroll = (state) => {
    this.stateScroll = state;
  };

  setScrollTween = (state) => {
    this.scrollTween = state;
  };

  setDirection = (state) => {
    this.direction = state;
  }
}
export default new store();

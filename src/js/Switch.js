export default class Switch {
  constructor() {
    this.modePlay = false;
  }

  init() {
    document.querySelector('.switch-input').checked = false;
    document.querySelector('.switch-input').addEventListener('change', () => {
      this.modePlay = !this.modePlay;
      this.show();
    });
  }

  show() {
    if (this.modePlay) {
      document.body.classList.add('mode-play');
    } else {
      document.body.classList.remove('mode-play');
      window.app.stopGame();
    }
  }
}

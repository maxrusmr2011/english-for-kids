// const SWITCHER = { train: 'train', play: 'play'};
  
export class Switch {
  constructor() {
    this.modePlay = false;
  }
  
  init() {
    document.querySelector('.switch-input').addEventListener('change', () => {
      this.modePlay = !this.modePlay;
      this.show();
    });
  }

  show() {
    alert(this.modePlay);
  }
}
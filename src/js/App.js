import { Menu } from './Menu';
import { Switch } from './Switch';
import { Page } from './Page';
import { CARDS } from './constants';

export class App {

  constructor() {
    this.menu = new Menu();
    this.switch = new Switch();
    this.page = new Page();
    this.startedGame = false;
    this.words = [];
    this.currentWord = null;
    this.CARDS = CARDS;
  };

  init() {
    this.menu.init();
    this.switch.init();
    this.page.init();
  }

  stopGame() {
    let button = document.querySelector('.start-button');
    if (button) {
      button.classList.remove('start-game');
    }
    this.startedGame = false;
    this.words = [];
  }

  startGame(category) {
    this.startedGame = true;
    this.words = CARDS[category].listCards.map((item, i) => {
      return {index: i, audio: item.audioSrc};
    });
    this.nextWord();
    this.soundWord();
  }

  nextWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words.splice(randomIndex,1)[0];
  }

  soundWord() {
    let objAudio = new Audio('./src/assets/'+this.currentWord.audio);
    objAudio.play();
  }

  render() {
    console.log('app');
  } 
}

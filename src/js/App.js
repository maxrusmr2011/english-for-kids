import { Menu } from './Menu';
import { Switch } from './Switch';
import { Page } from './Page';
import { CARDS } from './constants';

export class App {

  constructor() {
    this.CARDS = CARDS;
    this.menu = new Menu();
    this.switch = new Switch();
    this.page = new Page();

    this.startedGame = false;
    this.words = [];
    this.currentWord = null;
    this.listSteps = [];
  };

  init() {
    this.menu.init();
    this.switch.init();
    this.page.init();
  }

  nullGame() {
    this.startedGame = false;
    this.words = [];
    this.currentWord = null;
    this.listSteps = [];
    
  }

  stopGame() {
    let button = document.querySelector('.start-button');
    if (button) {
      button.classList.remove('start-game');
    }
    document.querySelectorAll('.card').forEach((item) => {
      item.classList.remove('card-success');
    });
    
    let stars = document.querySelector('.page__stars');
    if (stars) {
      stars.innerHTML = '';
    }

    this.nullGame();
  }

  startGame() {
    this.startedGame = true;
    this.words = CARDS[this.page.currentCategory].listCards.map((item, i) => {
      return {index: i, audio: item.audioSrc};
    });
    this.nextWord();
    // this.soundCurrentWord();
  }

  nextWord() {
    if (this.words.length) {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words.splice(randomIndex,1)[0];
    this.soundCurrentWord();
    } else {
      setTimeout(() => {
        if (this.checkWin()) {
          this.sound('audio/system/success.mp3');
          this.showEndGame('img/system/success.jpg');
        } else {
          this.sound('audio/system/failure.mp3');
          this.showEndGame('img/system/failure.jpg');
        }
      }, 1000);

      setTimeout(() => {
        this.stopGame();
      }, 3000);
    }
    
  }

  showEndGame(src) {
    let screen = document.createElement('div');
    screen.id = 'show';
    screen.innerHTML = `<img src="./src/assets/${src}" alt="">`;
    document.body.append(screen);
    setTimeout(() => {
      screen.remove();
    }, 2000);
  }
  
  soundCurrentWord() {
    setTimeout(() => {
          
      this.sound(this.currentWord.audio);
    }, 1000);
  }

  sound(src) {
    let objAudio = new Audio('./src/assets/' + src);
    objAudio.play();
  }

  checkWord(numberWord) {
    let resultChecked = numberWord === this.currentWord.index;
    this.listSteps.push(resultChecked);
    this.addStar(resultChecked);
    return resultChecked;
  }

  addStar(success) {
    let img = document.createElement('img');
    img.src = `./src/assets/img/system/${success ? 'star-win' : 'star'}.svg`;
    document.querySelector('.page__stars').append(img);
  }

  checkWin() {
    return this.listSteps.every((item) => item);
  }


  render() {
    console.log('app');
  } 
}

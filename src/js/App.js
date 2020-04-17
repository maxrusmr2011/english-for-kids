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
    this.save = [];
    this.saveTemp = [];
  }

  init() {
    this.menu.init();
    this.switch.init();
    this.page.init();
    this.createStatistic();
  }

  createStatistic() {
    if (localStorage['save']) {
      this.save = localStorage['save'];
    } else {
      this.nullStatistic();
    }
    console.log('stat', this.save);
  }

  nullStatistic() {
    this.save = CARDS.map((category) => {
      return {
        name: category.name,
        listCards: category.listCards.map((objWord) => {
          return {
            word: objWord.word,
            translation: objWord.translation,
            train: 0,
            success: 0,
            fail: 0,
          };
        }),
      };
    });
    localStorage.removeItem('save');
  }

  saveResult(numCategory, numWord, { train, success, fail }) {
    let referSave = this.save[numCategory].listCards[numWord];
    if (train) {
      referSave.train += 1;
    }
    if (success) {
      referSave.success += 1;
    }
    if (fail) {
      referSave.fail += 1;
    }
  }

  createTempStatistic() {
    this.saveTemp = [];
    app.save.forEach((item) => {
      item.listCards.forEach((itemWord) => {
        this.saveTemp.push({
          name: item.name,
          word: itemWord.word,
          translation: itemWord.translation,
          train: itemWord.train,
          success: itemWord.success,
          fail: itemWord.fail,
          percentErrors:
            itemWord.success + itemWord.fail
              ? (itemWord.fail * 100) / (itemWord.success + itemWord.fail)
              : 0,
        });
      });
    });
  }

  sortStatistic({ name, dir }) {
    if (dir === 1) {
      this.saveTemp.sort((a1, a2) => a1[name] > a2[name] ? 1 : a1[name] < a2[name] ? -1 : 0 );
    } else {
      this.saveTemp.sort((a2, a1) => a1[name] > a2[name] ? 1 : a1[name] < a2[name] ? -1 : 0 );
    }
  }

  saveStatistic() {
    this.save = localStorage['save'];
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
      return { index: i, audio: item.audioSrc };
    });
    this.nextWord();
  }

  nextWord() {
    if (this.words.length) {
      let randomIndex = Math.floor(Math.random() * this.words.length);
      this.currentWord = this.words.splice(randomIndex, 1)[0];
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
        this.menu.changeItemMenu(0);
      }, 3000);
    }
  }

  showEndGame(src) {
    let screen = document.createElement('div');
    screen.id = 'show';
    let errors = this.listSteps.reduce(
      (sum, item) => (item ? sum : sum + 1),
      0
    );
    errors = errors ? `<div>Errors : ${errors}</div>` : '';
    screen.innerHTML = `${errors}<img src="./src/assets/${src}" alt="">`;
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
}

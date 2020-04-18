import { Card } from './Card';
import { Table } from './Table';

export class Page {
  constructor() {
    this.currentPageNumber = 1;
    this.currentCategory = 0;
  }
  init() {
    this.formPage(this.currentPageNumber);
  }

  formPage(page, category) {
    this.currentPageNumber = page;
    if (arguments.length === 2) {
      this.currentCategory = category;
    }
    app.stopGame();
    let pageElement = document.querySelector('.page');
    pageElement.innerHTML = '';
    let container = document.createElement('div');
    let arrToContainer;
    if (this.currentPageNumber === 3) {
      if (!category) {
        app.createTempStatistic();
      } else {
        app.sortStatistic(category);
      }
      container.classList.add('container-table');
      arrToContainer = this.formAddPage3();
    } else {
      container.classList.add('container', 'layout-flex');
      container.onclick = (event) => {
        this.handleCard(event);
      };
      let arr = [];
      switch (this.currentPageNumber) {
        case 1:
          arr = app.CARDS;
          break;
        case 2:
          arr = app.CARDS[category].listCards;
          break;
        default:
          arr = app.arrRepeatWords;
      }
      arrToContainer = arr.map((item) => {
        let card = new Card(item).render();
        return card;
      });
    }

      container.append(...arrToContainer);

      if (this.currentPageNumber === 1 || this.currentPageNumber === 3) {
        pageElement.append(container);
      } else {
        let add = this.formAddPage2Page4();
        pageElement.append(add.title, add.stars, container, add.start);
      }
    
  }

  formAddPage3() {
    let table = document.createElement('table');
    table.append(new Table().render());
    app.saveTemp.forEach((item) => {
      table.append(new Table(item).render());
    });

    let title = document.createElement('div');
    title.classList.add('page__title');
    title.textContent = 'Statistic';

    let button1 = document.createElement('button');
    button1.classList.add('button-reset');
    button1.textContent = 'Reset statistic';
    button1.onclick = () => {
      app.nullStatistic();
      this.formPage(3);
    };

    let button2 = document.createElement('button');
    button2.classList.add('button-reset');
    button2.textContent = 'Repeat difficult words';
    button2.onclick = () => {
      this.repeatWord();
    };

    let buttons = document.createElement('div');
    buttons.classList.add('page__buttons');
    buttons.append(button1, button2);

    return [title, buttons, table];
  }


  repeatWord() {
    app.sortStatistic({ name: 'percentErrors', dir: 2 });
    let countFail = app.saveTemp.findIndex((item) => !item.percentErrors);
    countFail = countFail !== -1 && countFail <= 8 ? countFail : 8;
    let arrFailWords = app.saveTemp.slice(0, countFail);
    let arrRepeatWords = arrFailWords.map(
      (item) => app.CARDS[item.category].listCards[item.numWord]
    );
    app.arrRepeatWords = arrRepeatWords;
    this.formPage(4);
  }

  formAddPage2Page4() {
    const title = document.createElement('div');
    title.classList.add('page__title');

    title.textContent =
      this.currentPageNumber === 2
        ? app.CARDS[this.currentCategory].name
        : 'Repeat difficult words';

    const stars = document.createElement('div');
    stars.classList.add('page__stars');

    const start = document.createElement('div');
    start.classList.add('page__start');

    let button = document.createElement('button');
    button.classList.add('start-button');
    button.onclick = () => {
      if (!app.game.startedGame) {
        button.classList.add('start-game');
        app.startGame();
      } else {
        app.soundCurrentWord();
      }
    };
    button.innerHTML =
      '<span>Start Game</span><img src="./src/assets/img/system/repeat.svg" alt="repeat">';
    start.append(button);
    return { title, stars, start };
  }

  handleCard(e) {
    if (!e.target.closest('.card')) {
      return;
    }
    // get card number and element
    let result, cardElement;
    [...e.currentTarget.children].forEach((itemCard, i) => {
      if (itemCard.contains(e.target)) {
        cardElement = itemCard;
        result = i;
      }
    });
    if (this.currentPageNumber === 1) {
      app.menu.changeItemMenu(result + 1);
    } else {
      if (!app.switch.modePlay) {
        if (e.target.classList.contains('flipper')) {
          cardElement.classList.add('card-flip');
          cardElement.onmouseleave = (event) => {
            event.currentTarget.classList.remove('card-flip');
            event.currentTarget.onmouseleave = null;
          };
        } else {
          if (this.currentPageNumber === 2) {
            app.sound(app.CARDS[this.currentCategory].listCards[result].audioSrc);
            app.saveResult(this.currentCategory, result, 'train');
          } else {
            app.sound(app.arrRepeatWords[result].audioSrc);
          }
        }
      } else {
        if (app.game.startedGame && !cardElement.classList.contains('card-success')) {
          if (app.checkWord(result)) {
            if (this.currentPageNumber === 2) {
              app.saveResult(this.currentCategory, result, 'success');
            }
            this.markSuccessCard(cardElement);
            app.sound('audio/system/correct.mp3');
            app.nextWord();
          } else {
            if (this.currentPageNumber === 2) {
              app.saveResult(this.currentCategory, result, 'fail');
            }
            app.sound('audio/system/error.mp3');
          }
        }
      }
    }
  }

  markSuccessCard(cardEl) {
    cardEl.classList.add('card-success');
  }
}

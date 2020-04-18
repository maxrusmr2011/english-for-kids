import Card from './Card';
import Table from './Table';

export default class Page {
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
    window.app.stopGame();
    const pageElement = document.querySelector('.page');
    pageElement.innerHTML = '';
    const container = document.createElement('div');
    let arrToContainer;
    if (this.currentPageNumber === 3) {
      if (!category) {
        window.app.createTempStatistic();
      } else {
        window.app.sortStatistic(category);
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
          arr = window.app.CARDS;
          break;
        case 2:
          arr = window.app.CARDS[category].listCards;
          break;
        default:
          arr = window.app.arrRepeatWords;
      }
      arrToContainer = arr.map((item) => {
        const card = new Card(item).render();
        return card;
      });
    }

    container.append(...arrToContainer);

    if (this.currentPageNumber === 1 || this.currentPageNumber === 3) {
      pageElement.append(container);
    } else {
      const add = this.formAddPage2Page4();
      pageElement.append(add.title, add.stars, container, add.start);
    }
  }

  formAddPage3() {
    const table = document.createElement('table');
    table.append(new Table().render());
    window.app.saveTemp.forEach((item) => {
      table.append(new Table(item).render());
    });

    const title = document.createElement('div');
    title.classList.add('page__title');
    title.textContent = 'Statistic';

    const button1 = document.createElement('button');
    button1.classList.add('button-reset');
    button1.textContent = 'Reset statistic';
    button1.onclick = () => {
      window.app.nullStatistic();
      this.formPage(3);
    };

    const button2 = document.createElement('button');
    button2.classList.add('button-reset');
    button2.textContent = 'Repeat difficult words';
    button2.onclick = () => {
      this.repeatWord();
    };

    const buttons = document.createElement('div');
    buttons.classList.add('page__buttons');
    buttons.append(button1, button2);

    return [title, buttons, table];
  }


  repeatWord() {
    window.app.sortStatistic({ name: 'percentErrors', dir: 2 });
    let countFail = window.app.saveTemp.findIndex((item) => !item.percentErrors);
    countFail = countFail !== -1 && countFail <= 8 ? countFail : 8;
    const arrFailWords = window.app.saveTemp.slice(0, countFail);
    const arrRepeatWords = arrFailWords.map(
      (item) => window.app.CARDS[item.category].listCards[item.numWord],
    );
    window.app.arrRepeatWords = arrRepeatWords;
    this.formPage(4);
  }

  formAddPage2Page4() {
    const title = document.createElement('div');
    title.classList.add('page__title');

    title.textContent = this.currentPageNumber === 2
      ? window.app.CARDS[this.currentCategory].name
      : 'Repeat difficult words';

    const stars = document.createElement('div');
    stars.classList.add('page__stars');

    const start = document.createElement('div');
    start.classList.add('page__start');

    const button = document.createElement('button');
    button.classList.add('start-button');
    button.onclick = () => {
      if (!window.app.game.startedGame) {
        button.classList.add('start-game');
        window.app.startGame();
      } else {
        window.app.soundCurrentWord();
      }
    };
    button.innerHTML = '<span>Start Game</span><img src="./src/assets/img/system/repeat.svg" alt="repeat">';
    start.append(button);
    return { title, stars, start };
  }

  handleCard(e) {
    if (!e.target.closest('.card')) {
      return;
    }
    // get card number and element
    let result; let
      cardElement;
    [...e.currentTarget.children].forEach((itemCard, i) => {
      if (itemCard.contains(e.target)) {
        cardElement = itemCard;
        result = i;
      }
    });
    if (this.currentPageNumber === 1) {
      window.app.menu.changeItemMenu(result + 1);
    } else if (!window.app.switch.modePlay) {
      if (e.target.classList.contains('flipper')) {
        cardElement.classList.add('card-flip');
        cardElement.onmouseleave = (event) => {
          const elem = event.currentTarget;
          elem.classList.remove('card-flip');
          elem.onmouseleave = null;
        };
      } else if (this.currentPageNumber === 2) {
        window.app.sound(window.app.CARDS[this.currentCategory].listCards[result].audioSrc);
        window.app.saveResult(this.currentCategory, result, 'train');
      } else {
        window.app.sound(window.app.arrRepeatWords[result].audioSrc);
      }
    } else if (window.app.game.startedGame && !cardElement.classList.contains('card-success')) {
      if (window.app.checkWord(result)) {
        if (this.currentPageNumber === 2) {
          window.app.saveResult(this.currentCategory, result, 'success');
        }
        this.markSuccessCard(cardElement);
        window.app.sound('audio/system/correct.mp3');
        window.app.nextWord();
      } else {
        if (this.currentPageNumber === 2) {
          window.app.saveResult(this.currentCategory, result, 'fail');
        }
        window.app.sound('audio/system/error.mp3');
      }
    }
  }

  markSuccessCard(cardEl) {
    cardEl.classList.add('card-success');
  }
}

// import { CARDS } from './constants';
import { Card } from './Card';

export class Page {
  constructor() {
    this.pageNumber = 1;
  }
  init() {
    this.formPage(this.pageNumber);
  }

  formPage(page, category) {
    app.stopGame();
    let pageElement = document.querySelector('.page');
    pageElement.innerHTML = '';
    if (page !== 3) {
      let container = document.createElement('div');
      container.classList.add('container', 'layout-flex');
      container.onclick = (event) => {
        this.handleCard(event, page);
      };
      // categories and cards
      let arr = page === 2 ? app.CARDS[category].listCards : app.CARDS;
      let arrCards = arr.map((item) => {
        let card = new Card(page, item).render();
        return card;
      });
      container.append(...arrCards);
      if(page === 1) {
        pageElement.append(container);
      } else {
        const title = document.createElement('div');
        title.classList.add('page__title')
        title.textContent = app.CARDS[category].name;

        const stars = document.createElement('div');
        stars.classList.add('page__stars');

        const start = document.createElement('div');
        start.classList.add('page__start');
        // console.log(title, stars, start);

        let button = document.createElement('button');
        button.classList.add('start-button');
        
        // console.log('start =', app.startGame);
        button.onclick = (event) => {
          if (!app.startedGame) {
            button.classList.add('start-game');
            app.startGame(category);
          } else {
            app.soundWord();
          }
        };
        button.innerHTML = '<span>Start Game</span><img src="./src/assets/img/system/repeat.svg" alt="">';
        start.append(button);
        
        pageElement.append(title, stars, container, start);

      }
    }
  }

  handleCard(e, pageNumber) {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (!e.target.closest('.card')) {
      return;
    }
    let result;
    [...e.currentTarget.children].forEach((itemCard, i) => {
      if (itemCard.contains(e.target)) {
        // console.log(i);
        result = i;
      }
    });
    // e.target
    if (pageNumber === 1) {
      // this.formPage(2, result);
      app.menu.changeItemMenu(result + 1);
    }
    return;
  }
}

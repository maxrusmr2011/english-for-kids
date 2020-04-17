// import { CARDS } from './constants';
import { Card } from './Card';

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
    switch (page) {
      case 3:
        console.log('page3');
        break;
      case 2:
        let add = this.formAddPage2();
      default:
      let container = document.createElement('div');
      container.classList.add('container', 'layout-flex');
      container.onclick = (event) => {
        this.handleCard(event, page);
      };
      let arr = page === 2 ? app.CARDS[category].listCards : app.CARDS;
      let arrCards = arr.map((item) => {
        let card = new Card(page, item).render();
        return card;
      });
      container.append(...arrCards);
      if(page === 1) {
        pageElement.append(container);
      } else {
        pageElement.append(add.title, add.stars, container, add.start);
      }
    }
  }

  formAddPage2() {
    const title = document.createElement('div');
    title.classList.add('page__title')
    title.textContent = app.CARDS[this.currentCategory].name;

    const stars = document.createElement('div');
    stars.classList.add('page__stars');

    const start = document.createElement('div');
    start.classList.add('page__start');

    let button = document.createElement('button');
    button.classList.add('start-button');
    button.onclick = (event) => {
      if (!app.startedGame) {
        button.classList.add('start-game');
        app.startGame();
      } else {
        app.soundCurrentWord();
      }
    };
    button.innerHTML = '<span>Start Game</span><img src="./src/assets/img/system/repeat.svg" alt="repeat">';
    start.append(button);
    
    return {title, stars, start};
  }

  handleCard(e, pageNumber) {
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
    switch (pageNumber) {
      case 1:
        app.menu.changeItemMenu(result + 1);
        break;
      case 2:
        if(!app.switch.modePlay) {
          if (e.target.classList.contains('flipper')){
            cardElement.classList.add('card-flip');
            cardElement.onmouseleave = (event)  => {
              event.currentTarget.classList.remove('card-flip');
              event.currentTarget.onmouseleave = null;             
            };
          } else {
            app.sound(app.CARDS[this.currentCategory].listCards[result].audioSrc);
          }
          
        } else {
          if(app.startedGame){
            if(!cardElement.classList.contains('card-success')) {
              if (app.checkWord(result)) {
                this.markSuccessCard(cardElement);
                app.sound('audio/system/correct.mp3');
                app.nextWord();
              } else {
                app.sound('audio/system/error.mp3');
              }
            }
          }
        }
        break;
      default:
        console.log('click in page 3');
        
      }
     
    
    return;
  }

  markSuccessCard(cardEl) {
    cardEl.classList.add('card-success');
  }
}

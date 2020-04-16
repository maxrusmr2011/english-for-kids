import { CARDS } from './constants';
import { Card } from './Card';

export class Page {
  constructor() {
    this.pageNumber = 1;
  }
  init() {
    this.formPage(this.pageNumber);
  }

  formPage (page, category) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    console.log(CARDS);
    // categories
    if (page === 1) {
      let arrCards = CARDS.map((itemCategory) => {
        let card = (new Card(page, itemCategory)).render();
        return card;
      });
      container.append(...arrCards);      
    } else if (page === 2) {
     // cards     
      let arrCards = CARDS[category].listCards.map((itemWord) => {
        let card = (new Card(page, itemWord)).render();
        return card;
      });
      container.append(...arrCards);      
    }


  

    
    // switch(page) {
    //   case 1:
    //   case 3:
    //   default:

    // }
  }


}
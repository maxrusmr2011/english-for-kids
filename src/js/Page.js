import { CARDS } from './constants';
import { Card } from './Card';

export class Page {
  constructor() {
    this.pageNumber = 1;
  }
  init() {
    this.formPage(this.pageNumber);
  }

  formPage (page) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    console.log(CARDS);
    // categories
    let arrCards = CARDS.map((itemCategory) => {
      let card = (new Card(page, itemCategory)).render();
      return card;
    });
    container.append(...arrCards);

    
    // switch(page) {
    //   case 1:
    //   case 3:
    //   default:

    // }
  }

  changePage(newPageNumber) {

  }
}
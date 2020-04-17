export class Card {
  constructor(page, data) {
    this.data = data;
    this.page = page;
  }
  render() {
    let card = document.createElement('div');
      card.classList.add('card', this.page === 1 ? 'card-category' : 'card-word')
      if (this.page === 1) {
        card.innerHTML = `<img src="${'./src/assets/' + this.data.listCards[0].image}" alt=""><div class="card__text">${this.data.name}</div>`;
      } else if (this.page === 2) {
        let front = document.createElement('div');
        front.classList.add('card__front')
        let back = document.createElement('div');
        back.classList.add('card__back')
        front.innerHTML = `<img src="${'./src/assets/' + this.data.image}" alt=""><div class="card__text">${this.data.word}</div>`+
        `<img class="flipper" src="./src/assets/img/system/rotate.svg" alt="">`;
        
        back.innerHTML = `<img src="${'./src/assets/' + this.data.image}" alt=""><div class="card__text">${this.data.translation}</div>`;
        let inner = document.createElement('div');
        inner.append(front, back);
        inner.classList.add('card__inner');
        card.append(inner);

      }
      return card;
  }

  formCard () {}

  changeCard() {}
}
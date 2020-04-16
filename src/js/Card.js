export class Card {
  constructor(page, data) {
    this.data = data;
    this.page = page;
  }
  render() {
    let card = document.createElement('div');
      card.classList.add('card', this.page === 1 ? 'card-category' : 'card-word')
      if (this.page === 1) {
        card.innerHTML = `<img src="${'./src/assets/' + this.data.listCards[0].image}" alt=""><div>${this.data.name}</div>`;
      } else if (this.page === 2) {
        card.innerHTML = `<img src="${'./src/assets/' + this.data.image}" alt=""><div>${this.data.word}</div>`;

      }
      return card;
  }

  formCard () {}

  changeCard() {}
}
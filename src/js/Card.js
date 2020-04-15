export class Card {
  constructor(page, data) {
    this.data = data;
    this.page = page;
  }
  render() {
    let card = document.createElement('div');
      card.classList.add(this.page === 1 ? 'category' : 'card')
      card.innerHTML = `<img src="${'./src/assets/' + this.data.listCards[0].image}" alt=""><div>${this.data.name}</div>`;
      return card;
  }

  formCard () {}

  changeCard() {}
}
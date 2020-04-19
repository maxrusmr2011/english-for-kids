export default class Card {
  constructor(data) {
    this.data = data;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add(
      'card',
      window.app.page.currentPageNumber === 1 ? 'card-category' : 'card-word',
    );
    if (window.app.page.currentPageNumber === 1) {
      card.innerHTML = `<img src="${
        `./src/assets/${this.data.listCards[0].image}`
      }" alt=""><div class="card__text">${this.data.name}</div>`;
    } else {
      const front = document.createElement('div');
      front.classList.add('card__front');
      const back = document.createElement('div');
      back.classList.add('card__back');
      front.innerHTML = `<img src="./src/assets/${this.data.image}" alt=""><div class="card__text">${
        this.data.word}</div><img class="flipper" src="./src/assets/img/system/rotate.svg" alt="">`;
      back.innerHTML = `<img src="./src/assets/${this.data.image}" alt=""><div class="card__text">${
        this.data.translation}</div>`;
      const inner = document.createElement('div');
      inner.append(front, back);
      inner.classList.add('card__inner');
      card.append(inner);
    }
    return card;
  }
}

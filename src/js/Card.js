export class Card {
  constructor(data) {
    this.data = data;
  }
  render() {
    let card = document.createElement('div');
    card.classList.add(
      'card',
      app.page.currentPageNumber === 1 ? 'card-category' : 'card-word'
    );
    if (app.page.currentPageNumber === 1) {
      card.innerHTML = `<img src="${
        './src/assets/' + this.data.listCards[0].image
      }" alt=""><div class="card__text">${this.data.name}</div>`;
    } else {
      let front = document.createElement('div');
      front.classList.add('card__front');
      let back = document.createElement('div');
      back.classList.add('card__back');
      front.innerHTML = `<img src="./src/assets/${this.data.image}" alt=""><div class="card__text">${
        this.data.word}</div><img class="flipper" src="./src/assets/img/system/rotate.svg" alt="">`;
      back.innerHTML = `<img src="./src/assets/${this.data.image}" alt=""><div class="card__text">${
        this.data.translation}</div>`;
      let inner = document.createElement('div');
      inner.append(front, back);
      inner.classList.add('card__inner');
      card.append(inner);
    }
    return card;
  }
}

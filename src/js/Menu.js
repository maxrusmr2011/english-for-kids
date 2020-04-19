export default class Menu {
  constructor() {
    this.showMenu = false;
  }

  active(activation) {
    const WIDTH_MENU = 300;
    this.showMenu = arguments.length ? activation : !this.showMenu;
    if (this.showMenu) {
      document.body.classList.add('menu-activated');
      document.onclick = (event) => {
        if (event.clientX > WIDTH_MENU) {
          this.active(false);
        }
      };
    } else {
      document.body.classList.remove('menu-activated');
      document.onclick = null;
    }
  }

  changeItemMenu(elSelect) {
    let elSelectNew;
    if (typeof elSelect === 'number') {
      elSelectNew = document.querySelectorAll('.nav__link')[elSelect];
    } else {
      elSelectNew = elSelect;
    }
    document.querySelectorAll('.nav__link').forEach((itemMenu) => {
      itemMenu.classList.remove('nav__link-active');
    });
    elSelectNew.classList.add('nav__link-active');
    this.active(false);
    switch (elSelectNew.id) {
      case 'page-1':
        window.app.page.formPage(1);
        break;
      case 'page-3':
        window.app.page.formPage(3);
        break;
      default:
        window.app.page.formPage(2, Number(elSelectNew.id.slice(9)));
    }
  }

  init() {
    document.querySelector('.burger').addEventListener('click', (event) => {
      event.stopPropagation();
      this.active();
    });
    const menuContainer = document.querySelector('.nav ul');
    menuContainer.addEventListener('click', (event) => {
      const itemMenu = event.target;
      if (
        itemMenu.classList.contains('nav__link')
        && !itemMenu.classList.contains('nav__link-active')
      ) {
        this.changeItemMenu(itemMenu);
      }
    });
    menuContainer.firstElementChild.after(...this.addItemMenu());
  }

  addItemMenu() {
    const arrItemMenu = window.app.CARDS.map((item, i) => {
      const itemMenu = document.createElement('li');
      itemMenu.classList.add('nav__item');
      itemMenu.innerHTML = `<a id="${
        `category-${i}`
      }" class="nav__link" href="#">${item.name}</a>`;
      return itemMenu;
    });
    return arrItemMenu;
  }
}

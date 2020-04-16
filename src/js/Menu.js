// import { CARDS } from './constants';
export class Menu {
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
          // event.stopPropagation();
        }
      };
    } else {
      document.body.classList.remove('menu-activated');
      document.onclick = null;
    }
  }

  changeItemMenu(elSelect) {
    if (typeof elSelect === 'number') {
      elSelect = document.querySelectorAll('.nav__link')[elSelect];
    }
    document.querySelectorAll('.nav__link').forEach((itemMenu) => {
        itemMenu.classList.remove('nav__link-active');
    });
    elSelect.classList.add('nav__link-active');
    this.active(false);
    switch (elSelect.id) {
      case 'page-1':
        console.log('page-1');
        app.page.formPage(1);
        break;
        case 'page-3':
          console.log('page-3');
          app.page.formPage(3);
        break;
      default:
        console.log('page-2');
        // console.log(window.app);
        app.page.formPage(2, Number(elSelect.id.slice(9)));
    }
  }

  init() {
    document.querySelector('.burger').addEventListener('click', (event) => {
      event.stopPropagation();
      this.active();
    });
    let menuContainer = document.querySelector('.nav ul');
    menuContainer.addEventListener('click', (event) => {
      let itemMenu = event.target;
      if (
        itemMenu.classList.contains('nav__link') &&
        !itemMenu.classList.contains('nav__link-active')
      ) {
        this.changeItemMenu(itemMenu);
      }
    });
    menuContainer.firstElementChild.after(...this.addItemMenu());


  }

  addItemMenu() {
    let arrItemMenu = app.CARDS.map((item, i) => {
      let itemMenu = document.createElement('li');
      itemMenu.classList.add('nav__item');
      itemMenu.innerHTML = `<a id="${'category-' + i}" class="nav__link" href="#">${item.name}</a>`;
      return itemMenu;
    });
    return arrItemMenu;
  }
}

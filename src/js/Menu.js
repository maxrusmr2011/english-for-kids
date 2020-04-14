export class Menu {
  constructor() {
    this.showMenu = false;
  }
  active(activation) {
    this.showMenu = arguments.length ? activation : !this.showMenu;
    // console.log(3, activation, this.showMenu);
    if (this.showMenu) {
      document.querySelector('.burger').classList.add('burger-active');
      document.querySelector('.nav').classList.add('nav-active');
      document.body.classList.add('stop-scroll');
  
    } else {
      document.querySelector('.burger').classList.remove('burger-active');
      document.querySelector('.nav').classList.remove('nav-active');
      document.body.classList.remove('stop-scroll');
    }
  }

  changeItemMenu(elSelect) {
    alert('menu');
      
    document.querySelectorAll('.nav__link').forEach((el) => {
      if (el === elSelect) {
        el.classList.add('nav__link-active');
      } else {
        el.classList.remove('nav__link-active');
      }
    });

  }


  init() {
    document.querySelector('.burger').addEventListener('click', (event) => {
      this.active();
      // this.active( !event.currentTarget.classList.contains('burger-active') );
    });

    document.querySelector('.nav ul').addEventListener('click', (event) => {
      if(event.target.classList.contains('nav__link')) {
        if (event.target.classList.contains('nav__link-active')) {
          return;
        }
        this.changeItemMenu(event.target);
        }
    });


  }

}
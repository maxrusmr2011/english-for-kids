import { Menu } from './Menu';
import { Switch } from './Switch';
import { Page } from './Page';

export class App {

  constructor() {
    this.menu = new Menu();
    this.switch = new Switch();
    this.page = new Page();
  };

  init() {
    this.menu.init();
    this.switch.init();
    this.page.init();
  }
  render() {
    console.log('app');
  } 
}

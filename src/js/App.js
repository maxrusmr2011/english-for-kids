import { Menu } from './Menu';
import { Switch } from './Switch';
import { DATA_CARDS } from './constants';

export class App {

  constructor() {
    this.menu = new Menu();
    this.switch = new Switch();
  };

  init() {
    this.menu.init();
    this.switch.init();
  }
  render() {
    console.log('app');
  } 
}

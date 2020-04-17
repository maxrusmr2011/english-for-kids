export class Table {
  constructor(dataRow) {
    this.dataRow = dataRow;
  }

  render() {
    let arrRow = [];
    for (let i = 0; i < 8; i++) {
      arrRow.push(document.createElement('td'));
    }
    arrRow[1].textContent = this.dataRow.name;
    arrRow[2].textContent = this.dataRow.word;
    arrRow[3].textContent = this.dataRow.translation;
    arrRow[4].textContent = this.dataRow.train;
    arrRow[5].textContent = this.dataRow.success;
    arrRow[6].textContent = this.dataRow.fail;
    arrRow[7].textContent = this.dataRow.percentErrors;
    
    let row = document.createElement('tr')
    row.append(...arrRow);
    return row;
  }
  top() {
    let arrRow = [];
    for (let i = 0; i < 8; i++) {
      arrRow.push(document.createElement('td'));
    }
    let addButtons = '<div><button class="btn btn-up">▲</button><button class="btn btn-down">▼</button></div>';
    arrRow[0].textContent = '№';
    arrRow[1].innerHTML = `<div>Category</div>${addButtons}`;
    arrRow[1].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'name', dir: 1});
    };
    arrRow[1].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'name', dir: 2});
    };
    arrRow[2].innerHTML = `<div>Word</div>${addButtons}`;
    arrRow[2].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'word', dir: 1});
    };
    arrRow[2].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'word', dir: 2});
    };
    arrRow[3].innerHTML = `<div>Translation</div>${addButtons}`;
    arrRow[3].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'translation', dir: 1});
    };
    arrRow[3].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'translation', dir: 2});
    };
    arrRow[4].innerHTML = `<div>Count trains</div>${addButtons}`;
    arrRow[4].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'train', dir: 1});
    };
    arrRow[4].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'train', dir: 2});
    };
    arrRow[5].innerHTML = `<div>Success answers</div>${addButtons}`;
    arrRow[5].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'success', dir: 1});
    };
    arrRow[5].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'success', dir: 2});
    };
    arrRow[6].innerHTML = `<div>Fail answers</div>${addButtons}`;
    arrRow[6].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'fail', dir: 1});
    };
    arrRow[6].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'fail', dir: 2});
    };
    arrRow[7].innerHTML = `<div>Percents of errors</div>${addButtons}`;
    arrRow[7].querySelector('.btn-up').onclick = () => {
      app.page.formPage(3, {name: 'percentErrors', dir: 1});
    };
    arrRow[7].querySelector('.btn-down').onclick = () => {
      app.page.formPage(3, {name: 'percentErrors', dir: 2});
    };  
    let row = document.createElement('tr')
    row.append(...arrRow);
    return row;
  }
}

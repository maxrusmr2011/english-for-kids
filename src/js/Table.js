export class Table {
  constructor(dataRow) {
    this.dataRow = dataRow;
  }

  render() {
    let addButtons =
      '<div><button class="btn btn-up">▲</button><button class="btn btn-down">▼</button></div>';
    let row = document.createElement('tr');
    let propName = [
      'name',
      'word',
      'translation',
      'train',
      'success',
      'fail',
      'percentErrors',
    ];
    let topName = [
      '№',
      'Category',
      'Word',
      'Translation',
      'Count trains',
      'Success answers',
      'Fail answers',
      'Percents of errors',
    ];
    for (let i = 0; i < 8; i++) {
      let td = document.createElement('td');
      if (this.dataRow) {
        if (i) {
          td.textContent = this.dataRow[propName[i - 1]];
        }
      } else {
        td.innerHTML = i ? `<div>${topName[i]}</div>${addButtons}` : topName[i];
        if (i) {
          let btn = td.querySelectorAll('.btn');
          btn[0].onclick = () => {
            app.page.formPage(3, { name: propName[i - 1], dir: 1 });
          };
          btn[1].onclick = () => {
            app.page.formPage(3, { name: propName[i - 1], dir: 2 });
          };
        }
      }
      row.append(td);
    }
    return row;
  }
}

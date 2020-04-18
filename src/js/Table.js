export default class Table {
  constructor(dataRow) {
    this.dataRow = dataRow;
  }

  render() {
    const addButtons = '<div><button class="btn btn-up">▲</button><button class="btn btn-down">▼</button></div>';
    const row = document.createElement('tr');
    const propName = [
      'name',
      'word',
      'translation',
      'train',
      'success',
      'fail',
      'percentErrors',
    ];
    const topName = [
      '№',
      'Category',
      'Word',
      'Translation',
      'Count trains',
      'Success answers',
      'Fail answers',
      'Percents of errors',
    ];
    for (let i = 0; i < 8; i += 1) {
      const td = document.createElement('td');
      if (this.dataRow) {
        if (i) {
          td.textContent = this.dataRow[propName[i - 1]];
        }
      } else {
        td.innerHTML = i ? `<div>${topName[i]}</div>${addButtons}` : topName[i];
        if (i) {
          const btn = td.querySelectorAll('.btn');
          btn[0].onclick = () => {
            window.app.page.formPage(3, { name: propName[i - 1], dir: 1 });
          };
          btn[1].onclick = () => {
            window.app.page.formPage(3, { name: propName[i - 1], dir: 2 });
          };
        }
      }
      row.append(td);
    }
    return row;
  }
}

export default class GridView {
  constructor(grid) {
    console.dir(grid);
    this.gridContainer = document.querySelector('.grid-container');
    this.gridContainer.innerHTML = '';

    grid.forEach(line => {
      let row = document.createElement('div');
      row.className = 'row';

      line.forEach(spot => {
        let square = document.createElement('div');
        square.className = 'grid-square';

        if (spot === -1){
          square.classList.add('blocked');
        }

        row.append(square);
      })
      this.gridContainer.append(row);
    });

  }


  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className)

    return element;
  }
}



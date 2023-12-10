export default class Game {
  constructor(size=4) {
    this.cells = [];
    const field = document.createElement('div');
    field.classList.add('field');
    for (let sizeA = 0; sizeA < size; sizeA++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let sizeB = 0; sizeB < size; sizeB++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
        this.cells.push(column);
      }
      field.appendChild(row);
    }
    const body = document.querySelector('body');
    body.appendChild(field);
  }

  changeCell() {
    const currentCell = document.querySelector('.cell__active');
    let newCellIndex;
    do {
      newCellIndex = Math.floor(Math.random() * this.cells.length);
    } while ( this.cells[newCellIndex].classList.contains('cell__active') );
    
    if (currentCell) {
      currentCell.classList.remove('cell__active');
    }
    this.cells[newCellIndex].classList.add('cell__active');
  }
}

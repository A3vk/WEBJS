export default class GridView {
	constructor(grid) {
		this.gridContainer = document.querySelector('.grid-container');
		this.gridContainer.innerHTML = '';

		for (let y = 0; y < grid.length; y++) {
			let row = document.createElement('div');
			row.className = 'row';

			for (let x = 0; x < grid.length; x++) {
				let square = document.createElement('div');
				square.className = 'grid-square';
				if (grid[y][x] === -1) {
					square.classList.add('blocked');
				} else {
					square.addEventListener('click', () => {
						this.openPopup(x, y);
					});
				}
				row.append(square);
			}
			this.gridContainer.append(row);
		}
	}

	createElement(tag, className) {
		const element = document.createElement(tag);
		if (className) element.classList.add(className);

		return element;
	}
}

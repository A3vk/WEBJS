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
				} else if (grid[y][x] === 0) {
					square.addEventListener('click', () => {
						this.openPopup(x, y);
					});
					square.ondragover = (ev) => {
						ev.preventDefault();
					}
					square.ondrop = (ev) => {
						ev.preventDefault();
						var image = ev.dataTransfer.getData("text");
						ev.target.style.backgroundColor = image;
						let selectedProductContainer = document.querySelector('.selected-product-container');
            			selectedProductContainer.innerHTML = '';
					}
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

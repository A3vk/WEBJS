export default class GridView {
	constructor() {
	}

	render(grid) {
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
						let id = ev.dataTransfer.getData("text");
						try {
							ev.target.appendChild(document.getElementById(id));

							square.ondragleave = (ev) => {
								this.saveProductPosition(0, y, x);
							}
							this.saveProductPosition(id, y, x);
						}
						catch (err){
							return;
						}
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

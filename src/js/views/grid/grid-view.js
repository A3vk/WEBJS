export default class GridView {
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
				} else {
					if (grid[y][x] !== 0) {
						let image = document.createElement('img');
						let source = this.getProductImage(grid[y][x]) + '?' + new Date().getTime();
						image.src = source;
						image.id = grid[y][x]
						image.ondragstart = (ev) => {
							ev.dataTransfer.setData("text", ev.target.id);
						}

						let selector = document.querySelector('.product-selector > select')
						for (let i = 0; i < selector.options.length; i++) {
							let option = selector[i];
							if (option.value == grid[y][x]) {
								selector.removeChild(option);
							}
						}

						square.append(image);
					}
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
							console.dir(ev.target.children.length);
							if (ev.target.children.length != 0) {
								return;
							}
							let postion = this.getProductPosition(id);
							if (postion != undefined) {
								this.saveProductPosition(0, postion[0], postion[1]);
							}
							
							ev.target.appendChild(document.getElementById(id));	
							console.dir(ev.target.children.length);

							this.saveProductPosition(id, y, x);
						}
						catch (err) {
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

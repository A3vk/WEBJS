export default class CanvasView {
	constructor() {
		this.imageCanvas = document.querySelector('.canvas-container #image-canvas');
		this.imageContext = this.imageCanvas.getContext('2d');
		this.drawingCanvas = document.querySelector('.canvas-container #drawing-canvas');
		this.drawingContext = this.drawingCanvas.getContext('2d');
		let imageSelector = document.querySelector('#file');
		let colorSelector = document.querySelector('#color-selector');
		let strengthSelector = document.querySelector('#strength-selector');

		this.drawingCanvas.width = 1000;
		this.drawingCanvas.height = 1000;

		imageSelector.addEventListener('change', (e) => {
			let reader = new FileReader();
			reader.onload = (e) => {
				let img = new Image();
				img.onload = () => {
					this.imageCanvas.width = img.width;
					this.imageCanvas.height = img.height;
					this.imageContext.drawImage(img, 0, 0);
				};
				img.src = e.target.result;
			};
			reader.readAsDataURL(e.target.files[0]);
		});

		let lastX, lastY;
		let mousePressed = false;

		this.drawingCanvas.addEventListener('mousedown', (e) => {
			mousePressed = true;
			let pos = getMousePos(this.drawingCanvas, e);
			lastX = pos.x;
			lastY = pos.y;
		});

		this.drawingCanvas.addEventListener('mousemove', (e) => {
			if (mousePressed) {
				let pos = getMousePos(this.drawingCanvas, e);
				this.drawingContext.beginPath();
				this.drawingContext.strokeStyle = colorSelector.value;
				this.drawingContext.lineWidth = strengthSelector.value;
				this.drawingContext.lineJoin = 'round';
				this.drawingContext.moveTo(lastX, lastY);
				this.drawingContext.lineTo(pos.x, pos.y);
				this.drawingContext.closePath();
				this.drawingContext.stroke();
				lastX = pos.x;
				lastY = pos.y;
			}
		});

		this.drawingCanvas.addEventListener('mouseup', (e) => {
			mousePressed = false;
		});

		this.drawingCanvas.addEventListener('mouseleave', (e) => {
			mousePressed = false;
		});

		let clearButton = document.querySelector('#clear');
		clearButton.addEventListener('click', () => {
			this.drawingContext.clearRect(0, 0, this.drawingContext.canvas.width, this.drawingContext.canvas.height);
		});
	}

	render(image, drawing) {
		if (image) {
			let imageImg = new Image();
			imageImg.onload = () => {
				this.imageCanvas.width = imageImg.width;
				this.imageCanvas.height = imageImg.height;
				this.imageContext.drawImage(imageImg, 0, 0);
			};
			imageImg.src = image;
		}
		if (drawing) {
			let drawingImg = new Image();
			drawingImg.onload = () => {
				this.drawingCanvas.width = drawingImg.width;
				this.drawingCanvas.height = drawingImg.height;
				this.drawingContext.drawImage(drawingImg, 0, 0);
			};
			drawingImg.src = drawing;
		}
	}

	getCanvases() {
		return {
			image: this.imageCanvas.toDataURL(),
			drawing: this.drawingCanvas.toDataURL()
		};
	}
}

function getMousePos(canvas, evt) {
	let rect = canvas.getBoundingClientRect();
	let scaleX = canvas.width / rect.width;
	let scaleY = canvas.height / rect.height;

	return {
		x: (evt.clientX - rect.left) * scaleX,
		y: (evt.clientY - rect.top) * scaleY
	};
}

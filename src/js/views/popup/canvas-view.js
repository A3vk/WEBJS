export default class CanvasView {
	constructor() {
		let imageCanvas = document.querySelector('.canvas-container #image-canvas');
		let imageContext = imageCanvas.getContext('2d');
		let drawingCanvas = document.querySelector('.canvas-container #drawing-canvas');
		let drawingContext = drawingCanvas.getContext('2d');
		let imageSelector = document.querySelector('#file');

		drawingCanvas.width = 1000;
		drawingCanvas.height = 1000;

		imageSelector.addEventListener('change', (e) => {
			console.dir('Uploaded Image');
			var reader = new FileReader();
			reader.onload = function(event) {
				var img = new Image();
				img.onload = function() {
					imageCanvas.width = img.width;
					imageCanvas.height = img.height;
					imageContext.drawImage(img, 0, 0);
				};
				img.src = event.target.result;
			};
			reader.readAsDataURL(e.target.files[0]);
		});

		let lastX, lastY;
		let mousePressed = false;

		drawingCanvas.addEventListener('mousedown', (e) => {
			mousePressed = true;
			let pos = getMousePos(drawingCanvas, e);
			lastX = pos.x;
			lastY = pos.y;
		});

		drawingCanvas.addEventListener('mousemove', (e) => {
			if (mousePressed) {
				let pos = getMousePos(drawingCanvas, e);
				drawingContext.beginPath();
				drawingContext.strokeStyle = 'red';
				drawingContext.lineWidth = 6;
				drawingContext.lineJoin = 'round';
				drawingContext.moveTo(lastX, lastY);
				drawingContext.lineTo(pos.x, pos.y);
				drawingContext.closePath();
				drawingContext.stroke();
				lastX = pos.x;
				lastY = pos.y;
			}
		});

		drawingCanvas.addEventListener('mouseup', (e) => {
			mousePressed = false;
		});

		drawingCanvas.addEventListener('mouseleave', (e) => {
			mousePressed = false;
		});

		let clearButton = document.querySelector('#clear');
		clearButton.addEventListener('click', () => {
			drawingContext.setTransform(1, 0, 0, 1, 0, 0);
			drawingContext.clearRect(0, 0, drawingContext.canvas.width, drawingContext.canvas.height);
		});
	}
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect(), // abs. size of element
		scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
		scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

	return {
		x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
		y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
	};
}

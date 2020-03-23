export const storageKey = 'InvyStorage';

export default class StorageHelper {
	constructor() {
		if (localStorage.getItem(storageKey) === null) {
			this.init();
		}
	}

	init() {
		const json = {
			clothing: {
				products: [
					{
						id: 1,
						type: "clothing",
						name: "shirt",
						description: "Dit is een shirt",
						purchasePrice: 37,
						sellingPrice: 40,
						minamalStock: 22,
						stock: 30,
						color: "#ff00ff",
						size: 50,
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					},
					{
						id: 2,
						type: "clothing",
						name: "broek",
						description: "Dit is een broek",
						purchasePrice: 50,
						sellingPrice: 60,
						minamalStock: 10,
						stock: 20,
						color: "#ff00ff",
						size: 19,
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					}
				],
				warehouse: [
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
				]
			},
			decoration: {
				products: [
					{
						id: 1,
						type: "decoration",
						name: "Grafsteen",
						description: "Sppoookkkyyyyy!!!",
						purchasePrice: 10,
						sellingPrice: 20,
						minamalStock: 50,
						stock: 36,
						weight: 250,
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					},
					{
						id: 2,
						type: "decoration",
						name: "Tuinkabouter",
						description: "Ik heb een punt muts",
						purchasePrice: 999,
						sellingPrice: 1,
						minamalStock: 5,
						stock: 5,
						weight: 2,
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					}
				],
				warehouse: [
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ],
					[ 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0 ]
				]
			},
			beautification: {
				products: [
					{
						id: 1,
						type: "beautification",
						name: "Carl",
						description: "erg hongerig",
						purchasePrice: 37,
						sellingPrice: 37.37,
						minamalStock: 1,
						stock: 1,
						weight: '225 X 90 X 119',
						color: "#ff0000",
						pieces: "2",
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					},
					{
						id: 2,
						type: "beautification",
						name: "1-UP",
						description: "Voor mensen die meer dan 1 leven nodig hebben",
						purchasePrice: 1,
						sellingPrice: 999999,
						minamalStock: 10,
						stock: 8,
						weight: '225 X 90 X 119',
						color: "#ff0000",
						pieces: "100",
						image: 'https://www.colorbook.io/imagecreator.php?width=55&height=55?'
					}
				],
				warehouse: [
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
				]
			}
		};

		localStorage.setItem(storageKey, JSON.stringify(json));
		console.info('Storage Initialized');
	}

	clear() {
		localStorage.removeItem(storageKey);
		console.info('Storage Cleared');
		this.init();
	}

	inspect() {
		let storageData = JSON.parse(localStorage.getItem(storageKey));
		console.log('storageData :', storageData);
	}
}

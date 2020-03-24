import { storageKey } from '../../helpers/storage-helper';

export default class AttributeView {
	render(data) {
		this.attributeContainer = document.querySelector('.attribute-container');
		this.attributeContainer.innerHTML = '';

		let header = document.createElement('div');
		header.innerHTML = 'Informatie';
		header.className = 'header';

		let attributes = document.createElement('div');
		attributes.className = 'attributes';

		this.attributeContainer.append(header);

		let name = document.createElement('label');
		name.innerHTML = `Naam : ${data.name}`;

		let type = document.createElement('label');
		type.innerHTML = `Type  : ${data.type}`;

		let description = document.createElement('label');
		description.innerHTML = `Beschrijving  : ${data.description}`;

		let purchasePrice = document.createElement('label');
		purchasePrice.innerHTML = `Aankoop Prijs  : ${data.purchasePrice}`;

		let sellingPriceEx = document.createElement('label');
		sellingPriceEx.innerHTML = `Verkoop Prijs Exclusief BTW  : €${data.sellingPriceEx}`;

		let sellingPriceIn = document.createElement('label');
		sellingPriceIn.innerHTML = `Verkoop Prijs Inclusief BTW  : €${data.sellingPriceIn}`;

		let minimalStock = document.createElement('label');
		minimalStock.innerHTML = `Minimale Vooraad  : ${data.minimalStock}`;

		let stock = document.createElement('label');
		stock.innerHTML = `Huidige Vooraad  : ${data.stock}`;

		attributes.appendChild(name);
		attributes.appendChild(type);
		attributes.appendChild(description);
		attributes.appendChild(purchasePrice);
		attributes.appendChild(sellingPriceEx);
		attributes.appendChild(sellingPriceIn);
		attributes.appendChild(minimalStock);
		attributes.appendChild(stock);

		switch (data['type']) {
			case 'clothing':
				let clothingDiv = document.createElement('div');
				let clothingColor = document.createElement('label');
				clothingColor.innerHTML = `Kleur  : `;
				let clothingColorDiv = document.createElement('div');
				clothingColorDiv.style.backgroundColor = data.color;
				clothingColorDiv.className = 'color-div';

				clothingDiv.appendChild(clothingColor);
				clothingDiv.appendChild(clothingColorDiv);

				attributes.appendChild(clothingDiv);

				let clothingSize = document.createElement('label');
				clothingSize.innerHTML = `Maat  : ${data.size}`;

				attributes.appendChild(clothingSize);
				break;

			case 'decoration':
				let weight = document.createElement('label');
				weight.innerHTML = `Gewicht  : ${data.weight}Kg`;

				attributes.appendChild(weight);
				break;

			case 'beautification':
				let beautificationSize = document.createElement('label');
				beautificationSize.innerHTML = `Afmetingen  : ${data.size}`;

				attributes.appendChild(beautificationSize);

				let beautificationDiv = document.createElement('div');
				let beautificationColor = document.createElement('label');
				beautificationColor.innerHTML = `Kleur  : `;
				let beautificationColorDiv = document.createElement('div');
				beautificationColorDiv.style.backgroundColor = data.color;
				beautificationColorDiv.className = 'color-div';

				beautificationDiv.appendChild(beautificationColor);
				beautificationDiv.appendChild(beautificationColorDiv);

				attributes.appendChild(beautificationDiv);

				let pieces = document.createElement('label');
				pieces.innerHTML = `Stuks Per Verpaking  : ${data.pieces}`;

				attributes.appendChild(pieces);
		}
		this.attributeContainer.append(attributes);
	}
}

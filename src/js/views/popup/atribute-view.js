import { storageKey } from '../../helpers/storage-helper';

export default class AtributeView {
	render(data) {
		this.atributeContainer = document.querySelector('.atribute-container');
		this.atributeContainer.innerHTML = '';

		let header = document.createElement('div');
		header.innerHTML = 'Informatie';
		header.className = 'header';

		let atributes = document.createElement('div');
		atributes.className = 'atributes';

		this.atributeContainer.append(header);

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

        let minamalStock = document.createElement('label');
        minamalStock.innerHTML = `Minimale Vooraad  : ${data.minamalStock}`;

        let stock = document.createElement('label');
        stock.innerHTML = `Huidige Vooraad  : ${data.stock}`;

		atributes.appendChild(name);
		atributes.appendChild(type);
		atributes.appendChild(description);
		atributes.appendChild(purchasePrice);
		atributes.appendChild(sellingPriceEx);
		atributes.appendChild(sellingPriceIn);
		atributes.appendChild(minamalStock);
		atributes.appendChild(stock);

        switch (data['type']) {
            case 'clothing':
                let clothingDiv = document.createElement('div');
                let clothingColor = document.createElement('label');
                clothingColor.innerHTML = `Kleur  : `;
                let clothingColorDiv = document.createElement('div');
                clothingColorDiv.style.backgroundColor = data.color;
                clothingColorDiv.className = 'color-div'

				clothingDiv.appendChild(clothingColor);
				clothingDiv.appendChild(clothingColorDiv);

				atributes.appendChild(clothingDiv);

                let clothinsize = document.createElement('label');
                clothinsize.innerHTML = `Maat  : ${data.size}`;

				atributes.appendChild(clothinsize);
				break;

            case 'decoration':
                let weight = document.createElement('label');
                weight.innerHTML = `Gewicht  : ${data.weight}Kg`;

				atributes.appendChild(weight);
				break;

            case 'beautification':
                let beautificationSize = document.createElement('label');
                beautificationSize.innerHTML = `Afmetingen  : ${data.size}`;

				atributes.appendChild(beautificationSize);

                let beautificationDiv  = document.createElement('div');
                let beautificationColor = document.createElement('label');
                beautificationColor.innerHTML = `Kleur  : `;
                let beautificationColorDiv = document.createElement('div');
                beautificationColorDiv.style.backgroundColor = data.color;
                beautificationColorDiv.className = 'color-div';

				beautificationDiv.appendChild(beautificationColor);
				beautificationDiv.appendChild(beautificationColorDiv);

				atributes.appendChild(beautificationDiv);

                let pieces = document.createElement('label');
                pieces.innerHTML = `Stuks Per Verpaking  : ${data.pieces}`;

				atributes.appendChild(pieces);
        }
        this.atributeContainer.append(atributes);
    }
}

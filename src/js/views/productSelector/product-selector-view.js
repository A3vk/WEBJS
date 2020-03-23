export default class ProductSelectorView {
    constructor() {
    }

    render(products) {
        let productSelectorContainer = document.querySelector('.product-selector');
        productSelectorContainer.innerHTML = '';

        let trashcanContainer = document.querySelector('.trashcan');
        trashcanContainer.innerHTML = '';

        let selectedProductContainer = document.querySelector('.selected-product-container');


        this.selector = document.createElement('select');
        this.selector.className = 'col-md-9 product';

        Object.entries(products).forEach(([key, value]) => {
            let product = document.createElement('option');
            product.className = 'product';
            product.innerText = value;
            product.value = key;
            this.selector.append(product);
         });

        let button = document.createElement('button');
        button.innerText = 'Add';
        button.className = 'col-md-3';
        button.addEventListener('click', () => {
            let square = document.createElement('div');
            for (let i = 0; i < this.selector.options.length; i++) {
                let option = this.selector.options[i];
                if (option.selected === true) {
                    this.image = this.getProductImage(option.value);
                    this.selector.removeChild(option);
                    square.value = option.value;
                }
            }

            let selectedProductContainer = document.querySelector('.selected-product-container');
            selectedProductContainer.innerHTML = '';

            square.className = 'selected-product';
            square.draggable = true;
            square.ondragstart = (ev) => {
                ev.dataTransfer.setData("text", this.image, 'test');
            }
            square.style.backgroundColor = this.image;
            selectedProductContainer.append(square);



        });

        productSelectorContainer.append(this.selector);
        productSelectorContainer.append(button);

        
        let label = document.createElement('label');
        label.innerText = 'Deselecteren';
        let trashcan = document.createElement('div');
        trashcan.className = 'selected-product';

        trashcan.ondragover = (ev) => {
            ev.preventDefault();
        }

        trashcan.ondrop = (ev) => {
            let selectedProductContainer = document.querySelector('.selected-product-container');
            let selectedProduct = document.querySelector('.selected-product-container > .selected-product')
            selectedProductContainer.innerHTML = '';
            let name = this.getProductName(selectedProduct.value);
            let option = document.createElement('option');
            option.value = selectedProduct.value;
            option.innerText = name;
            this.selector.append(option);
        }
        trashcanContainer.append(label);
        trashcanContainer.append(trashcan);
    }
}

export default class ProductSelectorView {
    constructor() {
    }

    render(products) {
        let productSelectorContainer = document.querySelector('.product-selector')
        productSelectorContainer.innerHTML = '';

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
            for (let i = 0; i < this.selector.options.length; i++) {
                let option = this.selector.options[i];
                if (option.selected === true) {
                    this.image = this.getProductImage(option.value);
                    console.dir(this.image);
                }
            }

            let selectedProductContainer = document.querySelector('.selected-product-container');
            selectedProductContainer.innerHTML = '';

            let square = document.createElement('div');
            square.className = 'selected-product';
            square.draggable = true;
            square.ondragstart = (ev) => {
                ev.dataTransfer.setData("text", this.image);
            }
            square.style.backgroundColor = this.image;
            selectedProductContainer.append(square);

        });

        productSelectorContainer.append(this.selector);
        productSelectorContainer.append(button);
    }
}
import ProductSelectorView from '../views/productSelector/product-selector-view';

export default class ProductSelectorController{
    constructor(warehouseController){
        this.warehouseController = warehouseController;
        this.productSelectorView = new ProductSelectorView();
    }

    switchSelector(type){
        this.products = this.warehouseController.getProductNamesAndId(type);
        this.type = type;
        this.productSelectorView.render(this.products);
        this.productSelectorView.getProductName = (id) => {
            return (this.warehouseController.getProductName(this.type, id));
        }

        this.productSelectorView.getProductImage = (id) => {
            return this.warehouseController.getProductImage(this.type, id);
        }
    }
}
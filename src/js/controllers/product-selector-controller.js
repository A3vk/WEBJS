import ProductSelectorView from '../views/productSelector/product-selector-view';

export default class ProductSelectorController{
    constructor(warehouseController){
        this.warehouseController = warehouseController;
        this.productSelectorView = new ProductSelectorView();
        this.productSelectorView.getProductImage = (id) =>{
            if (id == 1){
              return '#cc99ff';
            }
            return '';
        }
        
    }

    switchSelector(type){
        this.products = this.warehouseController.getProductNamesAndId(type);
        this.type = type;
        this.productSelectorView.render(this.products);
        this.productSelectorView.getProductName = (id) => {
            let name = (this.warehouseController.getProductName(this.type, id));
            return name;
        }
    }
}
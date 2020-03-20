import TabView from '../views/tabs/tab-view';
import WarehousController from './warehouse-controller';

export default class TabController{
    constructor(warehousController){
        this.types = [];
        
        for (var key in warehousController.warehouses){
            this.types.push(warehousController.warehouses[key].type);
        }
        this.currentType = this.types[1];
        this.tabView = new TabView();
        this.tabView.switchTab = (data) => {
            this.currentTab = data;
        };

        this.tabView.render(this.types);
        console.dir(this.currentTab);
    }
}
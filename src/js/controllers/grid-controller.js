import GridView from "../views/grid/grid-view";

export default class GridController{
    constructor(warehouseController)
    {  
         this.warehouseController = warehouseController;
    }

    switchGrid(type){
        let grid = this.warehouseController.getGrid(type);
        this.view = new GridView(grid);
    }
}

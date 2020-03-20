import WizardController from './controllers/wizard-controller';
import GridController from './controllers/grid-controller';
import TabController from './controllers/tab-controller';
import StorageHelper from './helpers/storage-helper';
import WarehouseController from './controllers/warehouse-controller';


let controller = new WizardController('Beautification');
let app = new GridController();

// Give it to the window so you can access it from the console
// TODO: This needs to be changed when released
window.storageHelper = new StorageHelper();
let warehouseController = new WarehouseController();
let wizardController = new WizardController('clothing', warehouseController);

let tabController = new  TabController(warehouseController);


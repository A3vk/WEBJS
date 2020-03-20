import WizardController from './controllers/wizard-controller';
import StorageHelper from './helpers/storage-helper';
import WarehouseController from './controllers/warehouse-controller';

// Give it to the window so you can access it from the console
// TODO: This needs to be changed when released
window.storageHelper = new StorageHelper();
let warehouseController = new WarehouseController();
let wizardController = new WizardController('clothing', warehouseController);

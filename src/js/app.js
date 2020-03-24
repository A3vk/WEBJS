import WizardController from './controllers/wizard-controller';
import GridController from './controllers/grid-controller';
import TabController from './controllers/tab-controller';
import StorageHelper from './helpers/storage-helper';
import WarehouseController from './controllers/warehouse-controller';
import ProductSelectorController from './controllers/product-selector-controller';
import WeatherController from './controllers/weather-controller';
import CalculatorController from './controllers/calculator-controller';
import ImageHelper from './helpers/image-helper';

// Give it to the window so you can access it from the console
// TODO: This needs to be changed when released
window.storageHelper = new StorageHelper();
let warehouseController = new WarehouseController();
let gridController = new GridController(warehouseController);
let calculatorController = new CalculatorController();
let wizardController = new WizardController('clothing', warehouseController, calculatorController);
new WeatherController();
let productSelectorController = new ProductSelectorController(warehouseController);
new TabController(warehouseController.getTypes(), wizardController, gridController, productSelectorController);

new ImageHelper().clearUnusedImages();

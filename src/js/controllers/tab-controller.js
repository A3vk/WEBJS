import TabView from '../views/tabs/tab-view';

export default class TabController {
	constructor(types, wizardController, gridController, productSelectorController) {
		this.wizardController = wizardController;
		this.gridController = gridController;
		this.productSelectorController = productSelectorController;
		this.tabView = new TabView(types);

		this.tabView.switchTab = (type) => {
			this.currentTab = type;
			this.wizardController.switchWarehouse(type);
			productSelectorController.switchSelector(type);
			this.gridController.switchGrid(type);
		};

		this.tabView.render();
	}
}

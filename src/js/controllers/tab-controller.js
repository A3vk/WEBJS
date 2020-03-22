import TabView from '../views/tabs/tab-view';

export default class TabController {
	constructor(types, wizzardController, gridController, productSelectorController) {
		this.wizzardController = wizzardController;
		this.gridController = gridController;
		this.productSelectorController = productSelectorController;
		this.tabView = new TabView(types);

		this.tabView.switchTab = (type) => {
			this.currentTab = type;
			this.wizzardController.switchWarehouse(type);
			this.gridController.switchGrid(type);
			productSelectorController.switchSelector(type)
		};

		this.tabView.render();
	}
}

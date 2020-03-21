import TabView from '../views/tabs/tab-view';

export default class TabController {
	constructor(types, wizzardController, gridController) {
		this.wizzardController = wizzardController;
		this.gridController = gridController;
		this.tabView = new TabView(types);

		this.tabView.switchTab = (type) => {
			this.currentTab = type;
			this.wizzardController.switchWarehouse(type);
			this.gridController.switchGrid(type);
		};

		this.tabView.render();
	}
}

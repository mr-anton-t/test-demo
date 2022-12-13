import Page from './page';

const SELECTORS = {
    PAGE: 'div#contents_wrapper',
    TITLE: 'span.title',
    INVENTORY_LIST: 'div.inventory_list',      // same as input#user-name
    INVENTORY_ITEM: 'div.inventory_item',   // same as input#password
};

class InventoryPage extends Page {
    constructor() {
        super(SELECTORS.PAGE);
    }

    /**
     * define selectors using getter methods
     */
    public get title() {
        return this.page.$(SELECTORS.TITLE);
    }

    public get inventoryList() {
        return this.page.$(SELECTORS.INVENTORY_LIST);
    }

}

export default new InventoryPage();

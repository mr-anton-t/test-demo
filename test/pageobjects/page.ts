export default class Page {
    protected pageObj: string;

    constructor(element: string) {
        this.pageObj = element;
    }

    get page() {
        return $(this.pageObj);
    }

    // public open (path?: string) {
    //     return browser.url(`https://the-internet.herokuapp.com/${path}`)
    // }
}

class site {
    public open(path?: string) {

        path = path == undefined ? '' : path;

        return browser.url(`https://www.saucedemo.com/${path}`);
    }
}

export default new site();

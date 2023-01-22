import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import Site from '../pageobjects/site';

describe('Check Login application', () => {
    it('should login with valid credentials', async () => {
        await Site.open();

        await expect(LoginPage.page.isDisplayed()).toBeTruthy();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.title).toBeExisting();
        await expect(InventoryPage.title).toHaveTextContaining('PRODUCTS');
    });

    it('should see error for locked user', async () => {
        await Site.open();

        await expect(LoginPage.page.isDisplayed()).toBeTruthy();

        await LoginPage.login('locked_out_user', 'secret_sauce');

        //console.log(await LoginPage.errorMessage.getText());
        await expect(LoginPage.errorMessage).toBeExisting();
        expect(await LoginPage.errorMessage.getText()).toEqual('Epic sadface: Sorry, this user has been locked out.');

    });
});


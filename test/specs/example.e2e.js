import LoginPage from  '../pages/login.page';
import SecurePage from '../pages/secure.page';
import testdata from '../resources/testdata.json'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(testdata.LoginData.username, testdata.LoginData.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
    
});
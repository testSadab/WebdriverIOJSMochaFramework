import testdata from '../resources/testdata.json'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {

        await browser.url("https://the-internet.herokuapp.com/login")

        const inputUsername = $('#username') 
        const inputPassword = $('#password') 
        const btnSubmit = $('button[type="submit"]')
        const flashAlert = $('#flash') 

        await (await inputUsername).setValue(testdata.LoginData.username)
        await (await inputPassword).setValue(testdata.LoginData.password)
        await (await btnSubmit).click()

        await expect(flashAlert).toBeExisting();
        await expect(flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
    
});
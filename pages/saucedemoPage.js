export default class SaucedemoPage {
    constructor (page) {
        this.page=page

        this.usernameInput = page.locator ('#user-name')
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator ("h3[role='alert']")
        this.passwordErrorMessage = page.locator ("h3[role='alert']")
        this.dismissErrorMessage = page.locator ("button[aria-label='Dismiss error']")
        
    }
    async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async dismissError () {
    await this.dismissErrorMessage.click()
  }

}
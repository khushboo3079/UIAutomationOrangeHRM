class LoginPage {
    constructor(page) {
      if (!page) {
          throw new Error("Page instance is required!");
      }
      this.page = page;
      this.usernameInput = this.page.locator('input[name="username"]');
      this.passwordInput = this.page.locator('input[name="password"]');
      this.loginButton = this.page.locator('button[type="submit"]');
  }
  
    async navigate() {
      await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }
  
    async login(username, password) {
      await this.usernameInput.waitFor({ state: 'visible' });
      await this.usernameInput.fill(username);
      await this.passwordInput.waitFor({ state: 'visible' }); // Wait for password field
      await this.passwordInput.fill(password);
      await this.loginButton.waitFor({ state: 'visible' }); // Wait for login button
      await this.loginButton.click();
    }
  }
  
  module.exports = LoginPage;
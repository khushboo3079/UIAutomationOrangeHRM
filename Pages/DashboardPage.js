class DashboardPage {
    constructor(page) {
      this.page = page;
      this.pimModuleLink = page.locator('text=PIM');
    }
  
    async navigateToPIM() {
      await this.pimModuleLink.click();
    }
  }
  
  module.exports = DashboardPage;
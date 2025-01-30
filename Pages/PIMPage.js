class PIMPage {
    constructor(page) {
      this.page = page;
      //this.employeeSearchInput = page.locator('input[placeholder="Type for hints..."]');
      this.employeeSearchInput = page.getByRole('textbox', { name: 'Type for hints...' }).first();
      this.searchButton = page.locator('button[type="submit"]');
      this.employeeRecord = page.locator('.oxd-table-card');
      this.firstNameField = page.locator('input[name="firstName"]');
      this.saveButton =  page.locator('button').filter({ hasText: 'Save' }).nth(0);
      this.toastMessage = page.locator('.oxd-toast-content');
      this.errorMessage = page.locator('.oxd-input-field-error-message');
    }
  
    async searchEmployee(name) {
      await this.employeeSearchInput.waitFor({ state: 'visible', timeout: 60000 });
      await this.employeeSearchInput.fill(name);
      await this.searchButton.click();
    }
  
    async selectEmployee(name) {
      await this.employeeRecord.locator(`text=${name}`).click();
    }
  
    async updateEmployeeName(newName) {
      await this.firstNameField.fill(newName);
      await this.saveButton.click();
    }
  
    async clearFirstNameField() {
      await this.firstNameField.waitFor({ state: 'visible', timeout: 60000 });
      await this.firstNameField.fill('');
    }
  }
  
  module.exports = PIMPage;
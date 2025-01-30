const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const PIMPage = require('../../Pages/PIMPage');
const DashboardPage = require('../../Pages/DashboardPage');

let loginPage, dashboardPage, pimPage;

Given('I am on the OrangeHRM login page', async function (){
  try{
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  }
  catch (error) {
    console.error("❌ Error navigating to login module:", error);
    throw error;
  }

});

When('I log in with username {string} and password {string}', async function (username, password) {
  try{
    await loginPage.login(username, password); 
  }
  catch (error) {
    console.error("Wrong userid and password", error);
    throw error;
  }
});

Then('I should be redirected to the dashboard', async function () {
  try{
  await expect(this.page).toHaveURL(/dashboard/);
  }
  catch
  (error) {
    console.error("dashboard not found", error);
    throw error;
  }
});

Given('I am logged in to OrangeHRM', async function () {
  try{
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await loginPage.login('Admin', 'admin123');
  }
  catch
  (error) {
    console.error("Login failed", error);
    throw error;
  }
});

When('I navigate to the PIM module', async function () {
  try{
  dashboardPage = new DashboardPage(this.page);
  await dashboardPage.navigateToPIM();
  }
  catch
  (error) {
    console.error("unable to navigate to the PIM module", error);
    throw error;
  }
});

When('I search for an employee named {string}', async function (employeeName) {
  try{
  pimPage = new PIMPage(this.page);
  await pimPage.searchEmployee(employeeName);
}
  catch
  (error) {
    console.error("employee not present", error);
    throw error;
  }
});

Then('I should see the employee record for {string}', async function (employeeName) {
  try{
  await expect(pimPage.employeeRecord.locator(`text=${employeeName}`)).toBeVisible();
}
  catch
  (error) {
    console.error("Record not present", error);
    throw error;
  }
});

Given('I have accessed the employee record for {string}', async function (employeeName) {
  try{
  pimPage = new PIMPage(this.page);
  await pimPage.searchEmployee(employeeName);
  await pimPage.selectEmployee(employeeName);
  }
  catch
  (error) {
    console.error("unable to access", error);
    throw error;
  }

});

When('I update the employee\'s first name to {string}', async function (newName) {
  await pimPage.updateEmployeeName(newName);
});

Then('the update should be successful', async function () {
  if(
    await expect(pimPage.toastMessage).toContainText('Successfully Updated')){
      console.log("data saved");
    }
else{
    console.error("data not saved succesfully");
}
});

When('I try to save with an empty first name', async function () {
 try{
  await pimPage.clearFirstNameField(); 
  await pimPage.saveButton.click();
 }
  catch {
    console.error("not clear first name");
}
});

Then('I should see an error message {string}', async function (errorMessage) {
  try{
    await expect(pimPage.errorMessage).toContainText(errorMessage);
}
  catch {
    console.error("first name should not me blank");
}
});

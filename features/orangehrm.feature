Feature: OrangeHRM Employee Management

  Scenario Outline: Testcase1: Login to the application
    Given I am on the OrangeHRM login page
    When I log in with username "<username>" and password "<password>"
    Then I should be redirected to the dashboard

    Examples:
      | username | password |
      | Admin    | admin123 |
  Scenario Outline:testcase 2 Access an employee record
    Given I am logged in to OrangeHRM
    When I navigate to the PIM module
    And I search for an employee named "<employee_name>"
    Then I should see the employee record for "<record>"
    Examples:
      | employee_name | record   |
      | Mary  Chan      |Mary  Chan |
  Scenario: Update an employee record and try to fill empty record
    Given I am logged in to OrangeHRM
     When I navigate to the PIM module
    And I have accessed the employee record for "<employee_name>"
    When I update the employee's first name to "<Update>"
    Then the update should be successful
    When I try to save with an empty first name
    Then I should see an error message "Required"
    Examples:
      | employee_name | Update|
      |Mary  Chan    | Mary  Chan|

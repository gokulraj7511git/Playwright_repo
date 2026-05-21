Feature: Login Functionality

Scenario: Login with valid credentials
  Given User is on the login page
  When User enters valid username and valid password
  And Click on the login button
  Then User should navigate to the home page   
@smoke
Scenario: Login with invalid credentials
  Given User is on the login page
  When User enters valid username "standard_user" and invalid password "secret_sauce"
  And Click on the login button
  Then User should see an error message 


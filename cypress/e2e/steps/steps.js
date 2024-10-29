import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps'


Given('I am in login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

When ('I enter valid username and password', () => {
  cy.fixture('users.json').then((users) => {
    cy.get('input[name=username]').type(users.valid.username)
    cy.get('input[name=password]').type(users.valid.password)
  })
})

When ('I click on login button' , () => {
   cy.get('button[type=submit]').click()
})

Then('I should logged in and redirected to dashboard page', () => {
  cy.get('p.oxd-userdropdown-name').should('be.visible')
})

When ('I enter invalid username and password', () => {
  cy.fixtures('users.json').then((users) => {
    cy.get('input[name=username]').type(users.invalid.username)
    cy.get('input[name=password]').type(users.invalid.password)
  })
})

Then('I should see invalid credentials message', () => {
  cy.contains('Invalid credentials').should('be.visible')
}),

//spec 2

Given("I am on empty home page", () => {
  cy.visit("https://niteco.com");
});

When("I type and submit in the board name", () => {
  cy.xpath('/html/body/div[2]/div[1]/div/div/div[2]/button[3]').click();
});

Then("I should be redirected to the board detail", () => {
  cy.xpath('/html/body/div[4]/div[1]/header/div[2]/div/div[3]/ul/li[1]').click()
})
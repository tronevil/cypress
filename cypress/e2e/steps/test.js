import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
  cy.visit("https://niteco.com");
});

When("I type and submit in the board name", () => {
  cy.xpath('/html/body/div[2]/div[1]/div/div/div[2]/button[3]').click();
});

Then("I should be redirected to the board detail", () => {
  cy.xpath('/html/body/div[4]/div[1]/header/div[2]/div/div[3]/ul/li[1]').click()
})
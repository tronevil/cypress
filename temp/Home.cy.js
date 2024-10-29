
import Homepage from '/PageObjects/HomePage.js';
import 'cypress-mochawesome-reporter/register';
describe('Go to Home page ', () => {
    /*before(function () {
        cy.fixture('CustomerAccount').then(function (data){
          this.data = data;
      })
    })*/
    it('TC1: Select Our work from menu', function() {


           cy.session('test',() => {
            cy.log ('Visit Niteco')
            cy.visit('https://niteco.com/')
            Homepage.selectMenu()
            cy.log('Select Menu Successfully')
           /* LoginPage.inputUsername().type(this.data.username)
            LoginPage.inputPassword().type(this.data.password)
            LoginPage.clickLoginButton()
            cy.wait(500)
            cy.get('hot-outlet-selector.header__item > .outlets > .outlets__selected > .outlets__title').should('include.text', ' Xin chào Cửa hàng')
*/

       })
})
//Simulate FAILED test case
it('TC2: SImulate failed test case ', function() {

             cy.session('test',() => {
              cy.visit('https://niteco222.com/')

         })
})
})

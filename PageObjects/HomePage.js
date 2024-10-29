require('cypress-xpath')
class selectMenu{

selectMenu()
{
    cy.wait(600)
    cy.xpath('/html/body/div[2]/div[1]/div/div/div[2]/button[3]').click()
    cy.xpath('/html/body/div[4]/div[1]/header/div[2]/div/div[3]/ul/li[1]').click()
      cy.log('Select menu Our work successfully')
    //cy.get('[href="/our-work/"]').click()


    return
}
}
//export default selectMenu()
module.exports = new selectMenu();
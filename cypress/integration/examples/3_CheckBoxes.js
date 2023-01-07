/// <reference types="Cypress" />
 
describe('AutomationPractise page', function() 
{
    it('Radio buttons etc',function() {
 
 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option2','option3'])
         
        }  )
         

 
 
}  )
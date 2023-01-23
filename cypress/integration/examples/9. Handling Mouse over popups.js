describe('My First Test Suite', function() 
{
 
    it('Handling mouse over popups',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        //Use JQuery invoke to show hidden elements
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')    

        
 
    }  )
    it('Handling hidden elements',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        // if you use the following line, it will not click
        //  cy.contains('Top').click() 

        //But if you force click, Cypress can clcik on hidden elements without opening them as well
        cy.contains('Top').click({force:true})
        cy.url().should('include','top') 

    }  )
 
 
 
}  )
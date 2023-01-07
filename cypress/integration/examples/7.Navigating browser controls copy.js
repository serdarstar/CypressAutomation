describe('My First Test Suite', function() 
{
 
    it('Navigation ',function() {

    
    cy.visit("https://www.amazon.com/")
    cy.get('#nav-orders > .nav-line-2').click()
    cy.go('back')
    cy.url().should('not.include','signin')
    

   

    

    
 
}  )
 
 
 
}  )
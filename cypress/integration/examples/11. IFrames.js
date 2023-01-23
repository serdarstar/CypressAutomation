import 'cypress-iframe'
describe('My First Test Suite', function() 
{
 
    it('Test1',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        // First find the iframe id
        cy.frameLoaded("#courses-iframe")

        // Then swithc to it
        cy.iframe().find("a[href='mentorship']").eq(0).click()  //eq method here is used to set index value
        cy.iframe().find(".h-7").eq(0).click()

        
        

        
 
    }  )
    
 
 
 
}  )
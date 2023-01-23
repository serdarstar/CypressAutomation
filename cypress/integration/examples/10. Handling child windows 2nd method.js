describe('My First Test Suite', function() 
{
 
    it('Test1',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        //Use JQuery invoke to get the properties of elements
        // prop is not a Cypress command so we need to use then to resolve the promise
        // BUT, if it is redirecting to new domain (from Amazon to Ebay for exmaple), it will not work. On this condition
        // you can open it in the same window (go to 6th class on your left for Childwindows)
        cy.get('#opentab').then(function(el){
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)

        })

        

        
 
    }  )
    
 
 
 
}  )
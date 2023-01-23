describe('My First Test Suite', function() 
{
 
    it('Tables',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('table:nth-child(2) td:nth-child(2)').each(($el, index, $list) => {
 
            const textVeg=$el.text()
            if(textVeg.includes('Python'))
            {
            
                cy.get('table:nth-child(2) td:nth-child(2)').eq(index).next().then(function(price){

                    const pricetext=price.text()
                    expect(pricetext).to.equal("25")
                })
                
            }
            })
             

    
    

   

    

    
 
}  )
 
 
 
}  )
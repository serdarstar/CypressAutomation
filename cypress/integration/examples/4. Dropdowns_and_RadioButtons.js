describe('My First Test Suite', function() 
{
 
    it('Dropdowns',function() {

    //Static dropdown
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('select').select('option2').should('have.value','option2')

    //Dynamic dropdowns
    cy.get('#autocomplete').type('Ind')

    cy.get('.ui-menu-item div').each(($el,index,$list)=>{

            if($el.text()=='India'){

                $el.click();
            }

        }
    )
    
    cy.get('#autocomplete').should('have.value','India')

    // Radio buttons

    cy.get('input[value="radio1"]').check()
    cy.get('input[value="radio1"]').should('be.checked')



 
}  )
 
 
 
}  )
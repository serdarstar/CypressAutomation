describe('My First Test Suite', function() 
{
 
    it('Alerst Popups Child WIndows ',function() {

    // Cypress automatically accepts alerts, meaning clicks OK
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#alertbtn').click()

    // To get the text on an alert
    cy.on('window:alert',(str)=>{

        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    }
    )

    // Confirm buttons
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>{

        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    }
    )

    // New tabs or windows
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#opentab').invoke('romeveAttr','target').click()

    

    
 
}  )
 
 
 
}  )
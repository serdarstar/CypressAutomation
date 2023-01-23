describe('My First Test Suite', function() 
{
    
    before(function(){
        //runs befor all tests in the block
        // Uses example.json file for data driven test
        cy.fixture('example').then(function(data){
            this.data=data


        })

    })

    it("Values coming from fixture file", function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get(':nth-child(2) > .form-control').type(this.data.email)
        cy.get('select[class="form-control"]').select(this.data.gender)
        
        // Check if the value present in two-way data binfing example text box
        cy.get('.ng-untouched').should('have.value',this.data.name)

        // Validations based on DOM attributes
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
      
        // Validate radio button is disabled
        cy.get('#inlineRadio3').should('not.be.enabled')

        // You can pause the test if you want for debugging
        cy.pause()

        // Go to shop page
        cy.get(':nth-child(2) > .nav-link').click()

        // Find all product texts
        // You can do this by usig a custom command you add into support.js folder on the left
        cy.selectProduct("Blackberry")
        cy.selectProduct("Nokia Edge")

        // Data driven test for selecting products 
        // First add the data as json format into fixtures folder
        // Product name is an array, so store it in an array
        var productNameArray=this.data.productName

        productNameArray.forEach(function(element){
            cy.selectProduct(element) // we created this custom method in support/command.js folder

        });
        


        
    })

    /*it("Hardcoded values", function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type("Serdar")
        cy.get(':nth-child(2) > .form-control').type("abc@gmail.com")
        cy.get('select[class="form-control"]').select("Female")



    })*/


    
    


})
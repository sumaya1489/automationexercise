describe('Assignment on automationexcercise.com', () => {
  it('Should select a product and added to cart after that confirm the order', () => {

    cy.visit('https://automationexercise.com/')
    cy.url().should('eq', 'https://automationexercise.com/')

    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    
    cy.url().should('eq', 'https://automationexercise.com/view_cart')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.modal-body > :nth-child(2) > a > u').click()

    var firstName = "Sumaya"
    var lastName = "Yeacin"
    cy.get('[data-qa="signup-name"]').type(firstName)
    var uniqueString = (Math.random() + 1).toString(36).substring(7);
    cy.get('[data-qa="signup-email"]').type(`${firstName}${uniqueString}@gmail.com`)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender2').check()
    cy.get('[data-qa="password"]').type("123456")
    cy.get('[data-qa="days"]').select('1').should('have.value', '1')
    cy.get('[data-qa="months"]').select('January').should('have.value', '1')
    cy.get('[data-qa="years"]').select('2000').should('have.value', '2000')
    cy.get('[data-qa="first_name"]').type(firstName)
    cy.get('[data-qa="last_name"]').type(lastName)
    cy.get('[data-qa="company"]').type("iFarmer")
    cy.get('[data-qa="address"]').type("Delhi")
    cy.get('[data-qa="country"]').select('India').should('have.value', 'India')
    cy.get('[data-qa="state"]').type("Delhi")
    cy.get('[data-qa="city"]').type('Delhi')
    cy.get('[data-qa="zipcode"]').type('1234')
    cy.get('[data-qa="mobile_number"]').type('123456789')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()

    cy.contains(`Logged in as ${firstName}`)
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.col-sm-6 > .btn').click()

    cy.get('#address_delivery').should("be.visible")
    cy.get('.form-control').type("Please deliver as soon as possible!")
    cy.get(':nth-child(7) > .btn').click()

    cy.get('[data-qa="name-on-card"]').type("Bank")
    cy.get('[data-qa="card-number"]').type("123654789663")
    cy.get('[data-qa="cvc"]').type("123")
    cy.get('[data-qa="expiry-month"]').type("02")
    cy.get('[data-qa="expiry-year"]').type("2030")
    cy.get('[data-qa="pay-button"]').click().should('be.visible')
    cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')

  
  })
})
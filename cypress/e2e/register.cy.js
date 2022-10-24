describe ('register test cases', () =>{
    it.only ('visit gallery page', () =>{
        cy.visit ('https://etherscan.io/register')
    })

    it ("go to register page", () => {
        cy.get ('a[href="/register"]').click ()
    })

    it ("register with all empty fields", () => {
        cy.get ('button[type="submit"]').click ()
        cy.wait(5000)
    })
        
    it ("register without accepted terms and conditions", () => {
        cy.get ('#first-name').clear().type ('Dragan')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora611212@bora.com')
            cy.get ('#password').clear().type ('bora1234')
            cy.get ('#password-confirmation').clear().type ('bora1234')
            cy.get ('button[type="submit"]').click()
    })



    it ("register only 1 char in first name", () => {
        cy.get ('#first-name').clear().type ('D')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora16212@bora.com')
            cy.get ('#password').clear().type ('bora1234')
            cy.get ('#password-confirmation').clear().type ('bora1234')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })




    it ("register invalid email without @", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora162212bora.com')
            cy.get ('#password').clear().type ('bora1234')
            cy.get ('#password-confirmation').clear().type ('bora1234')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })

    it ("register invalid email without .com", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora162212@bora')
            cy.get ('#password').clear().type ('bora1234')
            cy.get ('#password-confirmation').clear().type ('bora1234')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })


    it ("register without password", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora1362212@bora.com')
            cy.get ('#password').clear().type ('')
            cy.get ('#password-confirmation').clear().type ('')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })



    it ("register with password that contains only digits", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora11362212@bora.com')
            cy.get ('#password').clear().type ('12345678')
            cy.get ('#password-confirmation').clear().type ('12345678')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })


    it ("register with password that contains 7 chars", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora11362212@bora.com')
            cy.get ('#password').clear().type ('danilot')
            cy.get ('#password-confirmation').clear().type ('danilot')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })

    it ("register used email", () => {
        cy.get ('#first-name').clear().type ('Boban')
        cy.get ('#last-name').clear().type ('Ralic')
        cy.get ('#email').clear().type ('bora@bora')
            cy.get ('#password').clear().type ('bora1234')
            cy.get ('#password-confirmation').clear().type ('bora1234')
            cy.get ('input[class="form-check-input"]').click()
            cy.get ('button[type="submit"]').click()
    })



  it ('register with valid credentials', () => {
    cy.get ('#first-name').clear().type ('Dragan')
    cy.get ('#last-name').clear().type ('Ralic')
    cy.get ('#email').clear().type ('bora22212@bora.com')
        cy.get ('#password').clear().type ('bora1234')
        cy.get ('#password-confirmation').clear().type ('bora1234')
        cy.get ('input[class="form-check-input"]').click()
        cy.get ('button[type="submit"]').click()




    })
})
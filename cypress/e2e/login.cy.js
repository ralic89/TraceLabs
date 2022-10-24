/// <reference types="Cypress" />

describe ('Login test cases',()  => {
    it('Go to gallery page', () => {

        cy.visit('https://gallery-app.vivifyideas.com/')
    } )

    it ('go to login page', () => {
        cy.get ("a[href='/login']").click ()
    })

    it('Login with invalid email', ()=>{
        cy.get('#email').clear().type('ddddggg')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Login with wrong email', ()=>{
        cy.get('#email').clear().type('ftfyuiji@gmail.com')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Login with empty email', ()=>{
        //cy.get('#email').clear().type(' ')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Login with invalid password', ()=>{
        cy.get('#email').clear().type('kkk5@gmail.com')
        cy.get('#password').clear().type('qqqqqqq1')
        cy.get("button[type='submit']").click()
    })

    it ('login with valid credentials', () =>{
        cy.get('#email').type ('test@test.com')
        cy.get ('#password').type('test1234')
        cy.get ("button[type='submit']").click()
    })

    
    it ("Logout" ,  () => {
        cy.wait (5000)
        cy.get('a[class="nav-link nav-buttons"]').eq(2).click ()
    })

   
} )
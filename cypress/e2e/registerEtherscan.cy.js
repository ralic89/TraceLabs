/// <reference types="Cypress" />

import { izvoz } from "../page_objects/registerObjectEtherscan";
import { faker } from '@faker-js/faker';
import { general } from "../page_objects/generalEtherscan";
import data from '../fixtures/dataEtherscan.json'

const fakedData = {
    userName: faker.name.firstName(11),
    email: faker.internet.email(),
    password: faker.datatype.string(10),
    tooShortPassword: faker.datatype.string(3),
}

describe ("Register Etherscan", () => {

    beforeEach ( () => {
        cy.visit ('https://etherscan.io/register')
        cy.url().should('contain', 'https://etherscan.io/register')
        general.headerTitle.should('be.visible')
        .and('contain', data.header.registerNewAccount)

    })
    
    it('negative case register / register with empty user name field ', () => {
        izvoz.register ('{backspace}', fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageUserName.should('be.visible')
        .and('have.text', 'Username is invalid.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    })

    it('negative case register / register with empty email adress field ', () => {
        izvoz.register (fakedData.userName, '{backspace}', fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageValidEmaillAdress.should('be.visible')
        .and('have.text' , 'Please enter a valid email address.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    })

    it('negative case register / register with empty Confirm email adress field ', () => {
        izvoz.register (fakedData.userName, fakedData.email, '{backspace}', fakedData.password, fakedData.password);
        general.errorMessageConfirmEmaillAdress.should('be.visible')
        .and('have.text' , 'Please re-enter your email address.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    })

    it('negative case register / register with empty password field ', () => {
        izvoz.register(fakedData.userName, fakedData.email, fakedData.email, '{backspace}', fakedData.password);
        general.errorMessagePassword.should('be.visible')
        .and('have.text' , 'Your password must be at least 5 characters long.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
        
    })

    it('negative case register / register with empty confirm password field ', () => {
        izvoz.register (fakedData.userName, fakedData.email, fakedData.email, fakedData.password, '{backspace}');
        general.errorMessagePasswordConfirm.should('be.visible')
        .and('have.text' , 'Your password must be at least 5 characters long.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    } )

    it('negative case register / register while leaving i agree Terms And Conditions unchecked ', () => {
        izvoz.registerWithoutTermsAndCondtions(fakedData.userName, fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageTermsAndConditions.should('be.visible')
        .and('have.text' , 'Please accept our Terms and Conditions.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    });

    it('negative case register / register while leaving I Am Not a Robot unchecked ', () => {
        izvoz.registerWithoutIamNotRobot(fakedData.userName, fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageCaptcha.should('be.visible')
        .and('have.text' , 'Error! Invalid captcha response.  Please Try Again')
        .and('have.css' , 'color', 'rgb(115, 35, 29)')
    })

    it('negative case register / register with short Username less than 5 chars ', () => {
        izvoz.register ('Dani', fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageUserName.should('be.visible')
        .and('have.text' , 'Username is invalid.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')
    });

    it('negative case register / register with long Username more than 30 chars ', () => {
        izvoz.register ('Danilotodorovic123456789123456789', fakedData.email, fakedData.email, fakedData.password, fakedData.password);   
    })

    it('negative case register / register with not only alphanumeric chars in Username ', () => {
        izvoz.register ('Dr@gan' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageUserName.should('be.visible')
        .and('have.text' , 'Username is invalid.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)')  
    })

    it('negative case register / register with non-latin Username ', () => {
        izvoz.register ('Драган' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageUserName.should('be.visible')
        .and('have.text' , 'Username is invalid.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)') 
    })

    it('negative case register / register with already used Username ', () => {
        izvoz.register('ManUtd' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
       
    })

    it('negative case register / register with invalid email format field', () => {
        izvoz.register(fakedData.userName, 'test@test.', fakedData.email, fakedData.password, fakedData.password);
        general.errorMessageValidEmaillAdress.should('be.visible')
        .and('have.text' , 'Please enter a valid email address.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)') 
    })

    // it ('negative case register / register with already used email ', () => {
    //     izvoz.register(fakedData.userName, 'ralic89@yahoo.com', 'ralic89@yahoo.com', fakedData.password, fakedData.password);
           
    // });

    it('negative case register / register with confirm email field different than email field ', () => {
        izvoz.register (fakedData.userName, 'test@test.com', 'ralic89@yahoo.com', fakedData.password, fakedData.password)
        general.errorMessageConfirmEmaillAdress.should('be.visible')
        .and('have.text' , 'Email address does not match.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)') 
    });

    it('negative case register / register with short password field less than 5 chars ', () => {
        izvoz.register (fakedData.userName, fakedData.email, fakedData.email, fakedData.tooShortPassword, fakedData.tooShortPassword);
        general.errorMessagePassword.should('be.visible')
        .and('have.text' , 'Your password must be at least 5 characters long.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)') 
    });

    it('negative case register / register with confirm password field different than password field ', () => {
        izvoz.register (fakedData.userName , fakedData.email, fakedData.email, fakedData.password, faker.datatype.string(8));
        general.errorMessagePasswordConfirm.should('be.visible')
        .and('have.text' , 'Password does not match, please check again.')
        .and('have.css' , 'color', 'rgb(222, 68, 55)') 
    })


    it('positive case register / register using valid data, fill all requiered fields with valid data ', () => {
        izvoz.register (fakedData.userName , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
        // izvoz.createAccountButton.should('not.exist')
        // general.headerTitle2.should('be.visible')
        // .and('have.text' , 'Register a New Account')
    });

    










} )
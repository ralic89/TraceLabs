/// <reference types="Cypress" />

import { izvoz } from "../page_objects/registerObject";
import { faker } from '@faker-js/faker';

const fakedData = {
    userName: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.datatype.string(8),
    tooShortPassword: faker.datatype.string(3),
}

describe ("Register Etherscan", () => {

    beforeEach ( () => {
        cy.visit ('https://etherscan.io/register')
    })
    
    it('negative case register / register with empty user name field ', () => {
        izvoz.register ('{backspace}', fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    })

    it ('negative case register / register with empty email adress field ', () => {
        izvoz.register (fakedData.userName, '{backspace}', fakedData.email, fakedData.password, fakedData.password);    
    })

    it ('negative case register / register with empty Confirm email adress field ', () => {
        izvoz.register (fakedData.userName, fakedData.email, '{backspace}', fakedData.password, fakedData.password);
    })

    it ('negative case register / register with empty password field ', () => {
        izvoz.register(fakedData.userName, fakedData.email, fakedData.email, '{backspace}', fakedData.password);
    })

    it ('negative case register / register with empty confirm password field ', () => {
        izvoz.register (fakedData.userName, fakedData.email, fakedData.email, fakedData.password, '{backspace}');
    } )

    it ('negative case register / register while leaving i agree Terms And Conditions unchecked ', () => {
        izvoz.registerWithoutTermsAndCondtions(fakedData.userName, fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    });

    it ('negative case register / register while leaving I Am Not a Robot unchecked ', () => {
        izvoz.registerWithoutIamNotRobot(fakedData.userName, fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    })

    it ('negative case register / register with short Username less than 5 chars ', () => {
        izvoz.register ('Dani', fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    });

    it ('negative case register / register with long Username more than 30 chars ', () => {
        izvoz.register ('Danilotodorovic123456789123456789', fakedData.email, fakedData.email, fakedData.password, fakedData.password);   
    })

    it ('negative case register / register with not only alphanumeric chars in Username ', () => {
        izvoz.register ('Dr@gan' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);   
    })

    it ('negative case register / register with non-latin Username ', () => {
        izvoz.register ('Драган' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);   
    })

    it ('negative case register / register with already used Username ', () => {
        izvoz.register('ManUtd' , fakedData.email, fakedData.email, fakedData.password, fakedData.password);   
    })

    it ('negative case register / register with invalid email format field', () => {
        izvoz.register(fakedData.userName, 'test@test.', fakedData.email, fakedData.password, fakedData.password);
    })

    it ('negative case register / register with already used email ', () => {
        izvoz.register(fakedData.userName, 'ralic89@yahoo.com', 'ralic89@yahoo.com', fakedData.password, fakedData.password);   
    });

    it ('negative case register / register with confirm email field different than email field ', () => {
        izvoz.register (fakedData.userName, 'test@test.com', 'ralic89@yahoo.com', fakedData.password, fakedData.password)  
    });

    it('negative case register / register with short password field less than 6 chars ', () => {
        izvoz.register (fakedData.userName, fakedData.email, fakedData.email, fakedData.tooShortPassword, fakedData.tooShortPassword);  
    });

    it('negative case register / register with confirm password field different than password field ', () => {
        izvoz.register (fakedData.userName , fakedData.email, fakedData.email, fakedData.password, faker.datatype.string(8));
    })


    it('positive case register / register using valid data, fill all requiered fields with valid data ', () => {
        izvoz.register (fakedData.userName , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    });

    it('positive case register / register using valid data, fill all requiered fields with valid data ', () => {
        izvoz.register (fakedData.userName , fakedData.email, fakedData.email, fakedData.password, fakedData.password);
    })










} )
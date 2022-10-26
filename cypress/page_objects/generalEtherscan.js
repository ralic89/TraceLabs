class General {
    get headerTitle () {
        return cy.get ('h1')
    }

    get errorMessageUserName () {
        return cy.get ('div[id="ContentPlaceHolder1_txtUserName-error"]')
    }

    get errorMessageValidEmaillAdress () {
        return cy.get ('div[id="ContentPlaceHolder1_txtEmail-error"]')
    }

    get errorMessageConfirmEmaillAdress () {
        return cy.get ('div[id="ContentPlaceHolder1_txtConfirmEmail-error"]')
    }

    get errorMessagePassword () {
        return cy.get ('div[id="ContentPlaceHolder1_txtPassword-error"]')
    }
    
    get errorMessagePasswordConfirm () {
        return cy.get ('div[id="ContentPlaceHolder1_txtPassword2-error"]')
    }
    
    get errorMessageTermsAndConditions () {
        return cy.get ('div[id="ctl00$ContentPlaceHolder1$MyCheckBox-error"]')
    }


    get errorMessageCaptcha () {
        return cy.get('#ctl00 > .alert')
    }

    get errorMessageUsedUserName () {
        return cy.get ('div[class="alert alert-danger"]')
    }

    get headerTitle2 () {
        return cy.get ('h1[class="h3 text-primary font-weight-normal mb-2"]')
    }

}

export const general = new General ()


class registerEtherscan {
    get userName () {
        return cy.get ("input[id='ContentPlaceHolder1_txtUserName']")
    }
    
    get emailAdress () {
        return  cy.get ("input[id='ContentPlaceHolder1_txtEmail']")
    }

    get confirmEmaillAdress () {
        return cy.get ("input[id='ContentPlaceHolder1_txtConfirmEmail']")
    }

    get password () {
        return cy.get ("input[id='ContentPlaceHolder1_txtPassword']")
    }

    get confirmPassword () {
        return cy.get ("#ContentPlaceHolder1_txtPassword2")
    }

    get termsAndConditionsCheckBox () {
        return cy.get (":nth-child(5) > .custom-control > .custom-control-label > span")
    }

    get iAmNotRobotRadioButton () {
        return cy.get("[style='width: 304px; height: 78px;'] > div > iframe")
    }

    get createAccountButton () {
        return cy.get ("input[id='ContentPlaceHolder1_btnRegister']")
    }

    register (userName, emailAdress , confirmEmaillAdress, password, confirmPassword) {
        this.userName.type(userName);
        this.emailAdress.type(emailAdress);
        this.confirmEmaillAdress.type(confirmEmaillAdress);
        this.password.type(password);
        this.confirmPassword.type(confirmPassword);
        this.termsAndConditionsCheckBox.click();
        this.iAmNotRobotRadioButton.click();
        this.createAccountButton.click();
    }



    registerWithoutTermsAndCondtions (userName, emailAdress , confirmEmaillAdress, password, confirmPassword) {
        this.userName.type(userName)
        this.emailAdress.type(emailAdress)
        this.confirmEmaillAdress.type(confirmEmaillAdress)
        this.password.type(password)
        this.confirmPassword.type(confirmPassword)
        this.iAmNotRobotRadioButton.click()
        this.createAccountButton.click()

    }
    registerWithoutIamNotRobot (userName, emailAdress , confirmEmaillAdress, password, confirmPassword) {
        this.userName.type(userName)
        this.emailAdress.type(emailAdress)
        this.confirmEmaillAdress.type(confirmEmaillAdress)
        this.password.type(password)
        this.confirmPassword.type(confirmPassword)
        this.termsAndConditionsCheckBox.click()
        this.createAccountButton.click()

    }






}
export const izvoz = new registerEtherscan ()
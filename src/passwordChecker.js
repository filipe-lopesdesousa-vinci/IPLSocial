export class PasswordChecker {
    testCharLength(password) {
        if(password.length < 8) {
            return false;
        }
        return true;
    }

    testSpecialChar(password) {
        const specialChars = ["!", "&", "@", "#", "$", "%", "^", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/"];
        return specialChars.some(char => password.includes(char));
    }

    testContainsNumber(password) {
        return /\d/.test(password);
    }

    testContainsIPL(password) {
        const lowerCasePassword = password.toLowerCase();
        
        return lowerCasePassword.includes("ipl");
    }

    validatePassword(password) {
        return this.testCharLength(password) &&
               this.testSpecialChar(password) &&
               this.testContainsNumber(password) &&
               this.testContainsIPL(password);
    }
}
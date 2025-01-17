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
}
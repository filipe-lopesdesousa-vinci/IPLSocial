export class PasswordChecker {
    testCharLength(password) {
        if(password.length < 8) {
            return false;
        }
        return true;
    }

    testSpecialChar(password) {
        return false;
    }
}
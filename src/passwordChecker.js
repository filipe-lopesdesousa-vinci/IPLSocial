export class PasswordChecker {
    testCharLength(password) {
        if(password.length === 8) {
            return true;
        }
        return false;
    }
}
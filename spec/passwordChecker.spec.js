import { PasswordChecker } from "../src/passwordChecker.js";

describe("Password Checker - testing character length", () => {
    let passwordChecker = new PasswordChecker();

    it("should return false if password length equals 0", () => {
        const result = passwordChecker.testCharLength("");

        expect(result).toBe(false);
    }); 
});
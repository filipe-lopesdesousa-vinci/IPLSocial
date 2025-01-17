import { PasswordChecker } from "../src/passwordChecker.js";

describe("Password Checker - testing character length", () => {
    let passwordChecker = new PasswordChecker();

    it("should return false if password length equals 0", () => {
        const result = passwordChecker.testCharLength("");

        expect(result).toBe(false);
    }); 

    it("should return false if password length equals 1", () => {
        const result = passwordChecker.testCharLength("1");

        expect(result).toBe(false);
    });

    it("should return true if password length equals 8", () => {    
        const result = passwordChecker.testCharLength("12345678");

        expect(result).toBe(true);
    });

    it("should return true if password length is greater than 8", () => {
        const result = passwordChecker.testCharLength("123456789");

        expect(result).toBe(true);
    });
});

describe("Password Checker - testing special characters", () => {
    let passwordChecker = new PasswordChecker();

    it("should return false if password does not contain special characters", () => {
        const result = passwordChecker.testSpecialChar("password");

        expect(result).toBe(false);
    });

    it("should return true if password contains at least 1 special character", () => {
        const result = passwordChecker.testSpecialChar("password!");

        expect(result).toBe(true);
    });

    it("should return true if password contains more than 1 special characters", () => {
        const result = passwordChecker.testSpecialChar("pass!word&");

        expect(result).toBe(true);
    });
});

describe("Password Checker - testing numbers", () => {
    let passwordChecker = new PasswordChecker();

    it("should return false if password does not contain numbers", () => {
        const result = passwordChecker.testContainsNumber("password");

        expect(result).toBe(false);
    });
});

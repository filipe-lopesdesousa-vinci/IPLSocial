import { PasswordChecker } from "../src/passwordChecker.js";
let passwordChecker = new PasswordChecker();

describe("Password Checker - testing character length", () => {

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

    it("should return false if password does not contain numbers", () => {
        const result = passwordChecker.testContainsNumber("password");

        expect(result).toBe(false);
    });

    it("should return true if password contains at least 1 number", () => {
        const result = passwordChecker.testContainsNumber("password1");

        expect(result).toBe(true);
    });

    it("should return true if password contains more than 1 number", () => {
        const result = passwordChecker.testContainsNumber("pass1word2");

        expect(result).toBe(true);
    });
});

describe("Password Checker - testing IPL", () => {

    it("should return false if password dont contains IPL", () => {
        const result = passwordChecker.testContainsIPL("password");

        expect(result).toBe(false);
    });

    it("should return true if password contains IPL in capital letters", () => {
        const result = passwordChecker.testContainsIPL("passwordIPL");

        expect(result).toBe(true);
    });

    it("should return true if password contains IPL in small letters", () => {
        const result = passwordChecker.testContainsIPL("passwordipl");

        expect(result).toBe(true);
    });

    it("should return true if password contains IPL in any case ", () => {
        const result = passwordChecker.testContainsIPL("passwordIpL");

        expect(result).toBe(true);
    });
});

describe("Password Checker - validate password", () => {

    it("should return false if password does not meet all criteria", () => {
        const result = passwordChecker.validatePassword("short1!");

        expect(result).toBe(false);
    });

    it("should return true if password meets all criteria", () => {
        const result = passwordChecker.validatePassword("Password1!IpL");

        expect(result).toBe(true);
    });

    it("should return false if password is missing a special character", () => {
        const result = passwordChecker.validatePassword("Password1IPL");

        expect(result).toBe(false);
    });

    it("should return false if password is missing a number", () => {
        const result = passwordChecker.validatePassword("Password!IPL");

        expect(result).toBe(false);
    });
});
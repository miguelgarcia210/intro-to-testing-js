// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });

    // TEST IF INPUT RETURNS GREETING WITH STRING INPUT
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    // TEST RETURN WHEN FUNCTION IS CALLED
    it('should return "Hello, World!" when "undefined"', function () {
        expect(sayHello()).toBe("Hello, World!");
    });

    // TEST IF INPUT IS A BOOLEAN VALUE
    it('should return "Hello, World!" when passed boolean true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when passed boolean false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });

    // TEST IF INPUT IS 'NULL'
    it('should return "not a string" when null', function () {
        expect(sayHello(null)).toBe("not a string");
    });

    // TEST IF INPUT IS AN EMPTY STRING
    it('should return "Hello, World!" when passed an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });

    // TEST IF INPUT IS A NUMBER
    it('should return "input cannot be or start with a number" when passed a number', function () {
        expect(sayHello(5)).toBe("input cannot be or start with a number");
    });
    it('should return "input cannot be or start with a number" when passed a number', function () {
        expect(sayHello(100)).toBe("input cannot be or start with a number");
    });
    it('should return "input cannot be or start with a number" when passed a number', function () {
        expect(sayHello(55)).toBe("input cannot be or start with a number");
    });

    // TEST IF INPUT BEGINS WITH A NUMBER IN A STRING
    it('should return "input cannot be or start with a number" when passed a number as a string', function () {
        expect(sayHello("5")).toBe("input cannot be or start with a number");
    });
    it('should return "input cannot be or start with a number" when passed a number as a string', function () {
        expect(sayHello("10Jane0")).toBe("input cannot be or start with a number");
    });
    it('should return "input cannot be or start with a number" when passed a number as a string', function () {
        expect(sayHello("45Jane")).toBe("input cannot be or start with a number");
    }); it('should return "input cannot be or start with a number" when passed a number as a string', function () {
        expect(sayHello("45Jane")).toBe("input cannot be or start with a number");
    });

    // TEST IF INPUT IS ANOTHER DATA TYPE
    it('should return "not a string" when passed another data type', function () {
        expect(sayHello(["a","b"])).toBe("not a string");
    });
});

describe('isFive', function() {
    it('should return a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
//    Should return a boolean
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe("boolean");
    });
//    Should return true when passed 5
    it('should return true when passed the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed another number', function () {
        expect(isFive(55)).toBe(false);
    });
    it('should return false when passed another number', function () {
        expect(isFive(500)).toBe(false);
    });
//    Should return true when passed the string "5"
    it('should return true when passed the string "5"', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed the string "55"', function () {
        expect(isFive("55")).toBe(false);
    });
    it('should return false when passed the string "500"', function () {
        expect(isFive("500")).toBe(false);
    });
});
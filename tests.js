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

describe('isEven', function() {
    it('should return a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
//    Should return a boolean value always
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean");
    });
//    Should return true when passed an even number
    it('should return true when passed an even number', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed an even number', function () {
        expect(isEven(40)).toBe(true);
    });
    it('should return true when passed an even number', function () {
        expect(isEven(1000)).toBe(true);
    });
//    Should return true when passed an even negative number
    it('should return true when passed an even negative number', function () {
        expect(isEven(-2)).toBe(true);
    });
    it('should return true when passed an even negative number', function () {
        expect(isEven(-40)).toBe(true);
    });
    it('should return true when passed an even negative number', function () {
        expect(isEven(-1000)).toBe(true);
    });
//    Should return false when passed an odd number
    it('should return false when passed an odd number', function () {
        expect(isEven(5)).toBe(false);
    });
    it('should return false when passed an odd number', function () {
        expect(isEven(55)).toBe(false);
    });
    it('should return false when passed an odd number', function () {
        expect(isEven(5005)).toBe(false);
    });
//    Should return false when passed a string
    it('should return false when passed a string', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed a string', function () {
        expect(isEven("codeup")).toBe(false);
    });
    it('should return false when passed a string', function () {
        expect(isEven("duck")).toBe(false);
    });
//    Should return true when passed an even number as a string
    it('should return true when passed an even number as a string', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return true when passed an even number as a string', function () {
        expect(isEven("16")).toBe(true);
    });
    it('should return true when passed an even number as a string', function () {
        expect(isEven("80")).toBe(true);
    });
//    Should return false when passed an odd number as a string
    it('should return false when passed an odd number as a string', function () {
        expect(isEven("25")).toBe(false);
    });
    it('should return false when passed an odd number as a string', function () {
        expect(isEven("55")).toBe(false);
    });
    it('should return false when passed an odd number as a string', function () {
        expect(isEven("69")).toBe(false);
    });
//    Should return true when passed an even negative number as a string
    it('should return true when passed an even negative number as a string', function () {
        expect(isEven("-10")).toBe(true);
    });
    it('should return true when passed an even negative number as a string', function () {
        expect(isEven("-100")).toBe(true);
    });
    it('should return true when passed an even negative number as a string', function () {
        expect(isEven("-2684")).toBe(true);
    });
//    Should return false when passed an odd negative number as a string
    it('should return false when passed an odd negative number as a string', function () {
        expect(isEven("-55")).toBe(false);
    });
    it('should return false when passed an odd negative number as a string', function () {
        expect(isEven("-890549")).toBe(false);
    });
    it('should return false when passed an odd negative number as a string', function () {
        expect(isEven("-789")).toBe(false);
    });
//    Should return false when passed Infinity
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
//    Should return false when passed a boolean value
    it('should return false when passed a boolean value', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed a boolean value', function () {
        expect(isEven(true)).toBe(false);
    });
//    Should return false when called without an argument
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should return a defined function ', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean value', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
//    Should return true when passed a lowercase vowel
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });it('should return true when passed "e"', function () {
        expect(isVowel("e")).toBe(true);
    });it('should return true when passed "i"', function () {
        expect(isVowel("i")).toBe(true);
    });it('should return true when passed "o"', function () {
        expect(isVowel("o")).toBe(true);
    });it('should return true when passed "u"', function () {
        expect(isVowel("u")).toBe(true);
    });
//    Should return true when passed an uppercase vowel
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when passed "E"', function () {
        expect(isVowel("E")).toBe(true);
    });
    it('should return true when passed "I"', function () {
        expect(isVowel("I")).toBe(true);
    });
    it('should return true when passed "O"', function () {
        expect(isVowel("O")).toBe(true);
    });
    it('should return true when passed "U"', function () {
        expect(isVowel("U")).toBe(true);
    });
//    Should return false when passed a non-vowel letter
    it('should return false when passed a non-vowel letter', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed a non-vowel letter', function () {
        expect(isVowel("H")).toBe(false);
    });
    it('should return false when passed a non-vowel letter', function () {
        expect(isVowel("c")).toBe(false);
    });
//    Should return false when passed a number
    it('should return false when passed a number', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a number', function () {
        expect(isVowel(69)).toBe(false);
    });
    it('should return false when passed a number', function () {
        expect(isVowel(500)).toBe(false);
    });
//    Should return false when passed a boolean value
    it('should return false when passed a boolean value', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed a boolean value', function () {
        expect(isVowel(false)).toBe(false);
    });
//    Should return false when called without an argument
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should return a defined function ', function () {
        expect(typeof add).toBe("function");
    });
    it('should return the sum of two numbers', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return the sum of two numbers', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return the sum of two numbers', function () {
        expect(add(25, 25)).toBe(50);
    });
    it('should return the sum of two numbers including string numbers', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return the sum of two numbers including string numbers', function () {
        expect(add("-4", 10)).toBe(6);
    });
    it('should return NaN when entered a string literal', function () {
        expect(isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN when entered a string literal and a number', function () {
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN when called without an argument', function () {
        expect(isNaN(add())).toBe(true);
    });
});
// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x) {
    // if (x === "Alex") {
    //     return "Hello, Alex!";
    // } else if (x === "Pat"){
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!";
    // }
    if (x === undefined) {
        return "Hello, World!";
    }

    //TODO: if input is a boolean

    // if (x === true) {
    //     return "Hello, World!";
    // }
    //
    // if (x === false) {
    //     return "Hello, World!";
    // }

    // REFACTORED
    if (typeof x === "boolean") {
        return "Hello, World!";
    }

    //TODO: if passed an empty string

    if (x === "") {
        return "Hello, World!";
    }

    //TODO: if input is a number OR begins with a string number

    if (!isNaN(parseFloat(x))) {
        return "input cannot be or start with a number"
    }

    //TODO: if passed another data type

    if (typeof x !== "string") {
        return "not a string";
    }

    return "Hello, " + x + "!";
}

function isFive(x) {
    return parseFloat(x) === 5;
}

function isEven(x) {
    if (typeof x === "boolean") {
        return false;
    }
    return x % 2 === 0;
}

function isVowel(x) {
    return x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "A" || x === "E" || x === "I" || x === "O" || x === "U";
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
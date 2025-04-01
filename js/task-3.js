"use strict";


class StringBuilder {

    #value

    constructor(initalValue) {
        this.#value = initalValue
    }

    getValue() {
        return this.#value
    }

    padStart(str) {
        return str
    }

    padBoth(str) {
        return str + this.#value + str
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.getStart("^");
console.log(builder.getValue()); // "^."

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
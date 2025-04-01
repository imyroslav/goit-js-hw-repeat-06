"use strict";


class StringBuilder {

    #value

    constructor(initalValue) {
        this.#value = initalValue
    }

    getValue() {
        return this.#value;
    }

    padStart(str) {
        this.#value = str + this.#value;
        return this.#value;
    }

    padEnd(str) {
        this.#value = this.#value + str;
        return this.#value
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
        return this.#value;
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
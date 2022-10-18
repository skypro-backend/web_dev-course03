function factorial(number) {

    if (number === 1) {
        return 1;
    }

    const result = number * factorial(number - 1);
    return result;

}

debugger;

console.log(factorial(5));
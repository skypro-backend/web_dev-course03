function factorial(number) {

    if (number === 1) {
        return 1;
    }

    const result = number * factorial(number - 1);
    return result;

}

// console.log(factorial(5));

/**
 * F(n) = F(n-1) + F(n-2)
 * F(0) = 0
 * F(1) = 1
 * 0 1 1 2 3 5 8 13
 */
function fibonacci(n) {

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
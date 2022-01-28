const isNumberValid = (n) => {
    const num = Number(n);
    if (
        n === null ||
        n === '' ||
        typeof n === 'boolean' ||
        Array.isArray(n) ||
        isNaN(num)
    ) {
        throw new Error('No es un número');
    } else if (num < 0) {
        throw new Error('No es un número positivo ');
    } else if (parseInt(num) !== num) {
        throw new Error('No es un número entero ');
    } else {
        return true;
    }
};

export const factorial = (n) => {
    if (isNumberValid(n)) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
};

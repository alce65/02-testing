import { factorial } from './factorial.js';

describe('Testing factorial', () => {
    test('If n = 0, result should be 1', () => {
        const n = 0;
        expect(factorial(n)).toBe(1);
    });
    test('If n = 1, result should be 1', () => {
        const n = 1;
        expect(factorial(n)).toBe(1);
    });
    test('If n = 5, result should be 120', () => {
        const n = 5;
        expect(factorial(n)).toBe(120);
    });
    test('If n = "5", result should be 120', () => {
        const n = '5';
        expect(factorial(n)).toBe(120);
    });
    test('If n = -5, should throw an error', () => {
        const n = -5;
        expect(() => factorial(n)).toThrow('No es un número positivo');
        // expect(factorial.bind(n)).toThrow();
    });
});

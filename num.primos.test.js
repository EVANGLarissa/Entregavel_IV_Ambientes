const ehPrimo = require('./num.primos');

describe('Testes para o algoritmo de números primos', () => {
    test('Deve retornar true para o número 7', () => {
        expect(ehPrimo(7)).toBe(true);
    });

    test('Deve retornar false para o número 4', () => {
        expect(ehPrimo(4)).toBe(false);
    });

    test('Deve retornar false para o número 1', () => {
        expect(ehPrimo(1)).toBe(false);
    });

    test('Deve lançar erro quando o parâmetro não for um número', () => {
        expect(() => ehPrimo('a')).toThrow('O parâmetro deve ser um número.');
        expect(() => ehPrimo(null)).toThrow('O parâmetro deve ser um número.');
    });
});

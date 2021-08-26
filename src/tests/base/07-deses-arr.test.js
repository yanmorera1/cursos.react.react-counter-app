import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07 deses', () => {
    test('Retona un string e int', () => {
        const [letras, numeros] = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        // console.log(typeof letras);
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})

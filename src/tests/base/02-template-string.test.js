import moduleName from '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.test.js', () => {
    test('Prueba en metodo getSaludo', () => {
        const nombre = "Yan";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre + '!');
        // console.log(saludo)
    })
    test('Prueba en metodo getSaludo sin parametros', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
    
    
})

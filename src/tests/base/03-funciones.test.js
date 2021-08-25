import { getUser } from "../../base/05-funciones"
import '@testing-library/jest-dom'

describe('Pruebas en funciones', () => {
    test('getUser Retorna objeto ', () => {
        const userTest = {
            uid: 123,
            username: 'El_Papi1502'
        };
        const usuario = getUser();
        console.log(usuario);
        expect(usuario).toEqual(userTest);
    })

})

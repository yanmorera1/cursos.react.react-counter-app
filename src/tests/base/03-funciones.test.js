import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom'

describe('Pruebas en funciones', () => {
    test('getUser Retorna objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const usuario = getUser();
        // console.log(usuario);
        expect(usuario).toEqual(userTest);
    })
    test('getUsuarioActivo retorna un objeto', () => {
        const pruebaUsuarioActivo = {
            uid: 'ABC567',
            username: 'Yan'
        };
        const usuario = getUsuarioActivo('Yan');
        expect(usuario).toEqual(pruebaUsuarioActivo);
    })
    
})
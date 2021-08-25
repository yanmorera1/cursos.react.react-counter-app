describe('Pruebas en demo.test.js', () => {
    test('Deben ser iguales los strings', () => {
        //1. inicialización
        const mensaje = 'Hola mundo';
    
        //2. Estímulo
        const mensaje2 = `Hola mundo`;
    
        //3. observar el comportamieto
        expect(mensaje).toBe(mensaje2);
    })
})
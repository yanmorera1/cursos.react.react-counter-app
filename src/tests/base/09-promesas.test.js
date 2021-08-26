import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Promises tests', () => {
    test('should return async hero', (done) => {
        const id = 1;
        const hero = getHeroeByIdAsync(id).then(h => {
            expect(h).toBe(heroes[0]);
            done();
        })
    });
    test('should return error if hero by id does not exists', () => {
        const id = 10;
        const hero = getHeroeByIdAsync(id).catch(e => {
            expect(e).toBe('No se pudo encontrar el héroe');
            done();
        })
    })
    
})

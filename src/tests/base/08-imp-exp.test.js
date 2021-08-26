import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Tests in functions heroes', () => {
    test('should return a hero by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    })
    test('should return undefined if hero doesnt exists', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })
    test('should return array of DC Heroes', () => {
        const owner = 'DC';
        const dcHeroes = getHeroesByOwner(owner)
        const expectedHeroes = heroes.filter(h => h.owner === owner);
        expect(dcHeroes).toEqual(expectedHeroes);
    })
    test('should return length of Marvel Heroes array', () => {
        const owner = 'Marvel';
        const marvelHeroes = getHeroesByOwner(owner)
        expect(marvelHeroes.length).toBe(2);
    })
})

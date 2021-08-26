import { getImagen } from "../../base/11-async-await"

describe('async await tests', () => {
    test('should return gif url', async() => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('https://')).toBe(true);
    })
    
})
 
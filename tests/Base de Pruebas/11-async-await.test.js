import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas sobre fetch asincronos a Apis', () => {
   
    test('Prueba GetImagen by id', async () =>
    {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})


// prueba para que falle 
describe('Pruebas sobre fetch asincronos a Apis', () => {
   
    test('Prueba GetImagen by id', async () =>
    {
        const url = await getImagen();
        expect(url).toBe('No se encontro la imagen');
    })
})
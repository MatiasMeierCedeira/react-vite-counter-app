import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba de template string", ()=>
    {
        test('GetSaludo debe retornar "Hola fernando"',()=>
            {
                const nombre = 'Fernando';
                const response = getSaludo(nombre);

                expect(response).toBe(`Hola ${nombre}`);
            })
    })
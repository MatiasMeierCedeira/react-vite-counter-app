import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Prueba de 09 de promesas',()=>
    {
        test('getHeroeByIdAsync de retornar un heroe',async ()=>
            {
                    const id = 2;
                    const heroe = await getHeroeByIdAsync(id);

                    expect(heroe).toEqual({
                        id: 2,
                        name: 'Spiderman',
                        owner: 'Marvel'
                    },)

            })
    })
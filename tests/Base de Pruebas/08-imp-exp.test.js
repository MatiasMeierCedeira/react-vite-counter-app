import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
heroes

describe('Prueba de importacion y exportación',()=>
    {
        test('Debe retornar un hereo por Id',()=>
            {
                const id = 1;
                const hero = getHeroeById(id);

                expect(hero).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },)

            });
    });       


    describe('Prueba de Hereos by owner',()=>
        {
            test('Debe retornar la verdad',()=>
                {
                    const owner = 'DC';
                    const hero = getHeroesByOwner(owner);
    
                    const owner2 = 'Marvel';
                    const hero2 = getHeroesByOwner(owner2 );
                    //mas sencilla
                    expect(hero.length).toEqual(3);
                    //mas minuciosa y mejor
                    expect(hero2 .length).toEqual(heroes.filter((heroe) => heroe.owner === owner2 ).length);
    
                });
        });       
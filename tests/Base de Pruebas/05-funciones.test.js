import { getUser } from "../../src/base-pruebas/05-funciones";

describe(' Prueba en 05 funcione.',()=>
    {
        test('Get User debe de retotnar un Object', ()=>
            {
                const UserTest = 
                {
                    uid: 'ABC123',
                    username: 'El_Papi1502'
                }
                
                const response = getUser();

                expect(response).toEqual(UserTest);
              

            });
    });
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Prueba desestructuracion de objetos.',()=>
    {
        test('Debe retornar un string y un numero',()=>
            {
                  const [string,number]= retornaArreglo()
                 
                  expect(string).toBe('ABC');
                  expect(number).toBe(123);

                   /// validas el tipo de dato
                  ///expect(typeof string).toBe('string');
                  ///expect(typeof number).toBe('number');
            });
    }); 
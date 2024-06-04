test('Prueba de consistencia', ()=>
    {
        //1 ) Inicializacion
        const mensaje1='Hola Mundo';
        //2) Estimulo 
        const mensaje2 = mensaje1.trim();
        // const mensaje2 = 'I am not';
        //3 ) observar el comportamiento
        expect(mensaje1).toBe(mensaje2);


    });

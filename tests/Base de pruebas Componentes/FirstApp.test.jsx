import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp";


    describe('Pruebas First App',()=>
        {
            test('Validación de parametros con snapshot',()=>
                {
                  const title ='Soy el Maty'; 
                  const {container} = render(<FirstApp title = {title} />)
                  expect(container).toMatchSnapshot()

                })

                // Pruebas de snapShot . No son muy recomendables cuando estamos en una etapa de desarrollo. En ambientes mas altos si.
                // Las pruebas siempre tienen que ser lo mas flexible posibles. Se debe evaluar la consistencia de la información para que
                // sea dinamicas las pruebas.
                test('Debemos mostrar el titulo en H1',()=>
                  {
                    const title ='Soy el Maty'; 
                    const {container,getByText,getByTestId} = render(<FirstApp title = {title} />);
                    expect(getByText(title)).toBeTruthy();

                    const h1 = container.querySelector('h1');
                    expect(h1.innerHTML).toContain(title);

                    // prueba con GetTextById
                    expect(getByTestId('test-title')).toContain(title);


                  });


        })
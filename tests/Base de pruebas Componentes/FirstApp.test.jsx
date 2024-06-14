import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp";


    describe('Pruebas First App',()=>
        {
            test('Validación de parametros',()=>
                {
                  const title ='Soy el Maty'; 
                  render(<FirstApp title = {title} />)
                })
        })
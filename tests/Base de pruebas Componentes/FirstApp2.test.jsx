import { render,screen } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp";


    describe('Pruebas First App',()=>
        {

          const title ='Soy el Maty'; 

           test('Should make a match wiht the snapshot',()=>
            {
              render(<FirstApp title = {title} />)
              expect(screen.getByText).toBeTruthy();
            })

            test('Should make a match wiht the H1',()=>
              {
                render(<FirstApp title = {title} />)
                expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
              })

        })
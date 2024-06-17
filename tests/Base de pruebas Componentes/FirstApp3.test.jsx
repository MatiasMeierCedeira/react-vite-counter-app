import { render,screen } from "@testing-library/react"
import { CounterApp } from "../../src/CounterApp";


    describe('Pruebas First App 3',()=>
        {

          const value =10; 

           test('Should make a match wiht the snapshot',()=>
            {
             const {container} = render(<CounterApp Value = {value}/>);
             expect(container).toMatchSnapshot()
          });

          test('Should be hundred',()=>
            {
             render(<CounterApp Value = {100}/>);
             expect(screen.getByText(100).innerHTML).toBeTruthy();
          });

        });
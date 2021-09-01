import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

describe('Tests in <PrimeraApp>', () => {
    // test('should show message "Hola mundito"', () => {
    //     const saludo = "Hola mundito";
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('should show <PrimeraApp/> successfully', () => {
        const saludo = "Hola Yan";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })

    test('should show subtitle sending by props', () => {
        const saludo = "Hola Yan";
        const subtitulo = "Rikito";
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })
    
    
})

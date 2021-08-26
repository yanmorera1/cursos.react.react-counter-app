import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import '@testing-library/jest-dom';

describe('Tests in <PrimeraApp>', () => {
    test('should show message "Hola mundito"', () => {
        const saludo = "Hola mundito";
        const {getByText} = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})

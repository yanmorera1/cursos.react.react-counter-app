import { shallow } from "enzyme"
import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from "../CounterApp";

describe('CounterApp tests', () => {
    let wrapper = shallow(
        <CounterApp />
    );

    beforeEach(() => {
        wrapper = shallow(
            <CounterApp />
        );
    })

    test('should show CounterApp successfully (do match w/ snapshot) and show default values', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should show default value 100', () => {
        const valor = 100;
        const wrapper = shallow(
            <CounterApp value={valor} />
        );
        const text = parseInt(wrapper.find('h2').text().trim())
        expect(text).toBe(valor);
    })
    test('should be increment w/ button +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const text = parseInt(wrapper.find('h2').text().trim());
        expect(text).toBe(11);
    })
    test('should be decrement w/ button -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const text = parseInt(wrapper.find('h2').text().trim());
        expect(text).toBe(9);
    })
    test('should be reset value w/ button reset', () => {
        const wrapper = shallow(
            <CounterApp value={105} />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const text = parseInt(wrapper.find('h2').text().trim());
        
        expect(text).toBe(105);
    })
    
    
})

import React from 'react';
import {shallow} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {   //describe('<p>', () => {
    it('Renders AuralStatus without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders aural update', () => {
        let wrapper = shallow(<AuralStatus auralStatus={'test status'} />);
        expect(wrapper.contains('test status')).toEqual(true);
    })
});
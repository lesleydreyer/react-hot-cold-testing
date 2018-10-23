import React from 'react';
import {shallow} from 'enzyme';//import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders TopNav without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should restart game when clicked', () => {
        const callback = jest.fn();
        //const wrapper = mount(<TopNav onRestartGame={callback} />) ;//onClick={callback} />)
        //wrapper.instance().onRestartGame(true);
        //wrapper.update();
        //wrapper.find('.new').instance();
        //wrapper.simulate('submit');
        const wrapper = shallow(<TopNav onRestartGame={callback} />) ;//onClick={callback} />)
        const link = wrapper.find('.new');
        link.simulate('click',{ preventDefault(){} });
        expect(callback).toHaveBeenCalled();
    })

    it('Should generate aural update when clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find('.status-link');
        link.simulate('click', { preventDefault(){} });
        expect(callback).toHaveBeenCalled();
    })
/*
    it('should render with generateaural.. function', () => {
        const wrapper = shallow(<TopNav />);
        wrapper.instance().onGeneralAuralUpdate(true);
        wrapper.update();
        expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
    });*/

   
});
import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';


describe('<GuessForm />', () => {
    it('Renders GuessForm without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 10;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
      });
    
      it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
      });
   /* it('Should fire the onSubmit callback when form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onSubmit={callback}/>);
        const value = "testsubmit";
        wrapper.instance().onSubmit(true);
        wrapper.update();
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });*/
});

/*describe('<form>', () => {
    it('Renders form without crashing', () => {
        shallow(<form/>);
    });
    it('Renders the input', () => {
        shallow(<input/>);
    });
    it('Renders the button', () => {
        shallow(<button/>);
    });
});*/
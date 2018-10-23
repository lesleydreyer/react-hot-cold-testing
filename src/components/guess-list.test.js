import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';


describe('<GuessList />', () => {
    it('Renders GuessList without crashing', ()=> {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders a list of guesses', () => {
        const values = [10, 24, 52];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
          expect(items.at(index).text()).toEqual(value.toString());
        });
      });
    /*
    const testGuessses = [3, 5];
    const wrapper = shallow((
        <ul>
            <li>{testGuessses[0]}</li>
            <li>{testGuessses[1]}</li>
        </ul>
    ));
    const guesses = wrapper.find('li').map(node=>node.text());
    expect(guesses).toEqual([3,5]);*/

    /*const wrapper = mount(<GuessList guesses={guesses}/>);
    it('Renders GuessForm without crashing', () => {
        expect(wrapper.find('ul').children()).to.have.length(guesses.length);
        expect(wrapper.find('ul').children().find('li')).to.have.length(guesses.length(guesses.length));
        //shallow(<GuessList />);
    });*/
   // it('Renders GuessList without crashing', () => {
     //   shallow(<GuessList />);
    //});

    // it('Renders guessList', () => {
   //     let wrapper = shallow(<GuessList guesses={5} />);
   //     expect(wrapper.contains(5)).toEqual(true);
   // })
});
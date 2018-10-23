import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//This file is run automatically before any tests. 
//It sets up an adaptor, which lets Enzyme know how 
//to work with components made with a specific 
//version of React

Enzyme.configure({adapter: new Adapter()});

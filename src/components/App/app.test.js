import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './index';

describe('<App />', () => {
    it('Should renders the title App component', () => {
        const wrapper = shallow(<App />);
        
        expect(wrapper.find('.accomodations')).to.have.lengthOf(1);
	});
})
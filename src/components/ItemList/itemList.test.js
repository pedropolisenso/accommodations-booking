import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';

import ItemList from './index';

configure({ adapter: new Adapter() });

describe('<ItemList />', () => {
	let units;

	beforeEach(() => {
		units = [
      "quarto",
      "banheiro",
      "cama"
    ];
	})

  it('Should renders the ItemList component', () => {
		const wrapper = shallow(<ItemList units={units} />);
		
    expect(wrapper.find('.subList')).to.have.lengthOf(1);
    expect(wrapper.find('li')).to.have.lengthOf(3);
	});

})

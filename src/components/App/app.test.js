import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';

import App from './index';

configure({ adapter: new Adapter() });

describe('<App />', () => {
	let Propeties;

	beforeEach(() => {
		Propeties = {
			properties: []
		}
	})

  it('Should renders the App component', () => {
		const wrapper = shallow(<App Propeties={Propeties.properties} />);
		
		expect(wrapper.find('.accomodations')).to.have.lengthOf(1);
		expect(wrapper.find('.form')).to.have.lengthOf(1);
		expect(wrapper.find('.itemField')).to.have.lengthOf(2);
		expect(wrapper.find('button')).to.have.lengthOf(1);
	});

	it('should show Warning message when fields are empty', () => {
    const wrapper = shallow(<App Propeties={Propeties.properties} />);

    wrapper.setState({ errorFiled: false });
    wrapper.find('button').simulate('click');

    expect(wrapper.find('.alert-warning')).to.have.lengthOf(1);
    expect(wrapper.find('.alert-warning').text()).to.equal('Please, fill all fields correctly!');
  });
})

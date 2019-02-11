import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';

import MainList from './index';

configure({ adapter: new Adapter() });

describe('<MainList />', () => {
	let Propeties;

	beforeEach(() => {
		Propeties = {
			properties: [
        {
          _id: "5c608a2dd6675b50a7d505aa",
          name: "casa branca",
          units: [
              "quarto",
              "banheiro",
              "cama"
          ]
        },
        {
          _id: "5c60bcb95154bd5d5b41e048",
          name: "casa azul",
          units: [
              "cozinha",
              "cama",
              "banheiro",
              "quintal"
          ]
        }
      ]
		}
	})

  it('Should renders the MainList component', () => {
		const wrapper = shallow(<MainList properties={Propeties.properties} />);
		
    expect(wrapper.find('.list')).to.have.lengthOf(1);
    expect(wrapper.find('.mainList')).to.have.lengthOf(2);
    expect(wrapper.find('button')).to.have.lengthOf(2);
	});

})

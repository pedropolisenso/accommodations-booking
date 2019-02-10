import React from 'react';
import ItemList from '../ItemList';

import { deletePropeties } from '../../actions/propeties'

const MainList = ({properties, dispatch}) => {
  return (
    <ul className="list">
      {properties && properties.map(property => {
        return (
          <li className="mainList" key={property._id}>
            <p>{property.name}</p>
            <ItemList units={property.units} />
            <button
              className="delete-button"
              onClick={() => dispatch(deletePropeties(property._id))}
            >
              DELETE
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default MainList;

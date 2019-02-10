import React from 'react';

const ItemList = ({ units }) => {
  return (
    <ul className="subList">
      {units && units.map((item, i) => {
        return ( <li key={i}>{item}</li> )
      })}
    </ul>
  )
}

export default ItemList;

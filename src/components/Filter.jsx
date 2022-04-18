import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Filter = () => {
  const { setFilterByName } = useContext(AppContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => setFilterByName({ name: value }) }
    />
  );
};

export default Filter;

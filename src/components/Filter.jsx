import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const Filter = () => {
  const {
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(AppContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
        value={ column }
      >
        { filterByNumericValues
          .reduce((filteredArray, currentFilter) => filteredArray
            .filter((columnName) => columnName !== currentFilter.column), columns)
          .map((columnValue) => (
            <option key={ columnValue }>{ columnValue }</option>
          )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
        value={ comparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilterByNumericValues([...filterByNumericValues, {
            column,
            comparison,
            value,
          }]);
        } }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filter;

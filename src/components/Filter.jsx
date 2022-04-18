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

  const newFilters = filterByNumericValues
    .reduce((filteredArray, currentFilter) => filteredArray
      .filter((columnName) => columnName !== currentFilter.column), columns);

  const removeFilter = ({ target }) => {
    setFilterByNumericValues(filterByNumericValues
      .filter((filter) => filter.column !== target.value));
  };

  const removeAllFilters = () => {
    setFilterByNumericValues([]);
  };

  const handleSubmit = () => {
    setFilterByNumericValues([...filterByNumericValues, {
      column,
      comparison,
      value,
    }]);
    setColumn(newFilters[0]);
  };

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
        { newFilters.map((columnValue) => (
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
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover todas filtragems
      </button>
      { filterByNumericValues && (
        filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              value={ filter.column }
              onClick={ removeFilter }
            >
              X
            </button>
          </div>
        ))
      ) }
    </div>
  );
};

export default Filter;

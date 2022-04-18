import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

import tableHeader from '../data/tableHeader';

import '../css/Table.css';

const Table = () => {
  const { data, setData, filterByName, filterByNumericValues } = useContext(AppContext);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then(({ results }) => setData(results));
  });

  const renderTable = (array) => (
    <table className="table">
      <thead>
        <tr>
          { tableHeader.map((element) => (
            <th key={ element }>{ element }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { array.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films.map((film) => film) }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );

  const filterTable = () => {
    const arrayFilteredByName = data
      .filter(({ name }) => name.includes(filterByName.name));
    const arrayFilteredByNumericValues = filterByNumericValues
      .reduce((filteredArray, currentFilter) => filteredArray
        .filter((planet) => {
          switch (currentFilter.comparison) {
          case 'maior que':
            if (Number(planet[currentFilter.column])
            > Number(currentFilter.value)) return true;
            break;
          case 'menor que':
            if (Number(planet[currentFilter.column])
            < Number(currentFilter.value)) return true;
            break;
          case 'igual a':
            if (Number(planet[currentFilter.column])
            === Number(currentFilter.value)) return true;
            break;
          default:
            return false;
          }
          return null;
        }), arrayFilteredByName);
    return renderTable(arrayFilteredByNumericValues);
  };

  return (
    <div>
      { filterTable() }
    </div>
  );
};

export default Table;

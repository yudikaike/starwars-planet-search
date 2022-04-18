import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

import tableHeader from '../data/tableHeader';

import '../css/Table.css';

const Table = () => {
  const { data, setData } = useContext(AppContext);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(({ results }) => setData(results));
  }, [setData]);

  const renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          { tableHeader.map((element) => (
            <th key={ element }>{ element }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
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

  return (
    <div>{ renderTable() }</div>
  );
};

export default Table;

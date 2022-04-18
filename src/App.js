import React, { useState } from 'react';
import './App.css';

import AppContext from './context/AppContext';

import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const contextValue = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <Filter />
      <Table />
    </AppContext.Provider>
  );
}

export default App;

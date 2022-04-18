import React, { useState } from 'react';
import './App.css';

import AppContext from './context/AppContext';

import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <Table />
    </AppContext.Provider>
  );
}

export default App;

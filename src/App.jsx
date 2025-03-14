import { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {});

  return (
    <>
      <SearchBar onSubmit={inputValue} />
    </>
  );
}

export default App;

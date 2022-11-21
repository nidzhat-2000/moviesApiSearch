import React from 'react';
import { useGlobalContext } from './context';
import { BsSearch } from 'react-icons/bs';

function SearchForm() {
  const { searchVal, setSearchVal } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <h2>Search your Movie:</h2>
      <div className="search-coms">
        <input
          type="text"
          className="input-box"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
        />
        <button className="btn" type="submit">
          <BsSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

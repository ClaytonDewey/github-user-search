import { useState } from 'react';
import styled from 'styled-components';

const SearchBarStyles = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  input {
    background-color: var(--clr-dark-blue);
    color: var(--white);
    border-radius: var(--bdr-rds);
    border: none;
    height: 6.9rem;
    width: 100%;
    padding-left: 7.5rem;
    background-image: url('./icon-search.svg');
    background-repeat: no-repeat;
    background-position: 2.5rem 50%;
  }
  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: var(--clr-primary);
    color: var(--white);
    border: none;
    border-radius: var(--bdr-rds);
    height: 5rem;
    width: 10.6rem;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: var(--clr-lt-blue);
    }
  }
  .error {
    color: red;
    position: absolute;
    right: 15rem;
    top: 35%;
  }
`;

const SearchBar = ({ search, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm);
  };

  return (
    <SearchBarStyles onSubmit={handleSubmit}>
      <input
        type='search'
        onChange={handleChange}
        placeholder='Search GitHub username...'
      />
      {error && <p className='error'>No results</p>}
      <button type='submit'>Search</button>
    </SearchBarStyles>
  );
};

export default SearchBar;

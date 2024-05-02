import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../svg';

const SearchBarStyles = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  input {
    background-color: ${({ theme }) => theme.boxBackground};
    color: var(--clr-faded-white);
    border-radius: var(--bdr-rds);
    border: none;
    height: 6rem;
    width: 100%;
    padding-left: 5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  svg {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
  }
  button {
    position: absolute;
    right: 1rem;
    top: 7px;
    background-color: var(--clr-primary);
    color: var(--white);
    border: none;
    border-radius: var(--bdr-rds);
    height: 4.6rem;
    width: 8.4rem;
    transition: background-color 0.25s ease-in-out;

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

  @media screen and (min-width: 64em) {
    input {
      height: 6.9rem;
      padding-left: 7.5rem;
    }
    svg {
      left: 2.5rem;
    }
    button {
      top: 1rem;
      height: 5rem;
      width: 10.6rem;
    }
  }
`;

const SearchBar = ({ search, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    const name = e.target.value.replaceAll(' ', '');
    setSearchTerm(name);
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
      <Icon name='search' />
      {error && <p className='error'>No results</p>}
      <button type='submit'>Search</button>
    </SearchBarStyles>
  );
};

export default SearchBar;

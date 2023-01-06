import { useState } from "react";
import styled from "styled-components";

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
  }
`;

const SearchBar = ({ search, userName }) => {
  const [searchTerm,setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    search(searchTerm);
  }

  return (
    <SearchBarStyles onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} placeholder="Search GitHub username..." />
      <button type="submit">Search</button>
    </SearchBarStyles>
  );
};

export default SearchBar;

import styled from "styled-components";

const SearchBarStyles = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  input {
    background-color: var(--clr-dark-blue);
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
  }
`;

const SearchBar = () => {
  return (
    <SearchBarStyles>
      <input type="search" placeholder="Search GitHub username..." />
      <button type="button">Search</button>
    </SearchBarStyles>
  );
};

export default SearchBar;

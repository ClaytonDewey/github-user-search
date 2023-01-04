import styled from "styled-components";
import SearchBar from "./SearchBar";

const AppStyles = styled.div`
  max-width: 73rem;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <AppStyles>
      <h1>devfinder</h1>

      <p>Light</p>
      <p>Dark</p>

      <SearchBar />
    </AppStyles>
  );
};

export default App;

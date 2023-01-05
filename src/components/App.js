import styled from "styled-components";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

const AppStyles = styled.div`
  max-width: 73rem;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  /* let search - document.getElementById("search").value
  * let orginalName = search.split(" ").join("")
  https://www.youtube.com/watch?v=LO74qEfPfI8
  */
  const user = fetch(`https://api.github.com/users/ClaytonDewey`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((err) => console.error(err));
  console.log(user);
  return (
    <AppStyles>
      <h1>devfinder</h1>

      <p>Light</p>
      <p>Dark</p>

      <SearchBar />
      <UserCard />
    </AppStyles>
  );
};

export default App;

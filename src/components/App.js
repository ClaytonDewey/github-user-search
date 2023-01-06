import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import UserCard from './UserCard';

const AppStyles = styled.div`
  max-width: 73rem;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  const apiUrl = 'https://api.github.com/users/';
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('octocat');
  const [user, setUser] = useState({});

  const search = (user) => {
    fetch(`${apiUrl}${user}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setError(false);
          setUser(data);
        } else {
          setError(true);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    search(userName);
  }, [userName]);

  const updateUser = (user) => {
    setUserName(user);
  };

  return (
    <AppStyles>
      <h1>devfinder</h1>

      <p>Light</p>
      <p>Dark</p>

      <SearchBar
        updateUser={updateUser}
        search={search}
        userName={userName}
        error={error}
      />
      <UserCard user={user} />
    </AppStyles>
  );
};

export default App;

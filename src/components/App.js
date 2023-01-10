import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SearchBar from './SearchBar';
import UserCard from './UserCard';

const AppStyles = styled.div`
  width: 73rem;
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
      <Header />

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

import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from './theme/useDarkMode';
import { lightTheme, darkTheme } from './theme/Themes';
import Header from './Header';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import { GlobalStyles } from './theme/GlobalStyles';

const AppStyles = styled.div`
  width: 73rem;
  margin-left: auto;
  margin-right: auto;
`;

export const GridStyles = styled.div.attrs((props) => ({
  gtc: props.gtc || '1fr 1fr',
  gtr: props.gtr || '',
  gcg: props.gcg || '0',
  grg: props.grg || '0',
}))`
  display: grid;
  grid-template-columns: ${(props) => props.gtc};
  grid-template-rows: ${(props) => props.gtr};
  grid-column-gap: ${(props) => props.gcg};
  grid-row-gap: ${(props) => props.grg};
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
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppStyles>
        <Header theme={theme} themeToggler={themeToggler} />

        <SearchBar
          updateUser={updateUser}
          search={search}
          userName={userName}
          error={error}
        />
        <UserCard user={user} />
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;

import styled from 'styled-components';
import { useDarkMode } from './theme/useDarkMode';
import { lightTheme, darkTheme } from './theme/Themes';
import Toggle from './theme/Toggler';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;

  p {
    /* color: var(--clr-blue-gray); */
  }
  svg {
    vertical-align: text-bottom;
    /* fill: var(--clr-blue-gray); */
  }
`;

const Header = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <HeaderStyled>
      <h1>devfinder</h1>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      {/* <p>
        Light <Icon name='sun' />
      </p> */}
      {/* <p>
        Dark <Icon name='moon' />
      </p> */}
    </HeaderStyled>
  );
};

export default Header;

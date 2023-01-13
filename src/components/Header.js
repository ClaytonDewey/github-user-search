import styled from 'styled-components';
import Toggle from './theme/Toggler';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;

  svg {
    vertical-align: text-bottom;
  }
`;

const Header = ({ theme, themeToggler, themeText }) => {
  return (
    <HeaderStyled>
      <h1>devfinder</h1>
      <Toggle theme={theme} toggleTheme={themeToggler} themeText={themeText} />
    </HeaderStyled>
  );
};

export default Header;

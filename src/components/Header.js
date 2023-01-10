import styled from 'styled-components';
import { Icon } from '../svg';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  p {
    color: var(--clr-blue-gray);
  }
  svg {
    vertical-align: text-bottom;
    fill: var(--clr-blue-gray);
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>devfinder</h1>
      <p>
        Light <Icon name='sun' />
      </p>
      {/* <p>
        Dark <Icon name='moon' />
      </p> */}
    </HeaderStyled>
  );
};

export default Header;

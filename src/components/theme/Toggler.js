import styled from 'styled-components';
import { Icon } from '../../svg';
const TogglerStyled = styled.div`
  input {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  label {
    &:hover {
      cursor: pointer;
    }
  }

  svg {
    fill: ${({ theme }) => theme.icon};
  }
`;

const Toggle = ({ theme, toggleTheme, themeText }) => {
  return (
    <TogglerStyled>
      <div className='toggle-container'>
        <label htmlFor='mode' className='label'>
          <span>{themeText} </span>
          {theme === 'light' ? <Icon name='moon' /> : <Icon name='sun' />}
          <input
            type='checkbox'
            id='mode'
            className={`toggle ${theme}`}
            onChange={toggleTheme}
          />
        </label>
      </div>
    </TogglerStyled>
  );
};

export default Toggle;

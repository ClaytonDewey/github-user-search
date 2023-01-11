import styled from 'styled-components';
import { Icon } from '../../svg';
const TogglerStyled = styled.div`
  input {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <TogglerStyled>
      <div className='toggle-container'>
        <label htmlFor='mode' className='label'>
          <span>{theme} </span>
          {theme === 'light' ? <Icon name='sun' /> : <Icon name='moon' />}
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

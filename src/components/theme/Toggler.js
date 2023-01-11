import { Icon } from '../../svg';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <Icon name='sun' />
      <div className='toggle-container'>
        <input
          type='checkbox'
          id='mode'
          className={`toggle ${theme}`}
          onChange={toggleTheme}
        />
        <label htmlFor='mode' className='label'>
          <div className='ball'></div>
        </label>
        {/* <span>{theme} Mode </span> */}
      </div>
      <Icon name='moon' />
    </>
  );
};

export default Toggle;

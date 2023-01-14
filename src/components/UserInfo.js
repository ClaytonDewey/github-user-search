import styled from 'styled-components';
import { GridStyles } from './App';

const UserInfoStyles = styled.div`
  margin-bottom: 3rem;

  img {
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    float: left;
  }

  @media screen and (min-width: 64em) {
    img {
      height: 11.7rem;
      width: 11.7rem;
    }
  }
`;

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <GridStyles>
        <div>
          <img src={user.avatar_url} alt='avatar' />
          {user.name ? <h2>{user.name}</h2> : <h2>Not Available</h2>}
          <h3>
            <a href={user.html_url} target='_blank' rel='noreferrer'>
              @{user.login}
            </a>
          </h3>
          <p>Joined {joinedDate}</p>
        </div>
      </GridStyles>
      {!user.bio ? <p>This profile has no bio</p> : <p>{user.bio}</p>}
    </UserInfoStyles>
  );
};

export default UserInfo;

import styled from 'styled-components';
import { GridStyles } from './App';

const UserInfoStyles = styled.div`
  margin-bottom: 3rem;
  a {
    display: inline-block;
    margin-bottom: 3rem;
  }
`;

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <GridStyles>
        <div>
          {user.name ? <h2>{user.name}</h2> : <h2>Not Available</h2>}
          <a href={user.html_url} target='_blank' rel='noreferrer'>
            @{user.login}
          </a>
        </div>
        <p>Joined {joinedDate}</p>
      </GridStyles>
      {!user.bio ? <p>No user bio</p> : <p>{user.bio}</p>}
    </UserInfoStyles>
  );
};

export default UserInfo;

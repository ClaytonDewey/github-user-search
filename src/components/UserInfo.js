import styled from 'styled-components';

const UserInfoStyles = styled.div``;

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <h2>{user.name}</h2>
      <a href={user.html_url} target='_blank' rel='noreferrer'>
        @{user.login}
      </a>
      <p>Joined {joinedDate}</p>
      {!user.bio ? <p>No user bio</p> : <p>{user.bio}</p>}
    </UserInfoStyles>
  );
};

export default UserInfo;

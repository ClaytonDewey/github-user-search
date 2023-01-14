import styled from 'styled-components';

const UserInfoStyles = styled.div`
  margin-bottom: 3rem;
  .bio {
    margin-block: 3rem;
  }
`;

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <div>
        {user.name ? <h2>{user.name}</h2> : <h2>Not Available</h2>}
        <h3>
          <a href={user.html_url} target='_blank' rel='noreferrer'>
            @{user.login}
          </a>
        </h3>
        <p>Joined {joinedDate}</p>
      </div>
      {!user.bio ? (
        <p className='bio'>This profile has no bio</p>
      ) : (
        <p className='bio'>{user.bio}</p>
      )}
    </UserInfoStyles>
  );
};

export default UserInfo;

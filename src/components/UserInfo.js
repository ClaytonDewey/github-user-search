import styled from 'styled-components';

const UserInfoStyles = styled.div`
  margin-bottom: 3rem;
  .bio {
    margin-block: 3rem;
  }
`;

const InfoHeader = styled.header`
  @media screen and (min-width: 36em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    p {
      text-align: right;
    }

    h1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    h2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    p {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <InfoHeader>
        {user.name ? <h1>{user.name}</h1> : <h1>Not Available</h1>}
        <h2>
          <a href={user.html_url} target='_blank' rel='noreferrer'>
            @{user.login}
          </a>
        </h2>
        <p>Joined {joinedDate}</p>
      </InfoHeader>
      {!user.bio ? (
        // <p className='bio'>This profile has no bio</p>
        <p className='bio'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      ) : (
        <p className='bio'>{user.bio}</p>
      )}
    </UserInfoStyles>
  );
};

export default UserInfo;

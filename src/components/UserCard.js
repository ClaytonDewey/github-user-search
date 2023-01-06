import styled from 'styled-components';
import UserInfo from './UserInfo';

const UserCardStyles = styled.div`
  background-color: var(--clr-dark-blue);
  border-radius: var(--bdr-rds);
  padding: 4rem;

  img {
    border-radius: 50%;
    height: 11.7rem;
    width: 11.7rem;
  }
`;

const UserCard = ({ user }) => {
  const joinedDate = new Date(Date.parse(user.created_at))
    .toLocaleDateString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .replace(',', ' ');

  return (
    <UserCardStyles>
      <UserInfo user={user} joinedDate={joinedDate} />

      {/* <p>Repos</p>
      <p>Followers</p>
      <p>Following</p> */}
    </UserCardStyles>
  );
};

export default UserCard;

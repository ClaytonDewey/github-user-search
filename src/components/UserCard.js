import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

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

      <UserStats user={user} />
    </UserCardStyles>
  );
};

export default UserCard;

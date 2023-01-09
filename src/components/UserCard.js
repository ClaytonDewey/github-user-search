import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

const UserCardStyles = styled.div`
  background-color: var(--clr-dark-blue);
  border-radius: var(--bdr-rds);
  padding: 4rem;

  .faded {
    color: var(--clr-faded-white);
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

      <UserLinks user={user} linkType='location' />
      <UserLinks user={user} linkType='twitter' />
      <UserLinks user={user} linkType='website' />
      <UserLinks user={user} linkType='company' />
    </UserCardStyles>
  );
};

export default UserCard;

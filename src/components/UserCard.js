import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

const UserCardStyles = styled.div`
  background-color: var(--clr-dark-blue);
  border-radius: var(--bdr-rds);
  padding: 4rem;
`;

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

      <GridStyles>
        <UserLinks user={user} linkType='location' />
        <UserLinks user={user} linkType='twitter' />
        <UserLinks user={user} linkType='website' />
        <UserLinks user={user} linkType='company' />
      </GridStyles>
    </UserCardStyles>
  );
};

export default UserCard;

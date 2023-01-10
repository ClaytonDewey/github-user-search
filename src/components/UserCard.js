import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
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
  const links = ['location', 'website', 'twitter', 'company'];

  return (
    <UserCardStyles>
      <img src={user.avatar_url} alt='avatar' />

      <div>
        <UserInfo user={user} joinedDate={joinedDate} />

        <UserStats user={user} />

        <GridStyles>
          {links.map((link) => {
            return <UserLinks user={user} linkType={link} />;
          })}
        </GridStyles>
      </div>
    </UserCardStyles>
  );
};

export default UserCard;

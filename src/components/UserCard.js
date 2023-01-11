import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';
import { GridStyles } from './App';

const UserCardStyles = styled.div`
  background-color: ${({ theme }) => theme.boxBackground};
  /* color: #4b6a9b; */
  border-radius: var(--bdr-rds);
  padding: 4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  const links = ['location', 'website', 'twitter', 'company'];

  return (
    <UserCardStyles>
      <img src={user.avatar_url} alt='avatar' />

      <div>
        <UserInfo user={user} joinedDate={joinedDate} />

        <UserStats user={user} />

        <GridStyles
          gtc='repeat(2, 1fr)'
          gtr='repeat(2, 1fr)'
          gcg='2rem'
          grg='1rem'
        >
          {links.map((link, idx) => {
            return (
              <UserLinks
                key={idx}
                idx={`div${idx + 1}`}
                user={user}
                linkType={link}
              />
            );
          })}
        </GridStyles>
      </div>
    </UserCardStyles>
  );
};

export default UserCard;

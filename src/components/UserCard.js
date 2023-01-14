import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';
import { GridStyles } from './App';

const UserCardStyles = styled.div`
  background-color: ${({ theme }) => theme.boxBackground};
  border-radius: var(--bdr-rds);
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  img {
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    float: left;
    margin-right: 2rem;
  }

  @media screen and (min-width: 64em) {
    img {
      border-radius: 50%;
      height: 11.7rem;
      width: 11.7rem;
    }
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
      <div>
        <img src={user.avatar_url} alt='avatar' />

        <UserInfo user={user} joinedDate={joinedDate} />

        <UserStats user={user} />

        <GridStyles>
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

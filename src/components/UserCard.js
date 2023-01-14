import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

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
    display: grid;
    gap: 3rem;
    grid-template-columns: auto 1fr;
    padding: 4rem;

    img {
      border-radius: 50%;
      height: 11.7rem;
      width: 11.7rem;
      float: none;
    }
  }
`;

const UserCardGridStyles = styled.div`
  @media screen and (min-width: 36em) {
    display: grid;
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

        <UserCardGridStyles>
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
        </UserCardGridStyles>
      </div>
    </UserCardStyles>
  );
};

export default UserCard;

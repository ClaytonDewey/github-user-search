import styled from 'styled-components';

const UserStatsStyled = styled.div`
  background-color: var(--clr-dark);
  border-radius: var(--bdr-rds);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  div {
    display: inline;
    span {
      display: block;
      font-size: var(--fs-lg);
      font-weight: var(--fw-bold);
    }
  }
`;

const UserStats = ({ user }) => {
  return (
    <UserStatsStyled>
      <div>
        Repos
        <span>{user.public_repos}</span>
      </div>
      <div>
        Followers
        <span>{user.followers}</span>
      </div>
      <div>
        Following
        <span>{user.following}</span>
      </div>
    </UserStatsStyled>
  );
};

export default UserStats;

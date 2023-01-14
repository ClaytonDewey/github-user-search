import styled from 'styled-components';

const UserStatsStyled = styled.div`
  background-color: ${({ theme }) => theme.statsBg};
  border-radius: var(--bdr-rds);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  margin-bottom: 2rem;
  height: 8.5rem;
  div {
    display: inline;
    text-align: center;
    /* border: 1px solid; */
    font-size: 1.1rem;
    span {
      display: block;
      font-size: var(--fs-md);
      font-weight: var(--fw-bold);
    }
  }

  @media screen and (min-width: 40em) {
    div {
      font-size: var(--fs-xsm);
      span {
        font-size: var(--fs-lg);
      }
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

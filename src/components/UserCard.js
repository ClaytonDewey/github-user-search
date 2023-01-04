import styled from "styled-components";

const UserCardStyles = styled.div`
  background-color: var(--clr-dark-blue);
  border-radius: var(--bdr-rds);
`;

const UserCard = () => {
  return (
    <UserCardStyles>
      <h2>The Octocat</h2>
      <p>Joined 25 Jan 2011</p>

      <p>Repos</p>
      <p>Followers</p>
      <p>Following</p>
    </UserCardStyles>
  );
};

export default UserCard;

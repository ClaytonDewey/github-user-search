import styled from "styled-components";

const UserInfoStyles = styled.div`
  /* background-color: rebeccapurple;
  border-radius: 15px; */
`

const UserInfo = ({ user, joinedDate }) => {
  return (
    <UserInfoStyles>
      <img src={user.avatar_url} alt='avatar' />
      <h2>{user.name}</h2>
      <a href={user.html_url}>@{user.login}</a>
      <p>Joined {joinedDate}</p>
      {!user.bio ? <p>No user bio</p> : <p>{user.bio}</p>}
    </UserInfoStyles>
  );
}

export default UserInfo;
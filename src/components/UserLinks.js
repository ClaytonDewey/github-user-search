import styled from 'styled-components';
import { Icon } from '../svg';

const UserLinksStyled = styled.div`
  background-color: transparent;
  color: var(--white);
  svg {
    fill: var(--white);
  }
`;
const UserLinks = ({ user, linkType }) => {
  let link;
  switch (linkType) {
    case 'location':
      link = user.location;
      break;
    case 'twitter':
      link = user.twitter_username;
      break;
    case 'website':
      link = user.blog;
      break;
    case 'company':
      link = user.company;
      break;
    default:
      link = user.blog;
  }
  return (
    <UserLinksStyled>
      <div>
        <Icon name={linkType} />
        {link ? <>{link}</> : 'Not Available'}
      </div>
    </UserLinksStyled>
  );
};

export default UserLinks;

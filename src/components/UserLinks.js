import styled from 'styled-components';
import { Icon } from '../svg';

const UserLinksStyled = styled.div`
  background-color: transparent;
  color: var(--white);
  margin-bottom: 1rem;
  gap: 0 2rem;
  overflow: hidden;
  a {
    color: var(--white);
  }

  svg {
    margin-right: 2rem;
    fill: var(--white);
    vertical-align: text-bottom;
  }

  &.faded {
    color: var(--clr-faded-white);

    svg {
      fill: var(--clr-faded-white);
    }
  }
  div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  &.div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  &.div3 {
    grid-area: 1 / 2 / 2 / 3;
  }
  &.div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
`;
const UserLinks = ({ user, linkType, idx }) => {
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
    <UserLinksStyled className={!link ? `faded ${idx}` : `${idx}`}>
      <div>
        <Icon name={linkType} />
        {linkType === 'twitter' ? (
          link ? (
            <a
              href={`https://twitter.com/${link}`}
              target='_blank'
              rel='noreferrer'
            >
              {link}
            </a>
          ) : (
            'Not Available'
          )
        ) : linkType === 'website' ? (
          link ? (
            <a href={`https://${link}`} target='_blank' rel='noreferrer'>
              {link}
            </a>
          ) : (
            'Not Available'
          )
        ) : link ? (
          <>{link}</>
        ) : (
          'Not Available'
        )}
      </div>
    </UserLinksStyled>
  );
};

export default UserLinks;

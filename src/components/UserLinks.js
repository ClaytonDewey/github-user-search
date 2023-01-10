import styled from 'styled-components';
import { Icon } from '../svg';

const UserLinksStyled = styled.div`
  background-color: transparent;
  color: var(--white);
  margin-bottom: 1rem;

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
    <UserLinksStyled className={!link ? 'faded' : ''}>
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

import {
  IconCompany,
  IconLocation,
  IconMoon,
  IconSearch,
  IconSun,
  IconTwitter,
  IconWebsite,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'company':
      return <IconCompany />;
    case 'location':
      return <IconLocation />;
    case 'moon':
      return <IconMoon />;
    case 'search':
      return <IconSearch />;
    case 'sun':
      return <IconSun />;
    case 'twitter':
      return <IconTwitter />;
    case 'website':
      return <IconWebsite />;
    default:
      return <IconCompany />;
  }
};

export default Icon;

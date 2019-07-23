export function youtube(theme) {
  return {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCYBatsSWrbry90KGpTX2PAw',
    icon: theme.social_icons.youtube
  };
};

export function instagram(theme) {
  return {
    name: 'Instagram',
    url: 'https://www.instagram.com/tdpbilkent/',
    icon: theme.social_icons.instagram
  };
};

export function twitter(theme) {
  return {
    name: 'Twitter',
    url: 'https://twitter.com/TDPBilkent',
    icon: theme.social_icons.twitter
  };
};

export function linkedin(theme) {
  return {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/toplumsalduyarlilikprojeleri',
    icon: theme.social_icons.linkedin
  };
};

export function all(theme) {
  return [youtube(theme), instagram(theme), twitter(theme), linkedin(theme)];
};

export default all;

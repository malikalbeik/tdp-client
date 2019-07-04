export const homeLink = {
  name: 'Home',
  title: 'Home',
  url: '/',
  documentTitle: 'TDP | Sorunun Değil Çözümün Parçası'
};

export const blogLink = {
  name: 'Blog',
  title: 'Latest Posts',
  url: '/blog',
  documentTitle: `Blog | TDP`
};

export function blogPostLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `/blog/${p.slug}`,
    documentTitle: `${p.title} | TDP`};
};

export const projectLink = {
  name: 'Projects',
  title: 'Our Projects',
  url: '/projects',
  documentTitle: `Projects | TDP`
};

export function projectsPageLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `/project/${p.id}`,
    documentTitle: `${p.title} | TDP`
  };
};

export const aboutLink = {
  name: 'About',
  title: 'About Us',
  url: '/about',
  documentTitle: `About | TDP`
};

export const navbarLinks = [blogLink, projectLink, aboutLink];
export const footerLinks = [blogLink, projectLink, aboutLink];

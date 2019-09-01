export const homeLink = {
  name: 'ANA SAYFA',
  title: 'ANA SAYFA',
  url: '/',
  documentTitle: 'TDP | Sorunun Değil Çözümün Parçası'
};

export const blogLink = {
  name: 'Blog',
  title: 'Son Gönderilerimiz',
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
  name: 'Projelerimiz',
  title: 'Projelerimiz',
  url: '/projects',
  documentTitle: `Projelerimiz | TDP`
};

export function projectsPageLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `/projects/${p.title}`,
    documentTitle: `${p.title} | TDP`
  };
};

export const aboutLink = {
  name: 'Hakkımızda',
  title: 'Hakkımızda',
  url: '/about',
  documentTitle: `Hakkımızda | TDP`
};

export const navbarLinks = [homeLink, blogLink, projectLink, aboutLink];

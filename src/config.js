module.exports = {
  siteTitle: 'Ilyas Mouhssin',
  siteDescription:
    'Ilyas Mouhssin is a cybersecurity enthusiast based in Morocco, passionate about securing systems, memory manipulation, and defending against cyber threats',
  siteKeywords:
    'Ilyas Mouhssin, cybersecurity, memory manipulation, red team, defensive security, developer, python, javascript, penetration testing, ethical hacking, security research, um6p, morocco',
  siteUrl: 'https://github.com/xyntha0/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ilyas Mouhssin',
  location: 'Rabat, Morocco',
  email: 'imouhssin@outlook.com',
  github: 'https://github.com/xyntha0/',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/xyntha0',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ilyas-mouhssin/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mouhssin_ilyas',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

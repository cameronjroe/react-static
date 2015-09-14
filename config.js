var config = {
  title: 'STUNN',
  routes: [
    '/',
    '/about',
    {
      path: '/not-found',
      output: '404.html'
    }
  ]
};

module.exports = config;
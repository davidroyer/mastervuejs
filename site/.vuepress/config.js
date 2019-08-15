const Auth = require('vuepress-auth0');
console.log("TCL: Auth", Auth)

module.exports = {
  // the rest of your config goes here
  title: 'Master Vue.js',
  nav: [
    {
      text: 'Home',
      link: '/',
      meta: {
        auth: true                                        // The meta tag is required to let the plugin know you want to secure this nav route.
      }
    },
    // rest of your nav config goes here
  ],
//   plugins: [
//     [Auth, {
//       domain: 'droyer.auth0.com',                        // Substitute your actual Auth0 domain.  Custom domains should work as well
//       redirectUri: 'http://localhost:8080/callback.html',     // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
//       clientID: 'QBPom6WU5rs5hcrST6Og4mq2JI6ZM4YG',          // Substitute your actual Client Id
//     }],
//   ]
}
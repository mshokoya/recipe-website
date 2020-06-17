const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  target: 'serverless',
  env: {
    APIURL: process.env.APIURL,
    APIKEY: process.env.APIKEY,
    PROJECTID: process.env.PROJECTID,
    BRANCH: process.env.BRANCH,
    CDNBASE: process.env.CDNBASE,
    GRAPHCMSID: process.env.GRAPHCMSID,
    GRAPHCMSURL: process.env.GRAPHCMSURL,
  },
});

// const withCSS = require('@zeit/next-css');
// require('dotenv').config();

// const {
//   GRAPHCMSID,
//   GRAPHCMSURL,
//   APIURL,
//   APIKEY,
//   PROJECTID,
//   BRANCH,
//   CDNBASE,
//   domain,
//   clientId,
//   clientSecret,
//   scope,
//   redirectUri,
//   postLogoutRedirectUri,
//   cookieSecret,
// } = process.env

// module.exports = withCSS({
//   publicRuntimeConfig: {
//     graphcms: {
//       GRAPHCMSID,
//       GRAPHCMSURL,
//       APIURL,
//       APIKEY,
//       PROJECTID,
//       BRANCH,
//       CDNBASE
//     }
//   },
//   serverRuntimeConfig: {
//     auth: {
//       domain,
//       clientId,
//       clientSecret,
//       scope,
//       redirectUri,
//       postLogoutRedirectUri,
//     },
//     cookieSecret
//   }
// });
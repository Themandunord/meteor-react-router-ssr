import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'react': '15.x',
  'react-dom': '15.x',
  'react-router': '3.x'
}, 'jconley:react-router-ssr');

if (Meteor.isClient) {
  ReactRouterSSR = require('./client/client.jsx').default;
} else {
  ReactRouterSSR = require('./server/server.jsx').default;
}

require('./app.css');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import httpprovider from './http-providers';
import books from './books';

angular.module('segger-library', [uirouter, httpprovider, books])
      .config(routes)
      .config(httpprovider);

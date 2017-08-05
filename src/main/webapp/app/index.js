import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import books from './books';

angular.module('segger-library', [uirouter, books])
      .config(routes);

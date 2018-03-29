import config from './config.js';
import 'angular-route';
import 'angular-resource';

angular.module('jlg-route', ['ngRoute', 'ngResource'])
    .config(config);
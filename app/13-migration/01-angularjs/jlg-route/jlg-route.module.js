import config from './config.js';
import 'angular-route';

angular.module('jlg-route', ['ngRoute'])
    .config(config);
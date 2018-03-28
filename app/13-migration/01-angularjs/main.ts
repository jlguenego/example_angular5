import angular from 'angular';
import './jlg-layout/jlg-layout.js';
import './jlg-route/jlg-route.module.js';

import './style.scss';

const app = angular.module('main', ['jlg-layout', 'jlg-route']);

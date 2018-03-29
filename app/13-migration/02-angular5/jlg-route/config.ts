import homeHtml from './tmpl/home.html';
import {
    HomeCtrl
} from './Home.controller.js';

const config = ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: homeHtml,
            controller: HomeCtrl,
            controllerAs: '$ctrl',
        })
        .when('/about', {
            templateUrl: './jlg-route/tmpl/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}];
export default config;
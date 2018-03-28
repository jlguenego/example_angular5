import homeHtml from './tmpl/home.html';

const config = ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: homeHtml,
        })
        .when('/about', {
            templateUrl: './jlg-route/tmpl/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}];
export default config;

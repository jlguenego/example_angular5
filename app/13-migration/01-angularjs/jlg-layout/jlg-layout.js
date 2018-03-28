(function() {
    var app = angular.module('jlg-layout', []);

    app.directive('jlgHeader', function() {
        return {
            templateUrl: './jlg-layout/tmpl/header.html',
        };
    });
})();
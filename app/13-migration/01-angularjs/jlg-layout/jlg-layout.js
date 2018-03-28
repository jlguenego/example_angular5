import footerHtml from './tmpl/footer.html';

(function () {
    var app = angular.module('jlg-layout', []);

    app.directive('jlgHeader', function () {
        return {
            templateUrl: './jlg-layout/tmpl/header.html',
        };
    });

    app.component('jlgBody', {
        templateUrl: './jlg-layout/tmpl/body.html',
    });

    app.component('jlgFooter', {
        template: footerHtml,
    });
})();
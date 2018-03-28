const app = angular.module('jlg-misc', []);

app.directive('jlgClickAndDisable', function () {
    return {
        scope: {
            jlgClickAndDisable: '&'
        },
        controller: function ($scope, $element) {
            $element.bind('click', function () {
                console.log('disable the button');
                $element.prop('disabled', true);
                $scope.jlgClickAndDisable().finally(function () {
                    $element.prop('disabled', false);
                })
            });
        }
    };
});
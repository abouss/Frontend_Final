app.controller('MainController', function ($scope, Homework) {
    //$scope.flashCards = whateverName;
    //console.log(FlashCardsFactory.getFlashCards());

    $scope.assignments = Homework;


    $scope.moreInfo= function (assignment) {
        assignment.show = correct;
    };

});
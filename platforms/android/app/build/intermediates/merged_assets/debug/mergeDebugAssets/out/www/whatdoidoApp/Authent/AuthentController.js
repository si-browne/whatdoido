angular.module("AuthentModule").controller("AuthentController", function ($scope, $http, $window) {

    // *** VARIABLE DEFINITIONS - menu *** //
    $scope.showHome = true;
    $scope.showClaimAdmin = false;
    $scope.showPeopleAdmin = false;
    $scope.showProfile = false;
    $scope.showClaim = false;
    $scope.showHelp = false;

    // *** VARIABLE DEFINITIONS - claim start logic *** //
    $scope.hasregistered = false;

    // *** CONTROLLER/DIV SHOW AND HIDE LOGIC *** //
    // *** REMEMBER! KEEP FUNCTION NAME DIFFERENT THAN VARIABLES!! *** //
    $scope.showHom = function () {
        $scope.showHome = true;
        $scope.showClaimAdmin = false;
        $scope.showPeopleAdmin = false;
        $scope.showProfile = false;
        $scope.showClaim = false;
        $scope.showHelp = false;
    };

    $scope.showCladmin = function () {
        $scope.showHome = false;
        $scope.showClaimAdmin = true;
        $scope.showPeopleAdmin = false;
        $scope.showProfile = false;
        $scope.showClaim = false;
        $scope.showHelp = false;
    };

    $scope.showPeop = function () {
        $scope.showHome = false;
        $scope.showClaimAdmin = false;
        $scope.showPeopleAdmin = true;
        $scope.showProfile = false;
        $scope.showClaim = false;
        $scope.showHelp = false;
    };

    $scope.showPro = function () {
        $scope.showHome = false;
        $scope.showClaimAdmin = false;
        $scope.showPeopleAdmin = false;
        $scope.showProfile = true;
        $scope.showClaim = false;
        $scope.showHelp = false;

    };

    $scope.showClm = function () {
        $scope.showHome = false;
        $scope.showClaimAdmin = false;
        $scope.showPeopleAdmin = false;
        $scope.showProfile = false;
        $scope.showClaim = true;
        $scope.showHelp = false;
    };

    $scope.showHlp = function () {
      $scope.showHome = false;
      $scope.showClaimAdmin = false;
      $scope.showPeopleAdmin = false;
      $scope.showProfile = false;
      $scope.showClaim = false;
      $scope.showHelp = true;
    };

    $scope.readyforclaim = function () {
      if ($scope.hasregistered == false)
      {
        return $window.alert("Please register using the Profile section");
      }
      else if ($scope.hasregistered == true)
      {
        return showClm();
      }
    };

     // *** AUTHENTICATION LOGIC *** //

});

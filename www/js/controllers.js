angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // MASTER ARRAY OF ALL THE SOUNDS:
  var soundArr = [["assets/legend-of-zelda-orarina-of-time-opening-a-large-treasure-chest.mp3", "assets/ocarina-of-time-24-enter-zelda.mp3", "assets/zelda-chest.mp3", "assets/zelda_theme_snes-cut-mp3.mp3"]]






  //JAMES'S CODE FOR THE RANDOM BUTTON
  $scope.randomGrabber = function (array) {
    var firstIndex = Math.floor(Math.random() * array.length)
    var secondIndex = Math.floor(Math.random() * array[firstIndex].length)

    return array[firstIndex][secondIndex];
  }

  $scope.assignSound = function () {
    $scope.randoms = $scope.randomGrabber(soundArr);
    $scope.media = new Media($scope.randoms);
  }

  $scope.assignSound()


  $scope.playSound = function () {
    $scope.media.play();
    $scope.assignSound();
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

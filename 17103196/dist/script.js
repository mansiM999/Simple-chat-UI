angular.module("mansi", [])


.controller("Ctrl", function($scope, $timeout, $rootScope) {
  $scope.chats = [{
    id: 0,
    username: "Rakesh",
        messages: [
      "hi","hello","hi"
    ]
  }, {
    id: 1,
    username: "Lila",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    messages: [
     "hi","hi","hi"
    ]
  }, {
    id: 2,
    username: "Farha",
    
    messages: [
       "hey","hi","hi"
    ]
  }, {
    id: 3,
    username: 'Zoi',
    
    messages: [
       "hi","hi","hey"
    ]
  }];
  
  
  $scope.text;
  $scope.add = function() {
    var vlu = $scope.value;
    if($scope.text) {
      $scope.chats[vlu].messages.push(this.text);
      $scope.text = '';
      console.log(vlu);
    }
  }

  $scope.value;
  $scope.uid = function(ix) {
    console.log(ix);

    function ixy() {
      $rootScope.value = ix;
    }
    $timeout(ixy, 850);
  }

});

// Animation Styles
$(function() {

  var index = 0;
  
  function initScroll() {
    $(".text-wrap").animate({ 
      scrollTop: $("main").height() 
    }, 1000);
  }
  
  function scroll() {
    $(".text-wrap").animate({
      scrollTop: 9000
    }, 1000);
  }
  
  $("input[type='submit']").click(function() {
    scroll();
  });

  $("aside").find("li").click(function() {
    initScroll();
    $(".init").animate({
      'opacity': '0'
    }, 500);
  });

  $("aside").find("li").click(function() {
    if (index == 1) {
      index = 0;
      $(".message-wrap").find(".message").css({
        'opacity': '1'
      });
    } else {
      index = 0;
      $(".message-wrap").find(".message").css({
        'opacity': '0'
      });
      $(".loader").delay(500).animate({
        'opacity': '1'
      });
      setTimeout(function() {
        index = 0;
        $(".text-wrap").find(".message").css({
          'opacity': '1'
        });
        $(".loader").animate({
          'opacity': '0'
        });
      }, 3000)
    }
  });
});
'use strict';

app.controller('appController', ['$scope','$resource', function($scope , $resource) {
  $scope.inputUrl = '';
  $scope.images = [];

  $scope.checkURL= function(){
    var x = $scope.inputUrl;

    if (x.substring(0,4) == "http"){
      var resource = $resource("getImages", {url : '@url'});

      resource.get({url : $scope.inputUrl}).$promise.then(function(data) {
       $scope.images = data.results;

        $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();
          $(".clipBoardIcon").click(function(){
            var imageUrl=$(this).siblings("img")[0]["src"];
            var infoElement=$(this).siblings(".info");
            infoElement.css("display", "block");

            var existsTextarea = document.getElementById("dummyTextBox");
            existsTextarea.value = imageUrl;
            existsTextarea.select();

            try {
              var status = document.execCommand('copy');
              if(!status){
                console.error("Cannot copy text");
              }else{
                console.log("The text is now on the clipboard");
              }
            } catch (err) {
              console.log('Unable to copy.');
            }

            setTimeout(function(){
              infoElement.css("display", "none");
            }, 1500);
          });
        });


      });

    }
    else if (x.substring(0,3) == "www"){
      alert("Add 'http://' before your URL !");
      return false;
    }
    else
    {
      alert("Enter a valid URL !");
      return false;
    }
  };


}]);
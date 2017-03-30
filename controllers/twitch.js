angular.module('personalSite')
.controller('TwitchCtrl', function($scope) {
var defaultImg = 'https://blogs.mcgill.ca/oss/files/2013/10/question-mark.png';

// gets user info for a streamer to check if exists and get logo
var getUser = function(streamer) {
  $.ajax({
    url:'https://wind-bow.gomix.me/twitch-api/users/'+streamer,
    success:function(result) {
      if (result.status==422) {
        addUser('not-exist',streamer,"","",defaultImg);
      } else {
        getStream(streamer,result.logo);
      }
    }
  });
}

// gets stream information
var getStream = function(streamer,img) {
  $.ajax({
    url:'https://wind-bow.gomix.me/twitch-api/streams/'+streamer,
    success:function(result) {
      if (result.stream) {
        addUser('online',streamer,result.stream.game,result.stream.channel.status,img)
      } else {
        addUser('offline',streamer,"","",img)
      }
    }
  });
}

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404","brunofin"];

// adds html for a user
var addUser = function(status,user,game,desc,img) {
  $('.streamers-container').append("<div class='streamer mb-2 " + status + " container'><div class='row align-items-center'><div class='col-2 text-center align-items-center'><img class='img-fluid user-img' src='"+img+"'></div><div class='col-3'>"+user+"</div><div class='col'><div class='row align-items-center'><div class='col'><h5 class='mb-0'>"+game+"</h5><p class='m-0'>"+desc+"</p></div></div></div><div class='col-2'><div class='row align-items-center'><div class='circle-"+status+"'></div><div class='ml-2'>"+status+"<div></div></div></div></div>");
}


// loop through streamers
streamers.forEach(function(val) {
  getUser(val);

})

// shows display options
$('#display-options').hover(function() {
  $(this).fadeToggle(200,function() {
    $(this).children().toggleClass('hidden')
    $(this).fadeToggle(200)
  });  
})

// to display all streamers
$('#view-all').on('click', function() {
  $('.streamers-container').slideUp(400, function() {
    $(this).children().removeClass('hidden');
    $(this).slideDown(400);
  })
})

//display online online streamers
$('#view-online').on('click', function() {
  $('.streamers-container').slideUp(400, function() {
    $(this).children().addClass('hidden')
    $(this).children('.online').removeClass('hidden')
    $(this).slideDown(400);
  })
})

//display offline streamers
$('#view-offline').on('click', function() {
  $('.streamers-container').slideUp(400, function() {
    $(this).children().addClass('hidden')
    $(this).children('.offline').removeClass('hidden')
    $(this).slideDown(400);
  })
})


});
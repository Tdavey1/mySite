angular.module('personalSite')
.controller('WeatherCtrl', function($scope) {

var lat = "";
var long = "";
var city= "";
var state= "";
var icon ="";
var today = {};
var forecast = [];
var degree = "&#8457";

var getIcon = function(weatherCode,index) {

  switch(weatherCode) {
      
    case "0":
      icon = '<i class="owf owf-900 owf-5x"></i>'
      break;
    case "1":
      icon = '<i class="owf owf-901 owf-5x"></i>'
      break;
    case "2":
      icon = '<i class="owf owf-902 owf-5x"></i>'
      break;
    case "3":
      icon = '<i class="owf owf-212 owf-5x"></i>'
      break;
    case "4":
      icon = '<i class="owf owf-211 owf-5x"></i>'
      break;
    case "5":
      icon = '<i class="owf owf-616 owf-5x"></i>'
      break;
    case "6":
      icon = '<i class="owf owf-612 owf-5x"></i>'
      break;
    case "7":
      icon = '<i class="owf owf-621 owf-5x"></i>'
      break;
    case "8":
      icon = '<i class="owf owf-511 owf-5x"></i>'
      break;
    case "9":
      icon = '<i class="owf owf-301 owf-5x"></i>'
      break;
    case "10":
      icon = '<i class="owf owf-511 owf-5x"></i>'
      break;
    case "11":
      icon = '<i class="owf owf-503 owf-5x"></i>'
      break;
    case "12":
      icon = '<i class="owf owf-503 owf-5x"></i>'
      break;
    case "13":
      icon = '<i class="owf owf-620 owf-5x"></i>'
      break;
    case "14":
      icon = '<i class="owf owf-600 owf-5x"></i>'
      break;
    case "15":
      icon = '<i class="owf owf-622 owf-5x"></i>'
      break;
    case "16":
      icon = '<i class="owf owf-602 owf-5x"></i>'
      break;
    case "17":
      icon = '<i class="owf owf-906 owf-5x"></i>'
      break;
    case "18":
      icon = '<i class="owf owf-611 owf-5x"></i>'
      break;
    case "19":
      icon = '<i class="owf owf-621 owf-5x"></i>'
      break;
    case "20":
      icon = '<i class="owf owf-741 owf-5x"></i>'
      break;
    case "21":
      icon = '<i class="owf owf-721 owf-5x"></i>'
      break;
    case "22":
      icon = '<i class="owf owf-711 owf-5x"></i>'
      break;
    case "23":
      icon = '<i class="owf owf-957 owf-5x"></i>'
      break;
    case "24":
      icon = '<i class="owf owf-905 owf-5x"></i>'
      break;
    case "25":
      icon = '<i class="owf owf-903 owf-5x"></i>'
      break;
    case "26":
      icon = '<i class="owf owf-804 owf-5x"></i>'
      break;
    case "27":
      icon = '<i class="owf owf-802-n owf-5x"></i>'
      break;
    case "28":
      icon = '<i class="owf owf-802-d owf-5x"></i>'
      break;
    case "29":
      icon = '<i class="owf owf-801-n owf-5x"></i>'
      break;
    case "30":
      icon = '<i class="owf owf-801-d owf-5x"></i>'
      break;
    case "31":
      icon = '<i class="owf owf-800-n owf-5x"></i>'
      break;
    case "32":
      icon = '<i class="owf owf-800-d owf-5x"></i>'
      break;
    case "33":
      icon = '<i class="owf owf-800-n owf-5x"></i>'
      break;
    case "34":
      icon = '<i class="owf owf-800-d owf-5x"></i>'
      break;
    case "35":
      icon = '<i class="owf owf-622 owf-5x"></i>'
      break;
    case "36":
      icon = '<i class="owf owf-904 owf-5x"></i>'
      break;
    case "37":
      icon = '<i class="owf owf-221 owf-5x"></i>'
      break;
    case "38":
      icon = '<i class="owf owf-221 owf-5x"></i>'
      break;
    case "39":
      icon = '<i class="owf owf-531 owf-5x"></i>'
      break;
    case "40":
      icon = '<i class="owf owf-531 owf-5x"></i>'
      break;
    case "41":
      icon = '<i class="owf owf-602 owf-5x"></i>'
      break;
    case "42":
      icon = '<i class="owf owf-601 owf-5x"></i>'
      break;
    case "43":
      icon = '<i class="owf owf-602 owf-5x"></i>'
      break;
    case "44":
      icon = '<i class="owf owf-802 owf-5x"></i>'
      break;
    case "45":
      icon = '<i class="owf owf-202 owf-5x"></i>'
      break;
    case "46":
      icon = '<i class="owf owf-511 owf-5x"></i>'
      break;
    case "47":
      icon = '<i class="owf owf-200 owf-5x"></i>'
      break;
    default:
      icon = '<i class="owf owf-950 owf-5x"></i>'
      break   
  } 
  $('.carousel-item:nth-child('+(index+1)+') .img-container').html(icon);
}

var getWeather = function(type) {

  console.log(type)
  
  if (type=="coord") {
    var q = 'select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="('+lat+','+long+')")'
  } else {
    var q = 'select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="('+city+','+state+')")'
  }
  $.ajax({
    url:'https://query.yahooapis.com/v1/public/yql',
    data:{
      q: q,
      format:'json'
    },
    success:function(response) {
      console.log(response)
      //var location =  response.query.results.channel.location;//city,region,country
      today = response.query.results.channel.item.condition;
      forecast = response.query.results.channel.item.forecast;
      var location = response.query.results.channel.description;

      console.log('forecast = ',forecast)
      $('.alert').addClass('hidden');
      $('#location > p').removeClass('hidden');
      $('#carousel').removeClass('hidden');
      
      for (var i=0;i<5;i++) {
        if (i==0) {
          
          $('.carousel-item:nth-child('+(i+1)+') .data-container').html('<div><p class="mb-0 text-center desc">' + today.date+ '</p><p class="mb-0 text-center desc">' + today.text + '</p><p class="text-center temp desc">'+today.temp+ degree + '</p></div>');
          getIcon(today.code,i)

        } else {
          $('.carousel-item:nth-child('+(i+1)+') .data-container').html('<div><p class="mb-0 text-center desc">' + forecast[i].date+'<p class="text-center mb-0 desc">' + forecast[i].text + '</p><p class="text-center desc temp">high: '+forecast[i].high+ degree+ ', low: '+ forecast[i].low + degree +'</p></div>');
          getIcon(forecast[i].code,i)

        }
      }
      
      $('#location').html('<p>'+location+'</p>')

    }
  })
};

var getLocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      getWeather("coord")
    });
  }
}
var toC = function(temp) {
  temp = Number(temp);
  return Math.round((temp-32)*(5/9));
}

var toF = function(temp) {
  temp = Number(temp);
  return Math.round( temp*(9/5) +32 )
}

var changeDegree = function() {
  
  if (degree=='&#8457') {
    console.log('toC')
    degree = '&#8451';
    for (var i=0;i<5;i++) {
      if (i==0) {
        $('.carousel-item:nth-child('+(i+1)+') .temp').html('<p class="text-center temp">'+toC(today.temp)+degree+'</p></div>');

      } else {
        $('.carousel-item:nth-child('+(i+1)+') .temp').html('<p class="text-center temp">high: '+toC(forecast[i].high)+ degree+', low: '+toC(forecast[i].low)+degree+'</p></div>');
      }
    }
    
  } else {
    console.log('ploopydeploop')

    console.log('toF')
    degree = '&#8457';
    for (var i=0;i<5;i++) {
      if (i==0) {
        $('.carousel-item:nth-child('+(i+1)+') .temp').html('<p class="text-center temp">'+today.temp+degree+'</p></div>');

      } else {
        $('.carousel-item:nth-child('+(i+1)+') .temp').html('<p class="text-center temp">high: '+forecast[i].high+ +degree+', low: '+forecast[i].low+degree+'</p></div>');
      }
    }

  }


}




$(document).ready(function() {
  $('.carousel').carousel('pause')
  getLocation("coord")

  $('#getWeather').on('click',function() {
    console.log('getting weather state')
    
    city = $('#city').val();
    state = $('#state').val();
    
    if (city.length==0 || state.length==0) {
      console.log('something not entered')
      $('.alert').removeClass('hidden');
      $('#location > p').addClass('hidden');
      $('#carousel').addClass('hidden');
    } else {
      getWeather('state')
      
    }
  })
  
  
  $('#getWeatherCoord').on('click',function() {
    console.log('getting weather coord')
    getLocation("coord")
  })
  
  $(document).on('click','.temp',function(evt) {
    console.log("I have clicked you");
 evt.stopPropagation();
    changeDegree();
  })
  
})


});
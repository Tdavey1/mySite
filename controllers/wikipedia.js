angular.module('personalSite')
.controller('WikipediaCtrl', function($scope) {


var search = function(val) {
  $.ajax({
    url:'https://en.wikipedia.org/w/api.php',
    data: {
      action:'query',
      generator:'search',
      format:'json',
      prop:'extracts|pageimages',
      origin:'*',
      exsentences:1,
      exlimit:'max',
      exintro:1,
      explaintext:1,
      gsrsearch:val,
      grslimit:10,
      piprop:'thumbnail|name',
      pilimit:'max'
    },
    success: function(response) {
      var data = response.query.pages;
      var keys = Object.keys(data);
      for (var i =0;i<keys.length;i++) {
        var page = data[keys[i]];
        if (page.thumbnail) {
          var image = page.thumbnail.source
        } else {
          var image = 'https://image.freepik.com/free-icon/question-mark_318-52837.jpg';
        }
        appendData(page.title,page.extract,page.pageid,image);
      }
    }
  })  
}

var appendData = function(title,content,pageID,image) {
  $("#resultsContainer").append("<a href='https://en.wikipedia.org/?curid="+ pageID +"' target='_blank'><div class='container page'><div class='row align-items-center'><div class='col-xs-10'><h4>"+title+"</h4><p>"+content+"</p></div><div class='col-xs-2 img-cont red'><img src='"+ image +"' class='img-thumbnail page-img img-responsive'></div></div></div></a>")
}


  $('#form').on('submit', function(e) {
    e.preventDefault();
    $('#resultsContainer').empty();
    var searchVal = $('#search').val();
    search(searchVal);
  })


});
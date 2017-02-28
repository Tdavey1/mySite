angular.module('personalSite')
.controller('QuoteCtrl', function($scope) {

	var getQuote = function() {
		$.ajax({
			url:'https://quotesondesign.com/wp-json/posts',
			cache:false,
			data:{
				'filter[orderby]':'rand',
			},
			success:function(response){
				quote = response[0].content;
				author = response[0].title;
				$('#quote,#author').fadeOut(400, function() {
					$('#quote').html(quote);
					$('#author').html("<p>- "+author+"</p>");
					$('#quote,#author').fadeIn(400);
				})
				changeTweet()

			},
		});
	}

	var changeTweet = function() {
		$('#twitter > a').attr('href','https://twitter.com/intent/tweet?text="'+quote.slice(3,quote.length-5) +'" -'+author)
	}

	getQuote()
	
	$('#newQuote').on('click', function(event) {
		getQuote();

	})


});
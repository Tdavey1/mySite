angular.module('personalSite')
.controller('CalculatorCtrl', function($scope) {

	var tot = null; // holds the total
	var eq = ""; // holds the full equation

	var values = {1:"num", 2: "num", 3: "num", 4:"num", 5:"num", 6: "num", 7:"num",8:"num", 9:"num", ".":"num", "+":"op", "-":"op", "/":"op", "+":"op"};

	/* 
	appends number to end of equation string
	gets rid of leading zeros
	*/
	$('.num').on('click', function() {
		if (tot == eq) {
			resetAll();
		}
		var length = eq.length;
		if (length > 2) {
			if (values[eq[length-2]] == "op" && eq[length-1] == 0) {
				eq = eq.slice(0,eq.length-1);
			}
		} else if (length == 1) {
			if (eq[0] == 0) {
				eq = ""
			}
		}
		eq+= this.value;
		$("#eq").html(eq);
	})

	$(".op").on("click", function() {
		if (eq.length != 0 && values[eq[eq.length-1]] != "op") {
			eq+= this.value;
			$("#eq").html(eq);
		}
	})

	/* 
	removes last value of the equation
	displays the changed eq
	adds a 0 if the eq is now an empty string
	*/
	function del() {
		if (eq.length>0) {
			eq = eq.slice(0,eq.length-1);
			if (eq.length == 0) {
				$("#eq").html(0);
			} else {
				$('#eq').html(eq);
			}
		}  
	}

	$('#back').on('click', del)

	/*
	changes the equation and result back to zero
	*/
	function resetAll() {
		tot = 0;
		eq = "";
		$('#tot').html(0);
		$('#eq').html(0);
		noseWiggle()
	}

	$('#ac').on('click', resetAll)

	/*
	removes current equation and changes back to previous total
	*/
	$('#ce').on('click', function() {
		if (tot>0) {
			eq = tot.toString();
			$("#eq").html(eq);

		} else {
			eq = "";
			$("#eq").html(0);

		}
		noseWiggle();
	})

	$('#equal').on('click', function() {
		if (values[eq[eq.length -1]] == "op" ) {  // show err if the last value is an op
			$(".warning").html("theres an op at the end :/");
		} else { // calculates total
			tot = eval(eq);
			if (tot % 1 != 0) {
				tot = tot.toFixed(2);
			}
			eq = tot.toString();
			$("#tot").html(tot);
			$("#eq").html(eq);
			wink();
		}
	})

	function wink() {
		$('#left-eye').animate({height:".2em"}, 100, function() {
			$(this).animate({height:"1.5em"}, 100)
		})
	}

	function noseWiggle() {
		$("#nose").animate({left: "-=.075em"}, 120, function() {
			$(this).animate({left: "+=.15em"}, 240, function() {
				$(this).animate({left: "-=.075em"}, 120)
			})
		})
	}




});
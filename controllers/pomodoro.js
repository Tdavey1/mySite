angular.module('personalSite')
.controller('PomodoroCtrl', function($scope) {
	var addInterval = function(amount) {
		for (var i=0;i<amount;i++) {
			if (i%10==0) {
				$('#interval').append('<div class="line"></div>')
				$('#interval').append('<div class="percent">'+(i)+'%</div>')
			} else {
				$('#interval').append('<div class="point"></div>')
			}
		}
	}
	addInterval(101);

	//--------------------------------------------------------------

	var workMin = 25; // work minutes that is used to calc timerLength
	var timerLength=false; //workMin in seconds
	var intervalTime = false; // declare interval here so can be used in all functions
	var time;
	var breakMin = 5;
	var work = true; //work true = workMin, false = breakMin

	var startTimer = function() {
		if (work) {
			$('.ball').addClass('red');
			$('.ball').removeClass('green');
		} else {
			$('.ball').addClass('green');
			$('.ball').removeClass('work');
		}
		
		if (!timerLength) {
			timerLength = (work) ? workMin*60:breakMin *60;
		}
		time = getTime(timerLength);
		$('#clock').html(time);
		
		$('#interval').animate({'right':'-160px'},timerLength*1000, 'linear');

		// subtracts a second from the time and updates timer, stops if 0 
		intervalTime = setInterval(function() {
			timerLength= timerLength-1;
			time = getTime(timerLength);
			if (timerLength==0) {
				clearInterval(intervalTime);
				work=!work;
				$('#interval').animate({'right':'1240px'},0,'linear');
				timerLength=false;
				startTimer();
				
				$('#sound')[0].play();
				
			}
			$('#clock').html(time);
		}, 1000);
	}


	$('#go').on('click', function() {
		console.log("clicked");
		$("#go, #pause").toggleClass('hidden');
		if (!intervalTime) {
			startTimer();
		}
	})

	$('#reset').on('click', function() {
		$('#interval').stop();
		$('#interval').animate({'right':'1240px'},200,'linear');
		$('.ball').addClass('red');
		$('.ball').removeClass('green');
		$("#go").removeClass('hidden');
		$("#pause").addClass('hidden');
		clearInterval(intervalTime);
		intervalTime=false;
		timerLength = workMin * 60;
		time = getTime(timerLength);
		$('#clock').html(time);
	})

	$('#pause').on('click', function() {
		$("#go, #pause").toggleClass('hidden');
		$('#interval').stop();
		clearInterval(intervalTime);
		intervalTime=false;
	})



	// returns the time based on number of seconds

	var getTime = function(time) {
		var hours = Math.floor(time / 3600);
		time-= hours * 3600;
		var minutes = Math.floor(time / 60);
		var seconds = time % 60;
		
		if (hours=="00") {
			if (minutes=="00") {
				return seconds;
			} else {
				seconds = (seconds<10) ? ("0"+seconds):seconds;
				return minutes + ":" + seconds;
			}
		} else {
			minutes = (minutes<10) ? ("0"+minutes):minutes;
			seconds = (seconds<10) ? ("0"+seconds):seconds;
			return hours +":"+minutes+":"+seconds;
		}
	}

	$('#workAdd').on('click',function() {
		workMin+=1;
		console.log("clicked2");
		$('#workTime').text(workMin)
	})

	$('#workSub').on('click',function() {
		if (workMin>1) {
			workMin-=1;
			$('#workTime').text(workMin) 
		}
	})

	$('#breakAdd').on('click',function() {
		breakMin+=1;
		$('#breakTime').text(breakMin)
	})

	$('#breakSub').on('click',function() {
		if (breakMin>1) {
			breakMin-=1;
			$('#breakTime').text(breakMin) 
		}
	})
});
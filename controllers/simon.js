angular.module('personalSite')
.controller('SimonCtrl', function($scope) {
	
	$scope.$on('$destroy', function() {
		game.stop();
	});

		
	function Simon() {
		var display = {
			'green': function() {
				$("#green").css({"background-color":"#00ff00"});
				$("#green-sound")[0].play();
				setTimeout(function() {
					$("#green").css({"background-color":"#00b200"});
				}, 700)
			},
			"red": function() {
				$("#red").css({"background-color":"#ff0000"})
				$("#red-sound")[0].play();
				setTimeout(function() {
					$("#red").css({"background-color":"#b20000"});
				}, 700)
			},
			"yellow": function() {
				$("#yellow").css({"background-color":"#ffff00"})
				$("#yellow-sound")[0].play();
				setTimeout(function() {
					$("#yellow").css({"background-color":"#e5e500"});
				}, 700)
			},
			"blue": function() {
				$("#blue").css({"background-color":"#0000ff"})
				$("#blue-sound")[0].play();
				setTimeout(function() {
					$("#blue").css({"background-color":"#0000b2"});
				}, 700)
			}

		} 
		var strict = false;
		var path = [];
		var color = ["green","red","yellow","blue"];
		var turn = 0;
		this.started = false;
		this.on =false;

		/*
			changes to the next turn
			pushes a new color to the path
		*/
		this.pickNewMove = function() {
			turn++;
			$("#display").text(turn);
			var chosen = color[Math.floor(Math.random() * 4)];
			path.push(chosen);
		}
		
		/*
			displays the path
			allows player to make their moves when done
		*/
		this.showPath = function() {
			var i = 0;
			var curGame = this;
			this.interval = setInterval(function() {
				display[path[i]]();
				if (i===path.length-1) {
					curGame.personMove();
					clearInterval(curGame.interval);
				}
				i++
			},750)
		}
		
		
		this.newTurn = function() {
			this.pickNewMove();
			this.showPath();
		}
		
		
		this.redo = function() {
			$("#display").text(turn);
			this.showPath();
		}
		
		this.restart = function() {
			$(".option").off("click");
			clearInterval(this.interval);
			turn = 0;
			path = [];
			this.newTurn();
		}
		
		this.changeStrict = function() {
			strict = !strict;      
			if (strict) {
				$("#strict").css("background-color","#ff69b4");
			} else {
				$("#strict").css("background-color","pink");
			}
		}
		
		this.personMove = function() {
			var curGame = this;
			var index = 0;
			$(".option").on("click", function() {
				var color = $(this).attr("id");
				display[color]();
				if (color===path[index]) {
					index++;
					if (index===path.length) {
						if (path.length===20) {
							$(".option").off("click");
							$("#display").text("You win!");
						} else {
							$(".option").off("click");
							setTimeout(function() {
								curGame.newTurn();
							},500) 
						}
					}
				} else {
					$(".option").off("click");
					$("#display").text("XX")
					setTimeout(function() {
						if (strict) {
							curGame.restart();
						} else {
							curGame.redo();
						}
					}, 1000)

				}
			})
		}
		
		this.start = function() {
			this.newTurn();
			this.started = true;
		}
		
		this.stop = function() {
			path = []
			turn = 0
			this.started = false;
			clearInterval(this.interval);
			$(".option").off("click");
			$("#display").text("--");
			strict = false;
			$("#strict").css("background-color", "pink");
		}
		
	}
	var game = new Simon();
	
	$("#simon-start").on("click", function() {
		if (game.on && !game.started) {
			game.start();  
		}
	})
	
	$("#simon-restart").on("click", function() {
		if (game.on && game.started) {
			game.restart();
		}
	})
	$("#strict").on("click", function() {
		if (game.on) {
			game.changeStrict(); 
		}
	})
	
	$("#switch").on("click", function() {
		if (game.on) {
			game.on = false;
			$("#switch").css("background-color","#a8a8a8");
			$("#switch").css("text-align","left");
			$("#display").css("color", "#b83939");
			game.stop();
		} else {
			game.on = true;
			$("#switch").css("background-color","#00e5e5");
			$("#switch").css("text-align","right");
			$("#display").css("color", "red");
		}
	})


})
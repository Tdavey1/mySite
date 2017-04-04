angular.module('personalSite')
.controller('SimonCtrl', function($scope) {
  
	$(document).ready(function() {
	  
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
	    
	    this.pickNewMove = function() {
	      turn ++;
	      $("#display").text(turn);
	      var chosen = color[Math.floor(Math.random() * 4)];
	      path.push(chosen);
	    }
	    this.showPath = function() {
	      var i = 0;
	      var curGame = this;
	      
	      this.interval = setInterval(function() {
	        display[path[i]]();
	        if (i===path.length-1) {
	          clearInterval(curGame.interval);
	        }
	        i++
	      },750)
	      
	    }
	    this.newTurn = function() {
	      this.pickNewMove();
	      this.showPath();
	      this.personMove();
	    }
	    
	    this.redo = function() {
	      this.showPath();
	      this.personMove();
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
	          if (strict) {
	            curGame.restart();
	          } else {
	          curGame.redo();            
	          }
	        }
	      })
	    }
	    
	    this.start = function() {
	      this.newTurn();
	    }
	    
	  }
	  var game = new Simon();
	  
	  $("#start").on("click", function() {
	    game.start();
	  })
	  
	  $("#restart").on("click", function() {
	    game.restart();
	  })
	  $("#strict").on("click", function() {
	    game.changeStrict();
	  })
	})

	
})
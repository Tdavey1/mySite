angular.module('personalSite')
.controller('TicTacToeCtrl', function($scope) {
  
	$(document).ready(function() {

	// gets circle progressbar objects 
		var getOs = function() {
			return $('.circle').get().map(function(val) {
				return new ProgressBar.Circle(val, {
				strokeWidth: 15, //width of circle
				easing: 'easeInOut',
				duration: 600,
				color: 'black'
				});
			})
		}

	    var os = getOs();

		$("#setup-form").submit(function() {
			var setup = {};
			$("#setup-form").serializeArray().forEach(function(val) {
				setup[val.name] = val.value;
			});
			$(".game-options").hide(400, function() {
				$(".game-status").show(200)
			})
			$("#left").animate({height:"30em"},400)
			$("#top").animate({width:"30em"},400)
			$("#right").animate({height:"30em"},400)
			$("#bottom").animate({width:"30em"},400)
			var game = new TicTacToe(setup);
			game.startGame();
		})

		var TicTacToe = function(setup) {
			this.board = new Board([undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]);
			this.symbol = setup.symbol;
			this.opSymbol = (setup.symbol==='x') ? 'o' : 'x';
			this.player = new Person(this.symbol);
			this.opponent = (setup.vs==="person") ? new Person(this.opSymbol) : new Computer(this.opSymbol,this.symbol);
			this.complete = false;
			if (setup.firstMove==="true") {
				this.myTurn = true;
				var msg = this.symbol + "'s turn";
				$("#status-container").text(msg);
			} else {
				this.myTurn = false;
				var msg = this.opSymbol + "'s turn";
				$("#status-container").text(msg);
			}
			this.myTurn = (setup.firstMove==="true") ? true : false;
			this.resetBoard = function() {
				for (var i=0;i<9;i++) {
					removeO(i);
					removeX(i);
					removeClicked(i);
				}
			}

			var game = this;
			this.restartGame = function() {
				this.resetBoard();
				$("board").off("click");
				this.complete = false;
				if (setup.firstMove==="true") {
					this.myTurn = true;
					var msg = this.symbol + "'s turn";
					$("#status-container").text(msg);
				} else {
					this.myTurn = false;
					var msg = this.opSymbol + "'s turn";
					$("#status-container").text(msg);
				}
				this.board = new Board([undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]);
				this.startGame();
			}
			this.resetAll = function() {
				this.restartGame();
				$("#restart").off("click");
				$("#reset").off("click");
				$("#board").off("click", '.cell')
			}
			$("#restart").on('click', function() {
				game.restartGame();
			})
			$("#reset").on('click', function() {
				game.resetAll();
				$(".game-status").hide(200, function() {
					$(".game-options").show(400)
				})
				$("#left").animate({height:"0em"},400)
				$("#right").animate({height:"0em"},400)
				$("#top").animate({width:"0em"},400)
				$("#bottom").animate({width:"0em"},400)
			})
			function removeX(id) {
				$('#'+id).find('.right-x').slideUp(300,function() {
					$('#'+id).find('.left-x').slideUp(300);
				});
			}
			function removeO(id) {
				os[id].animate(0.0)
			}
			function removeClicked(id) {
				$('#'+id).data('clicked',false)
			}
			function flashWin(positions) {
				positions.forEach(function(val) {
					$("#"+val).animate({opacity:0.0}, function() {
						$("#"+val).animate({opacity:1.0})
					})
				})
			}

			this.startGame = function() {
				if (setup.vs === 'person') {
					this.vsPerson();
				} else {
					this.vsComputer();
				}
			}

			this.vsPerson = function() {
				var game = this;
				$("#board").on("click", '.cell', function() {
					var cell = this;
					var position = $(cell).attr('id');
					if (!$(cell).data('clicked') && !game.complete) {
						if (game.myTurn) {
							game.board.addToBoard(position,game.symbol)
							game.player.makeMySymbol(cell);
							game.myTurn = !game.myTurn;
							var complete = game.board.checkComplete()
							if (complete) {
								game.complete = true;
								if (complete.result==='tie') {
									var msg = "It was a tie!";
									$("#status-container").text(msg);
								} else {
									flashWin(complete.positions)
									var msg = game.symbol + " won!";
									$("#status-container").text(msg);
								}
							} else {
								var msg = game.opSymbol + "'s turn";
								$("#status-container").text(msg);
							}
						} else {
							game.board.addToBoard(position,game.opSymbol)
							game.opponent.makeMySymbol(cell);
							game.myTurn = !game.myTurn;
							var complete = game.board.checkComplete()
							if (complete) {
								game.complete = true;
								if (complete.result==='tie') {
									var msg = "It was a tie!";
									$("#status-container").text(msg);
								} else {
									flashWin(complete.positions)
									var msg = game.opSymbol + " won!";
									$("#status-container").text(msg);
								}
							} else {
								var msg = game.symbol + "'s turn";
								$("#status-container").text(msg);
							}
						}
					}
				})
			}

			this.vsComputer = function() {
				var game = this;
				if (!game.myTurn) {
					var msg = game.symbol + "'s turn";
					$("#status-container").text(msg);
					setTimeout(function() {
						game.opponent.makeMyMove(game.board)
						game.myTurn = !game.myTurn;
						var msg = game.symbol + "'s turn";
						$("#status-container").text(msg);
					},1000)

				}


				$("#board").on("click", '.cell', function() {
					var cell = this;
					var position = $(cell).attr('id');
					if (!$(cell).data('clicked') && !game.complete) {
						if (game.myTurn) {
							game.board.addToBoard(position,game.symbol)
							game.player.makeMySymbol(cell);
							game.myTurn = !game.myTurn;
							var complete = game.board.checkComplete()
							if (complete) {
								game.complete = true;
								if (complete.result==='tie') {
									var msg = "It was a tie!";
									$("#status-container").text(msg);
								} else {
									flashWin(complete.positions)
									var msg = game.symbol + " won!";
									$("#status-container").text(msg);								}
							} else {
								var msg = game.opSymbol + "'s turn";
								$("#status-container").text(msg);
								setTimeout(function() {
									game.opponent.makeMyMove(game.board)
									game.myTurn = !game.myTurn;
									var complete = game.board.checkComplete();
									if (complete) {
										game.complete = true
										if (complete.result==='tie') {
											var msg = "It was a tie!";
											$("#status-container").text(msg);
										} else {
											flashWin(complete.positions)
											var msg = game.opSymbol + " won!";
											$("#status-container").text(msg);
										}
									} else {
										var msg = game.symbol + "'s turn";
										$("#status-container").text(msg);
									}
								},700)
							}
						} 
					}
				})
			}
		}


		var Board = function(board) {
			this.board = board.slice(0);

			this.addToBoard = function(position,symbol) {
				this.board[position] = symbol;
			}

			this.findEmpty = function() {
				var empty = [];
				for (var i=0;i<9;i++) {
					if (!this.board[i]) {
						empty.push(i);
					}
				}
				return empty;
			}

			this.checkComplete = function() {
				if (checkLeftDiagonal(this.board)) {
					return { result:'left diagonal', positions:[0,4,8] };
				} else if (checkRightDiagonal(this.board)) {
					return { result:'right diagonal', positions:[2,4,6] };
				} else {
					for (var i=0;i<8;i++) {
						if (checkCol(this.board,i)) {
							return { result:'column', positions:[i,i+3,i+6] };
						} else if (checkRow(this.board,i)) {
							return { result: 'row', positions:[i*3,i*3+1,i*3+2]};
						}
					}
				}
				if (checkTie(this.board)) {
					return { result:'tie' };
				}
				return false;
			}

			function checkTie(board) {
				for (var i=0;i<board.length;i++) {
					if (!board[i]) {
						return false;
					}
				}
				return true;
			}

			function checkLeftDiagonal(board) {
				if (board[0] && board[0]===board[4] && board[0]===board[8]) {
					return true;
				}
				return false;
			}

			function checkRightDiagonal(board) {
				if (board[2] && board[2]===board[4] && board[2]===board[6]) {
					return true;
				}
				return false;
			}

			function checkCol(board,position) {
				if (board[position] && board[position]===board[position+3] && board[position]===board[position+6]) {
					return true;
				}
				return false;
			}

			function checkRow(board,position) {
				if (board[position*3] && board[position*3]===board[position*3+1] && board[position*3]===board[position*3+2]) {
					return true;
				}
				return false;
			}
		}

		var Person = function(symbol) {
			this.mySymbol = symbol;

			this.makeMySymbol = (symbol==='x') ? makeX : makeO;
			function makeX(cell) {
				$(cell).data('clicked', true);
				$(cell).find('.right-x').slideDown(300,function() {
					$(cell).find('.left-x').slideDown(300);
				});
			}

			function makeO(cell) {
				$(cell).data('clicked', true);
				var circle = $(cell).attr('id');
				os[circle].animate(1.0);
			}

		}

		var Computer = function(symbol,opSymbol) {
			this.mySymbol = symbol;
			this.opSymbol = opSymbol;
			this.makeMySymbol = (symbol==='x') ? makeX : makeO;
			this.makeMyMove = function(board) {
			var position = this.pickMove(board);
			board.addToBoard(position,this.mySymbol);
			var cell = $("#"+position);
			$(cell).data('clicked', true);
			this.makeMySymbol(cell);
			}

			function makeX(cell) {
				$(cell).data('clicked', true);
				$(cell).find('.right-x').slideDown(300,function() {
					$(cell).find('.left-x').slideDown(300);
				});
			}
			function sortAsc(val1,val2) {
				return val1.score - val2.score;
			}

			function sortDsc(val1,val2) {
				return val2.score - val1.score;
			}
			function makeO(cell) {
				$(cell).data('clicked', true);
				var circle = $(cell).attr('id');
				os[circle].animate(1.0);
			}
			function findCorner(board) {
				if (board[0]) {
					var options = [8];
				} else if (board[1]) {
					var options = [6,8];
				} else if (board[2]) {
					var options = [6];
				} else if (board[3]) {
					var options = [2,8];
				} else if (board[5]) {
					var options = [0,6];
				} else if (board[6]) {
					var options = [2];
				} else if (board[7]) {
					var options = [0,2];
				} else if (board[8]) {
					var options = [0];
				} else {
					var options = [0,2,6,8]
				}
				return options[Math.floor(Math.random() * options.length)];
			}


			this.findBestMove = function(board,myTurn,turn) {
				var empty = board.findEmpty();
				var symbol = (myTurn) ? this.mySymbol : this.opSymbol;
				var options = [];
				for (var i=0;i<empty.length;i++) {
					var newBoard = new Board(board.board);
					newBoard.addToBoard(empty[i],symbol);
					var checked = newBoard.checkComplete();
					if (checked) {
						if (checked.result==='tie') {
							options.push({ position:empty[i], score:0 })
						} else {
							var option = (myTurn) ? {position:empty[i], score:10-turn} : {position:empty[i], score:-10+turn};
							options.push(option)
						}
					} else {
						var move = this.findBestMove(newBoard,!myTurn,turn+1);
						var position = empty[i];

						options.push({position:position, score:move.score});
					}
				}
				return (myTurn) ? options.sort(sortDsc)[0] : options.sort(sortAsc)[0];
			}

			this.pickMove = function(board) {
				if (!board.board[4]) {
					return 4;
				} else if (board.findEmpty().length>6) {
					return findCorner(board.board);
				} else {
					return this.findBestMove(board,true,0).position;
				}
			}
		}

	})
})
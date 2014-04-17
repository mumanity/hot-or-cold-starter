
$(document).ready(function(){
//loads new game
	newGame();
	$('.new').click(function(e) {
		e.preventDefault();
		newGame();
	});

//submit guess via click
	$('#guessButton').click(function(e) {
		e.preventDefault();
		startGame();
		$("#userGuess").focus().value('');
	});

/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});

// global variables
var guess = 0;
var answer = 0;
var guessArray = [];
var count = 0;
var range = 0;

// randomly generates answer
function randomSelect(n) {
	return Math.floor((Math.random() * n) + 1);
}

// restarts game
function newGame() {
	answer = randomSelect(100);
	count = 0;
	$('#count').text(count);
	$('#guessList').empty();
	$('#feedback').text('Make your Guess!');
}

// compares answer to guess
function compare() {
	var range = Math.abs(guess - answer);
	var hint = $('#feedback');
	if (guess === answer) {
		hint.text("WINNER!");
	} else if (range >= 50) {
		hint.text("It's freezing in here!");
	} else if (range >= 30 && range < 50) {
		hint.text("I could wear sleeves.");
	} else if (range >= 15 && range < 30) {
		hint.text("Warm-ish");
	} else if (range >= 5 && range < 15) {
		hint.text("Warmer!");
	} else if (range >= 2 && range < 5) {
		hint.text("Toasty!");
	} else {
		hint.text("You're about to ignite!");
	}
}

// guess counter
function guessCounter() {
	count++;
	$('#count').text(count);
}

//adds previous guess to array
function displayGuess() {
	guess = +$('input[id=userGuess]').val();
	guessArray.push(guess);
	$('#guessList').append('<li>' +guess+ '</li>');
	$("#userGuess").focus().val('');
}

//checks to see if guess is a number
function startGame() {
	var guess = +$('input[id=userGuess]').val();
	if (isNaN(guess)) {
		alert("Uh oh! You didn't enter a number.");
		$("#userGuess").focus().val('');
	} else if (guess > 100) {
		alert("Please enter a number between 1-100.");
		$("#userGuess").focus().val('');
	} else {
		compare();
		displayGuess();
		guessCounter();
	}
}








	
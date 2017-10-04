$(document).ready(function(){
  var question;
	var magic8Ball={};
	magic8Ball.answers = ["Yes definitely", "You may rely on it","Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Do not count on it", "My reply is no", "My sources say no", "Outlook not so good"];
	$("#answer").hide();
magic8Ball.askQuestion = function(question){

	var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.answers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var randomAnswer = this.answers[randomIndex];
	$("answer").fadeIn(500);
	$("#answer").text(randomAnswer);
	};

	var onClick= function (){
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

		setTimeout(
    function() {
			var question = prompt("ASK ME ANYTHING!");
             $("#8ball").effect("shake");
		}, 500);
		magic8Ball.askQuestion(question);

		setTimeout(
    function() {
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
    }, 500);

		$("#answer").fadeIn(4000);
	};


	$("#questionButton").click(onClick);
});

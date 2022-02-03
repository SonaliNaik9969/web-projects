function evaluate()
{
	if (quiz.isEnded())
	{
		showScores();
	}
	else
	{
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices
		var choices= quiz.getQuestionIndex().choices;
		for(i=0; i<choices.length; i++)
		{
			var element = document.getElementById("choice"+ i);
			element.innerHTML= choices[i];
			guess("button" + i, choices[i]);	
		}
		showProgress();
	}

};
function guess(guess, id)
{
	var button= document.getElementById(id);
	button.onclick=function()
	{
		quiz.guess(guess);
		evaluate();
	}
};
function showProgress()
{
	currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("Progress");
	element.innerHTML= "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};
function showScores()
{
	var finishQuizHTML = "<h1> RESULT </h1>"
	finishQuizHTML + ="<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = finishQuizHTML;
};
// create questions
var questions = 
[
	new question("What is the Capital of india?", ["New Delhi","Mumbai","Jaipur","Kolkata"], "New Delhi"),
	new question("Which is the National River of India?", ["Godavari","Ganga","Yamuna","Kaveri"], "Ganga"),
];
var quiz = new Quiz(questions);
evaluate();

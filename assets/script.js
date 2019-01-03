var trivia = $('.gameDiv')
    var questions = [{
        triviaQuestion: 'Cairo is the capital of Ethiopa?',
         mutlChoice: ['True', 'False'],
           answer: "False"
    }, {
        triviaQuestion: 'Nairobi is the capital of Egypt?',
        mutlChoice: ['True', 'False'],
        answer: "False"
    }, {
        triviaQuestion: 'Rabat is the capital of Morocco?',
        mutlChoice: ['True', 'False'],
        answer: "True"
    }]




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

    if (timer ===0){
        console.log(done)
    }
}

$("#startGame").click(function(){
    var fifeMinutes = 60 * 5,
    display = document.querySelector('#time');
    startTimer(fifeMinutes, display);



for (var i = 0; i < questions.length; i++) {
    trivia.append("<h2>" + questions[i].triviaQuestion + "</h2>");
      for (var j = 0; j < questions[i].mutlChoice.length; j++) {
        trivia.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].mutlChoice[j] + "''>" + questions[i].mutlChoice[j]);
      }
    }
    trivia.append("<button id='done'>Done</button>")});

//     var score = {
//         correct: 0,
//         incorrect: 0,
//         counter: 30,
//         countdown: function() {
//           score.counter--;
//           $("#counter-number").html(score.counter);
//           if (score.counter === 0) {
//             console.log("TIME UP");
//             score.done();
//           };

// function done(){
//     $.each($("input[name='question-0']:checked"), function() {
//       if ($(this).val() === questions[0].answer) {
//         score.correct++;
//       }
//       else {
//         score.incorrect++;
//       }
//     });
//     $.each($("input[name='question-1']:checked"), function() {
//       if ($(this).val() === questions[1].answer) {
//         score.correct++;
//       }
//       else {
//         score.incorrect++;
//       }
//     });
//     $.each($("input[name='question-2']:checked"), function() {
//       if ($(this).val() === questions[2].correctAnswer) {
//         score.correct++;
//       }
//       else {
//         score.incorrect++;
//       }
//     });
//     this.result();

// function result() {
//     clearInterval(timer);
//     $(".gameDive").remove();
//     trivia.html("<h2>All Done!</h2>");
//     trivia.append("<h3>Correct Answers: " + this.correct + "</h3>");
//     trivia.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
//     trivia.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>")
// }
// }
// $(document).on("click", "#done", function() {
//     score.done();
//   })
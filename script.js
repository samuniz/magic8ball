$(document).ready(function(){
//variables	
var magic8ball = {};
magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "You can count on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Absolutely", "try again", "Ask again later", "Better not tell you now", "Cannot predict now" ,"Concentrate and ask again" , "Don't count on it",  "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Chances aren't good"];
	

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
  

//defining the answwer method 
magic8ball.askQuestion = function(question) {
  
//fade in answer  
  $("#answer").fadeIn(4000);
  
//change image to the answer image 
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  

  
// find the round, random and length
  
  var findlength = Math.floor(Math.random() * this.listOfAnswers.length);

  // print the answer
  var answer= this.listOfAnswers[findlength];
//Print answer inside of the ball
	 $("#answer").text( answer );
	//input question 
	//console.log(magic8ball.question);
	//console.log(answer);
};	
 
magic8ball.askQuestion();
	

//method to ask question
var onClick = function() {
       
    //hide answer
      $("#answer").hide();
           
    //change imageto the 8      
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
              
    //delay prompt in half second  
      setTimeout(
       function(){
      
    //show prompt     
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8ball.askQuestion(question);
        //shake ball
         $("#8ball").effect( "shake" ); 
        
        }, 500);
    
     };
    $("#questionButton").click( onClick );
      
      
    
              
});

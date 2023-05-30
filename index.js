let house = {}
house.street = "Canto Place"
house.color = "gray"
house.roof = "black"
house.location = function(){console.log(this.street)}
house.location()


function guess(Guess){
    if(Guess = 6){
    console.log("Right")
    }else {
    console.log("Wrong")
    }
    }
    let correctAnswer = 45
     
    function reset(){ return Math.round(Math.random()*100)}
  
    function isAnswerRight(guess, answer){
        if(guess == answer) correctGuess(guess)
    else incorrectGuess(guess)   
    }
function correctGuess(guess){
    console.log("Yay!" + guess + " was the right answer")

}
function correctGuess(guess){
    console.log("BOOOOOOO!" + guess + " was the wrong answer")
}
function guess2(guess){isAnswerRight(guess,correctAnswer)}




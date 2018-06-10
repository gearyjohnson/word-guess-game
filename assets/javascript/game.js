

var movies = ["ferris buellers day off", "bill and teds excellent adventure","back to the future","the breakfast club"];
var photos = ["https://s-i.huffpost.com/gen/1839949/images/n-FERRIS-BUELLER-628x314.jpg","http://www.ramascreen.com/wp-content/uploads/Michael-J.-Fox-Marty-McFly.png","https://files.shandymedia.com/wp-content/uploads/2017/05/14002725/13-bts-80s.jpg","http://digitalspyuk.cdnds.net/17/21/768x432/gallery-1495712686-bill-and-teds-excellent-adventure.jpg"]
var moviePicked = ""; 
var letters = []; 
var space = 0; 
var blanks = []; 
var guessCounter = []; 
var wins  = 0;
var losses = 0;
var tries  = 9;


function startGame() {
	
	tries = 6;

	moviePicked = movies[Math.floor(Math.random() * movies.length)]; 
	letters = moviePicked.split(""); 
	space = letters.length; 
    console.log(moviePicked);
    
    if (movies == "ferris buellers day off"){
        console.log("https://s-i.huffpost.com/gen/1839949/images/n-FERRIS-BUELLER-628x314.jpg");
    } else if (movies == "bill and teds excellent adventure"){
        console.log("http://digitalspyuk.cdnds.net/17/21/768x432/gallery-1495712686-bill-and-teds-excellent-adventure.jpg");
    }else if (movies == "back to the future"){
        console.log("http://www.ramascreen.com/wp-content/uploads/Michael-J.-Fox-Marty-McFly.png");
    } 
    else if (movies == "the breakfast club"){
        console.log("https://files.shandymedia.com/wp-content/uploads/2017/05/14002725/13-bts-80s.jpg");
    } 

	blanks = []; 
    guessCounter = []; 
    
	for (var i=0; i <space; i++){
		blanks.push("_");
	}

	console.log(blanks); 

	
	document.getElementById("guessCounter").innerHTML = tries;
	document.getElementById("spaceInGuess").innerHTML= blanks.join(" ");
	document.getElementById('guessCounter').innerHTML = guessCounter.join(" ");


}


function checkLetters(letter) {

	var letterInWord = false; 
	for (var i=0; i<space; i++) {
		if(moviePicked[i] == letter) {
			letterInWord = true; 
 		}
	}

	
	if(letterInWord){
	
		
		for (var i=0; i<space; i++){

			
			if(moviePicked[i] == letter) {
				blanks[i] = letter; 
			}
		}
		console.log(blanks); 
	}
	
	else {
		guessCounter.push(letter); 
		tries--; 
	}
}


function roundComplete(){

	
	console.log("wins: " + wins + " | losses: " + losses + " | NumGuesses: " + tries);

	
	document.getElementById("guessCounter").innerHTML= tries;
	document.getElementById("spaceInGuess").innerHTML = blanks.join(" "); 
	document.getElementById("guessCounter").innerHTML = guessCounter.join(" "); 
	
	if (letters.toString() == blanks.toString()) {
		wins++; 
		alert("You win!"); 

		
		document.getElementById("wins").innerHTML= wins;
		startGame(); 
	}

	
	else if(tries == 0) {
		losses++; 	
		alert("You lose"); 

		
		document.getElementById("losses").innerHTML= losses; 
		startGame(); 
	}

}


startGame();


document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	
	checkLetters(letterGuessed); 
	roundComplete(); 
}
    




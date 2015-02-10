var textArray = [
"The Iron Yard",
"Kyle",
"Su",
"campus director",
"instructor",
"James",
"Matt",
"Rob",
"Emily",
"Mallory",
"David",
"John",
"Josh",
"Emily",
"Autumn",
"Aaron",
"Greg",
"Mishka",
"Katherine",
"Disruption Corporation" ,
"Crystal Tech Fund",
"ruby",
"rspec",
"rails",
"gem",
"battleship",
"project",
"back end development",
"back end developer",
"back end engineer",
"front end development",
"front end developer",
"front end engineer",
"html",
"css",
"javascript",
"jquery",
"backbone",
"angular",
"Crystal Drive",
"function",
"method",
"array",
"object",
"object oriented",
"SQL",
"database",
"link",
"Wonman",
"bagels",
"breakfast",
"Iron Pints",
"beer",
"snacks",
"coffee",
"Slack",
"email",
"elevator",
"Kate's Cupcake Shop",
"Surf and Paddle",
"hard mode",
"normal mode" ,
"nightmare mode",
"Github",
"headshots",
"watch the planes",
"10th floor",
"tech",
"career",
"Arlington",
"technical",
"web applications",
"industry veterans",
"tech industry",
"talent",
"paul",
"training",
"company",
"TuneYard",
"Sonic Pi",
"tool",
"library",
"framework",
"experience",
"build",
"obscure foreign sports",
"baker",
"describe yourself in five words",
"learn the hard way",
"black magic",
"syntactic sugar",
"conference",
"meet up",
"D.C.",
"Washington",
"startup",
"board games",
"pour over coffee",
"Commonwealth Joe",
"coffee keg",
"garden",
"mama's divinity",
"demo day",
"The College of Wooster",
"The Ohio State University",
"Duke basketball",
"Cleveland",
"Columbus",
"Atlanta",
"it's monday",
"Chipotle",
"Bar Louie",
"friday feelings time",
"friday huddle",
"field trip",
"Crystal Tech Shop",
"Crystal Underground",
"Crystal City Shops",
"highpoint",
"lowpoint",
"stress",
"homework",
"coding",
"programming",
"typing is hard",
"writing code",
"web development",
"web developer",
"intense",
"bootcamp",
"partner",
"Jaleo",
"donuts",
"Mac",
"Women 2.0",
"government",
"Katie",
"Alexander",
"class",
"learn to code",
"academy",
"ecosystem",
"education",
"accelerator",
"syntax",
"happy hour",
"Underscore",
"vanilla javascript",
"architecture",
"brutalist",
"metro",
"ROT-13",
"Fizzbuzz",
"greg-mode",
"test driven development",
"TDD",
"workflow",
"passion",
"beeramid",
"inaugural cohort",
]

console.log(textArray);

var getRandomWord = function() {
	
	var index = Math.floor(Math.random() * (159 - 0 + 1)) + 0;
	return textArray[index];
}


var capitaliseFirstLetter = function(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
    
}


var contructSentence = function(wordNum){
	var sentence = [];

	var counter = 1;

	while (counter <= wordNum) {

		if (counter === wordNum) {
			sentence.push(getRandomWord());
		}

	sentence.push(getRandomWord() + ' ');
	counter++;
	}

	sentence[wordNum] = ". ";
	sentence = sentence.join("");
	sentence = capitaliseFirstLetter(sentence);

	return sentence;
	console.log(sentence);
}

var contructParagraph = function() {
	var paragraph = (contructSentence(9) + contructSentence(5) + contructSentence(7)
	 + contructSentence(6) + contructSentence(8) + contructSentence(4));
	return paragraph;
	
	}


	console.log(contructParagraph());


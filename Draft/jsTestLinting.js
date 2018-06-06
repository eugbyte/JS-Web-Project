//WORD COUNT ESTIMATOR
//https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname3

var wordArray = document.getElementsByClassName("left")[0].getElementsByTagName("P");

console.log(wordArray); //what does it log? HTMLCollection[p]0: plength: 1__proto__: HTMLCollection

//note that there may be multiple paragraphs

//for now, just focus on 1 paragraph, looping can be done later

var splitedArray = wordArray.split(""); //returns an array consisting of the paragrpah words, e.g. ["lorem", "ipsum"] without the whitespace
var estimmatedTime = splitedArray.length; //return the length of the array, which in this context will be the number of words in the paragrpah
document.getElementById("estimateLeft").innerHTML = "Average reading time " + estimmatedTime; //now need to print the words back into the page
  


//use function borrowing/currying for the right container

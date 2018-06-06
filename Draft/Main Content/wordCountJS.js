//WORD COUNT ESTIMATOR
//https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname3

//getElementByClassName returns a quasi-array of element belonging to the same class, e.g. [[a, b, c], [d, e,]]

var wordArrayLeft = document.getElementsByClassName("left")[0].getElementsByTagName("P");

console.log(wordArrayLeft); //what does it log? HTMLCollection[p]0: plength: 1__proto__: HTMLCollection

var wordArrayRight = document.getElementsByClassName("right")[0].getElementsByTagName("P");

console.log(wordArrayRight);

function calcTime(wordArray, id) {
  var accumulator = 0;
  for (i = 0; i < wordArray.length; i++) {
    var splitedArray = wordArray[i].split(" "); //returns an array consisting of the paragrpah words, e.g. ["lorem", "ipsum"] without the whitespace
    accumulator += splitedArray.length; //return the length of the array, which is the number of words in the paragraph. Shove the value into the accumulator
  }
document.getElementById(id).innerHTML = "Average reading time " + accumulator; //now need to print the words back into the page
}

calcTime(wordArrayLeft, "estimateLeft");
calcTime(wordArrayRight, "estimateRight");




//use function borrowing/currying for the right container

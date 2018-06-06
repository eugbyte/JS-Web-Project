//NAVBAR
    //Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
    //from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
        //THE SPACE IN " responsive" AS CF TO "responsive" IS IMPORTANT--OTHERWISE THE CODE WILL NOT WORK. This is because you are ultimately changing the className to "topnav responsive", which can be invoked through CSS as .topnav.responsive, not "topnavresponsive".
        //className gets and sets the value of the class attribute of the specified element.
        //className is now "topnav responsive", which can be invoked through css as .topnav.responsive, but not .topnav .responsive with space in between.
        //the rationale of adding to the className instead of overriding it, i.e. setting it to .responsive, is that you still want to inherit the .topnav CSS qualities to the extent that it does not conflict with .topnav .responsive.
        //*.topnav .reponsive will overide .topnav due to specificity?
      } else {
        x.className = "topnav";
        //If the user had already invoked the function before, the className would have been changed to "topnav responsive". If this is the case, change the className back to "topnav".
      }
    }

//*CAROUSEL
var slideIndex = 1;
    //set the slideIndex to 1


    function plusDivs(n) {
      showDivs(slideIndex += n);
    } //When the user clicks one of the buttons, call plusDivs().The plusDivs() function subtracts one or  adds one to the slideIndex. Subsequently, the value of slideIndex is passed into showDiv().

    //The showDivs() display an element of the quasi-array, [i]-1. 
    function showDivs(n) {
      var x = document.getElementsByClassName("mySlides");
      //returns a quasi-array of elements of .mySlides class. Recall that there are 3 images, img1, img2, img3.
      if (n > x.length) {
        slideIndex = 1;
      };
      //If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to 1. However, because of the last-line of the showDivs() function, i.e. x[slideInex-1] the slideIndex effectively reduces by [1] to [0]. Therefore, img1 is displayed.
      if (n < 1) {
        slideIndex = x.length;
      };
      //If the slideIndex is less than 1 it is set to number of elements (x.length).
      //so if the user clicks previous when slideIndex is 0, the slideIndex will be set to 3. Upon the last line x[slideIndex-1], the slideIndex will reduce to 2, calling the last array [2].
      for (i = 0; i < x.length; i++) { //for every element in the quasi-array...
        x[i].style.display = "none";
        //Hides (display="none") all elements with the class name "mySlides"
        //the .style property targets the CSS property of the element, and the .display targets the display property of the element
      };
      x[slideIndex - 1].style.display = "block";
      //Only display (display="block") the element with the given slideIndex, while the rest of the elements remaining hidden. 
    };

    showDivs(slideIndex);
    //When showDivs() is executed for the first time when the page load, before clicking the buttons, the img to be displayed will be that of [0].All images in the quasi-array are hidden except for n-1. See the last line of showDivs() -- x[slideIndex-1], i.e. 1-1 = [0].
    //If placed before defining what showDiv() is, like what WC3 did, then essentially it is hoisting. JS allow elements to be invoked before defining them due to 2 stage creation and execution context. plusDiv() and showDics() are created at the creation context context. Will be executed later upon click. 
    
    
//INTERACTION WITH DOM
  var buttonS = document.getElementsByClassName("button");
    //returns a quasi-array of elements belonging to .button class. Can be assessed by buttonS[i].
buttonS[0].addEventListener("click", function() {
    plusDivs(-1)
    });
buttonS[1].addEventListener("click", function() {
      plusDivs(1)
    });
//IMPORTANT!! When passing parameter values into a function under addEventListener, MUST use an "anonymous function" that calls the specified function with the parameters, like above. Otherwise, will not work. For example, calling buttonS[0].addEventListener("click", plusDivs(-1)) will not work.
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
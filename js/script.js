
// home page text animation
(function (){
    var words = [
        "Video Production",
        "Photo Manipulation",
        "3D Animation",
        "3D Modeling",
        "Computer Programming",
    ],
    i = 0;
    setInterval(function(){
        $('#words').fadeOut(function(){
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
    }, 2500)
})();

// expand or contact the accordion elements
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("myCaptions");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  y[myIndex-1].style.display = "block"; 
  setTimeout(carousel, 3500); // Change image every 2 seconds 
}
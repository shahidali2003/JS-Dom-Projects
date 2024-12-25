var cursor = document.querySelector(".cursor");
var h1 = document.querySelector("h1");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function(dets){
  cursor.style.left = dets.clientX + "px";
  cursor.style.top = dets.clientY + "px";

});

h1.addEventListener("mouseenter", function() {

    cursor.style.backgroundColor = "yellow"; 
    cursor.style.opacity = "1"; 
    cursor.style.transform = "scale(1)";          
});

h1.addEventListener("mouseleave", function() {
   
    cursor.style.backgroundColor = "blue";
    cursor.style.opacity = "1";  
    cursor.style.transform = "scale(1.5)";        
});
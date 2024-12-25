var circle =document.querySelector(".container");
var btn = document.querySelector("button");

var n =0;
btn.addEventListener("click", function() {

if(n ==0){
    circle.style.backgroundColor = "yellow";
    n = 1;
}
else{
    circle.style.backgroundColor = "white";
    n = 0;
 
}
});
var btn = document.querySelectorAll("button");
var body = document.querySelector("body");

btn.forEach(function(elem){
elem.addEventListener("click",function(){
  body.style.backgroundColor = elem.innerHTML
})
});
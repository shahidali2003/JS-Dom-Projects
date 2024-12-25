var btn = document.querySelector("button");
var h2 = document.querySelector("h2");

var tems = ["CSK","LSG","KKR","RR","PBKS","RCB","DC","GT","MI","SRH"];

btn.addEventListener("click", function(){

     var a1 = Math.floor(Math.random()*255);
     var a2 = Math.floor(Math.random()*255);
     var a3 = Math.floor(Math.random()*255);

var data = Math.floor(Math.random()*tems.length);
 h2.innerHTML =tems[data];

 var color = `rgb( ${a1}, ${a2}, ${a3})`;
 h2.style.backgroundColor = color;
});



// var h2 = document.querySelector("h2");
// var btn = document.querySelector("button");



// var tems = ["CSK","RCB","RR","SRH","DC","PBKS","GT","LSG","MI","KKR"]
// btn.addEventListener("click", function(){

//      var c1 = Math.floor(Math.random() * 255);
//      var c2 = Math.floor(Math.random() * 255);
//      var c3 = Math.floor(Math.random() * 255);
    
//      var data = Math.floor(Math.random()*tems.length);
//      h2.innerHTML = tems[data];
//      h2.style.backgroundColor =`rgb(${c1},${c2},${c3})`; 
// });
































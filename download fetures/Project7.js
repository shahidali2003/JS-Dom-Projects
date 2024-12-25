var btn = document.querySelector("button");
var h1 =document.querySelector("h1");
var grow = document.querySelector(".grow");

sem =0;
btn.addEventListener("click", function(){
 var data =setInterval(() => {
  sem++;
  h1.innerHTML = sem + "%";
  grow.style.width = sem + "%";
 },100);

setTimeout(() => {
  clearInterval(data);
  btn.innerHTML = "Downloaded";
  btn.style.opacity = "0.4";
  btn.style.pointerEvents = "none";
},10000);

});

// var btn = document.querySelector("button")
// var h1 = document.querySelector("h1")
// var calm = document.querySelector(".calm")

// var grow =0;

// btn.addEventListener("click",function(){
//    var gro = setInterval(() => {
//        grow++;
//        h1.innerHTML = grow + "%"; 
//        calm.style.width = grow + "%";
//     },70);

//     setTimeout(() => {
//       clearInterval(gro);
//       btn.innerHTML = "Download";
//       btn.style.opacity = "0.4";
//       btn.style.pointerEvents = "none";  
//     },7000);
// });

















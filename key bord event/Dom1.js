// ye Program hi keydown and keyup ka

// var h1 =document.querySelector("h1");

// document.addEventListener("keydown", function(dets){
//    h1.innerHTML = dets.code;
//    console.log(dets.code);
// })


var img = document.querySelector("img");
var moveX  =0;
var moveY  =0;   

document.addEventListener("keydown", function(dets){
   if(dets.code =="ArrowRight"){
    moveX +=10; 
    img.style.left = moveX + "%";
   }
 else if(dets.code =="ArrowLeft"){
    moveX -=10; 
    img.style.left = moveX + "%";
 }
 else if(dets.code =="ArrowUp"){
    moveY -=10; 
    img.style.top = moveY + "%";
 }
 else if(dets.code =="ArrowDown"){
    moveY +=10; 
    img.style.top = moveY + "%";
 }
 else{
    console.log("invalid button Press")
 }
});



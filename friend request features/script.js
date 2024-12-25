
var h1 =document.querySelector("h1");

var btn = document.querySelector("button");
  
var flag =1;
btn.addEventListener("click", function(){

  if(flag == 1){
    h1.style.color = "brown";
    h1.innerHTML ="FR Requesst sending...";

    setTimeout(function(){
      h1.style.color = "green";
      h1.innerHTML ="Friends";
     btn.innerHTML ="remove Friend";
    },3000)
    flag =0;
  }
  else{
    setTimeout(function(){
      h1.style.color = "black";
      h1.innerHTML ="Stranger";
      btn.innerHTML ="Add Friend"
    },)
    flag =1;
  }
   

});








// var circle  = document.querySelector(".circle")
// var btn = document.querySelector("button")

// var buttons = "on"
// btn.addEventListener("click", function(){
//   if(buttons == "on"){
//     circle.style.backgroundColor ="yellow"
//     btn.textContent = "on"
//     console.log("clicked")
//     buttons = "off"
//   }
//   else{
//     circle.style.backgroundColor ="transparent"
//     btn.textContent = "off"
//     console.log("clickoid")
//     buttons = "on"
//   };
// });



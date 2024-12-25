var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var btn = document.querySelector("button");

btn.addEventListener("click", function(){

   var first = img1.getAttribute("src");
   var second =img2.getAttribute("src");

   
   img1.setAttribute("src",second);
   img2.setAttribute("src", first);
});







































// var btn = document.querySelector("button");
// var img1 = document.querySelector(".img1");
// var img2 = document.querySelector(".img2");


// btn.addEventListener("click", function(){

//    const change1 = img1.getAttribute("src");
//    const change2 = img2.getAttribute("src");

//     img1.setAttribute("src", change2);
//     img2.setAttribute("src", change1);
//     console.log("compleately done!1");
//     console.log("compleately done!2");

// });




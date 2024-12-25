// var btn = document.querySelector("button");

// var body = document.querySelector("body");

// btn.addEventListener("click", function(){

//     var img = document.createElement("img");
//     img.setAttribute("src","https://img.freepik.com/free-photo/close-up-winged-colorful-insect_209690-171.jpg?t=st=1733640231~exp=1733643831~hmac=910b42644281af89c78ca5b9684c2311aab53c9a1d6460f69d4cbb83e084c53d&w=996")
//     body.appendChild(img);
//     img.style.width ="80px";

//    var overflowX = Math.random()*96;
//    var overflowY = Math.random()*92;

//    img.style.position = "absolute";
//    img.style.left = overflowX + "%";
//    img.style.top = overflowY + "%";

    
// //    console.log(overflowX);
// //    console.log(overflowY);
// });











var btn = document.querySelector("button");

var body =document.querySelector("body");


var imageUrls = [
    'https://img.freepik.com/free-photo/side-view-rhinoceros-beetle_1112-472.jpg?t=st=1733640197~exp=1733643797~hmac=6d178d9b0a3da64a24e95e07715d8d71377eb74e81d4b289bed5533ede6a92a5&w=996',
    'https://img.freepik.com/free-photo/close-up-winged-colorful-insect_209690-171.jpg?t=st=1733640231~exp=1733643831~hmac=910b42644281af89c78ca5b9684c2311aab53c9a1d6460f69d4cbb83e084c53d&w=996',
    'https://img.freepik.com/free-photo/brown-ant-white-background_1112-478.jpg?t=st=1733640257~exp=1733643857~hmac=379acd2f9e0d44e2a908edb6cd271fffa9e9b88d077b266d754905dc2b806682&w=900',
    'https://img.freepik.com/free-photo/frog-leg-beetle-sagra-sp-white-background-frog-leg-beetle-sagra-sp-closeup_488145-2859.jpg?t=st=1733640569~exp=1733644169~hmac=d53f34eabb6d5d4fcf7c347ceccf8a8297d6de18d412e348ed27b62e095bd6bf&w=996',
];

btn.addEventListener("click", function(){

   var overflowX = Math.random() * 96;
   var overflowY = Math.random() * 92;

    var sumo =Math.random()*360;
    

    var img = document.createElement("img");
    img.setAttribute("src","https://png.pngtree.com/png-clipart/20190906/original/pngtree-flying-insects-png-image_4569430.jpg")
    body.appendChild(img);
    img.style.height = "60px"
    img.style.position = "absolute";
    img.style.left = overflowX + "%";
    img.style.top = overflowY + "%";
    
    // img.style.transform = `rotate(${sumo}deg)`;
    img.style.transform = "rotate("+sumo+"deg)";

   var randomidx = Math.floor(Math.random() * imageUrls.length);
    img.setAttribute("src",imageUrls[randomidx]);
     
});




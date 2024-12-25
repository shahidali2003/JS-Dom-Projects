// var data = [
//   {
// name:"shahid",
// age:21,
// city:"bhopal",
// },

// {
//   name:"gulam",
//   age:45,
//   city:"patna",
//   },

//   {
//     name:"irfan",
//     age:35,
//     city:"goa",
//     },

// {
//   name:"rahul",
//   age:32,
//   city:"chennai",
//   },

// ];

// var sum =0;

// data.forEach(function(elem){
//   sum = sum + elem.age;
// });
// console.log(sum);

// if(sum<=100){
//   console.log("we are eligible for lift");
// }
// else{
//   console.log("we are not eligible for lift");
// }


var data = [
  {
    name: "Jinnat",
    age: 17,
    city: "Kerla",
    salry: 1500,
  },

  {
    name: "Irfan",
    age: 45,
    city: "Basantpur",
    salry: 2500,
  },

  {
    name: "Shahid",
    age: 21,
    city: "Bhopal",
    salry: 1800,
  },
  {
    name: "Gulam",
    age: 30,
    city: "Patna",
    salry: 2000,
  }
];

sum =``;
data.forEach(function(elem){
  sum+= `<div class="card">
  <h1>${elem.name}</h1>
  <h2>Age:${elem.age}, City:${elem.city}</h2>
  <h4>Encome:${elem.salry}</h4>
  <p>Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Ipsum, culpa.</p>
</div>` ;
  
});

console.log(sum);

var body = document.querySelector('body');

body.innerHTML = sum;

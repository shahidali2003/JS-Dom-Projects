const data = [
    {
        story:"https://i.pinimg.com/736x/63/29/64/6329640569be23e0f9f1a74d19036eb1.jpg",
        profilePhoto: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Riya"
    },
    {

        story:"https://i.pinimg.com/736x/c5/b4/d9/c5b4d9b05b1095d451374a07d0f1880c.jpg",
        profilePhoto: "https://images.unsplash.com/photo-1723179342888-5bc6fab80c62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Sherya"
    },
    {

        story:"https://i.pinimg.com/736x/ef/9b/09/ef9b09e6375dfc926d35f62d24200cad.jpg",
        profilePhoto: "https://i.pinimg.com/736x/cb/07/88/cb0788d440fc95fedbcd39b6ddcf140b.jpg",
        username: "Devine"
    },
    {

        story:"https://i.pinimg.com/736x/15/ce/df/15cedf7d13ce850748a94da1795251bd.jpg",
        profilePhoto: "https://i.pinimg.com/736x/4e/8d/52/4e8d52323c407226e89f2256312c5608.jpg",
        username: "Anoyan"
    },
    {

        story:"https://i.pinimg.com/736x/ef/f2/13/eff2136762e3b550f4b139f19f8c164b.jpg",
        profilePhoto: "https://i.pinimg.com/736x/b8/13/e0/b813e0a433b348f2ff5b974d5b14a699.jpg",
        username: "Manish"
    },
    {

        story:"https://i.pinimg.com/736x/ab/ec/ba/abecbaa1cb99809ea51ca6dd1af874ba.jpg",
        profilePhoto: "https://i.pinimg.com/736x/03/db/4e/03db4e33d4f55922fc5aaeb09fce71bf.jpg",
        username: "Arman"
    },
    {

        story:"https://i.pinimg.com/736x/7d/5e/ee/7d5eee58007712ecdf674b01be45eb71.jpg",
        profilePhoto: "https://i.pinimg.com/736x/d6/2b/ba/d62bbabb894b378121855905e8648840.jpg",
        username: "Alok"
    },
    {

        story:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profilePhoto: "https://i.pinimg.com/736x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg",
        username: "Raghu"
    },
    {

        story:"https://i.pinimg.com/736x/7e/7b/84/7e7b84419fe2388ccb3bfaf486dcfa27.jpg",
        profilePhoto: "https://i.pinimg.com/736x/8e/f5/d7/8ef5d715aa46c5ce45fd642e485f43ae.jpg",
        username: "Subham"
    },
    {
    
        story: "https://i.pinimg.com/736x/a3/56/a8/a356a8f09818e3eb01868fe5d1de2e5d.jpg",   
        profilePhoto: "https://i.pinimg.com/736x/9b/d4/6b/9bd46be27e0fcf63a6bb28670b6e8e49.jpg",
        username: "Lokesh"
    }
];


sum = '';
data.forEach(function(elem,idx){
  sum +=`<div class="story">
                <img id="${idx}" src= ${elem.profilePhoto} alt="A">
        </div>`;
});


var story = document.querySelector(".storiyan");
story.innerHTML = sum;

var story = document.querySelector(".storiyan");
var storiyan =document.querySelector(".storiyan");
var growth = document.querySelector(".growth");
var changes = document.querySelector(".screen h2")

storiyan.addEventListener("click", function(e){

     var grow = 0;
    const int = setInterval(() => {
        grow++;
        growth.style.width = grow + "%"; 
    
      }, 30);
    

    var header = document.querySelector(".header");
    var story = data[e.target.id];

    var screen =document.querySelector(".screen");
    header.style.display = "none";
    screen.style.display= "block";
    document.querySelector(".screen").style.backgroundImage=`url(${story.story})`;
    changes.innerHTML = `${story.username}`;

    setTimeout(function(){
        document.querySelector(".screen").style.display= "none";
        clearInterval(int);
    },3000)
});

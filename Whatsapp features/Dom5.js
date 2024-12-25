var data  = [
    {
      name: "Aman Khan",
      profilePhoto: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "2 minutes ago"
    },
    {
      name: "Neha Sharma",
      profilePhoto: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "1 hour ago"
    },
    {
      name: "Rohan Mehta",
      profilePhoto: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "1 day ago"
    },
    {
      name: "Priya Singh",
      profilePhoto: "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "3 hours ago"
    },
    {
      name: "Sanya Malik",
      profilePhoto: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "5 minutes ago"
    },
    {
      name: "Vikram Gupta",
      profilePhoto: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "8 hours ago"
    },
    {
      name: "Arjun Verma",
      profilePhoto: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "20 minutes ago"
    },
    {
      name: "Kriti Agarwal",
      profilePhoto: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      statusTime: "45 minutes ago"
    },
    {
      name: "Rahul Jain",
      profilePhoto: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
      statusTime: "2 days ago"
    },
    {
      name: "Ishita Das",
      profilePhoto: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600",
      statusTime: "10 minutes ago"
    }
  ];

  
   sum = '';

  data.forEach(function(elem,idx){
       sum+= ` <div class="relative" id='${idx}'>
              <img id='${idx}' src="${elem.profilePhoto}" alt="A">
            <div class="parts">
                <h3>${elem.name}</h>
                 <h5>${elem.statusTime}</h5>   
            </div>                                              
           </div>`
  })
  // console.log(sum);

 var value = document.querySelector(".status-cont");
  value.innerHTML = sum;
  
var relative = document.querySelector(".relative"); 
var full = document.querySelector("#full");


value.addEventListener("click", function(dets){
   
 var gold =data[dets.target.id];

 full.style.display = "block";
 
 full.style.backgroundImage= `url(${gold.profilePhoto})`;
 
 setTimeout(() => {
   full.style.display="none";
 },3000);

  });

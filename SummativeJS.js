/**
 * Reveals hidden content on click
 * @param {string} yourself 
 */
function reveal(yourself){
    let hidform = document.getElementById(yourself);
    if(hidform.classList.contains("hidden")){
        hidform.classList.remove("hidden");
    }else{
        hidform.classList.add("hidden");
    }}

let contact1 = document.getElementById("contact1");
contact1.addEventListener("click", ()=>{
    reveal("hidform1");
});

let contact2 = document.getElementById("contact2");
contact2.addEventListener("click", ()=>{
    reveal("hidform2");
});

let giftdetails = document.getElementById("giftdetails");
giftdetails.addEventListener("click", ()=>{
    reveal("gift");
});

let graphBtn = document.getElementById("graphBtn");
graphBtn.addEventListener("click", ()=>{
    reveal("graph");
});

// contact.addEventListener("click", ()=>{
//     let hidform = document.getElementById("hidform");
//     if(hidform.classList.contains("hidden")){
//         hidform.classList.remove("hidden");
//     }else{
//         hidform.classList.add("hidden");
//     }
// });


//let arrow = document.getElementById("arrow");
//arrow.addEventListener("mouseover",()=>{
//    
//    
//})

let cs = document.querySelectorAll(".card");
/**
 * Makes all cards on the website pop up when hovered over
 */
cs.forEach(box =>{
    box.addEventListener("mouseover", ()=>{
        box.style.position = "relative";
        box.style.bottom = "6px";
        box.style.top = "0px";
        box.style.boxShadow = "5px 5px gray";
    });
    box.addEventListener("mouseout", ()=>{
        box.style.boxShadow = "0px 0px";
        box.style.position = "relative";
        box.style.bottom = "0px";
        box.style.top = "5px";
    });
});

let submits = document.querySelectorAll("[type=\"submit\"]");

submits.forEach(buttons =>{
    buttons.addEventListener("click", ()=>{
        alert("Thank you for submitting");
    });
});



var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
/**
 * Code taken from www.w3schools.com. (n.d.). How To Create a Fullscreen Video Background. [online] Available at: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp.
 * Allows user to pause/play the background video playing when they first enter the website.
 */
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

// I tried to follow an online tutorial to make a graph but I couldn't even get that to work
// const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: 'Weekly Sales',
//       data: [18, 12, 6, 9, 12, 3, 9],
//       backgroundColor: [
//         'rgba(255, 26, 104, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(0, 0, 0, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 26, 104, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//         'rgba(0, 0, 0, 1)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   // config 
//   const config = {
//     type: 'bar',
//     data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   };

//   // render init block
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
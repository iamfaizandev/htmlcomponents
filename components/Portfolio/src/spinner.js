var loading = document.getElementById('loader');
window.addEventListener("load",function(){
loading.style.display = "none";
})

// clock===================

function Clock(){
  var now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
  document.getElementById("date").innerHTML = now.toLocaleDateString();
}
function bodyload(){
  setInterval(Clock,1000);
  var date = new Date();
  var hrs = date.getHours();
 
}

//Typing-Word================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Full-Stack Web Developer", "Web Desginer", "Photographers"];
const typingDelay = 200;
const erasingDelay = 150;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



       

//dark-mode

// function DarkMode(){
//   var body = document.querySelector("body");
//   var theme = document.getElementById("theme");        
           
//     if(theme.checked){
//       body.className = "dark-mode nav-list-dark nav-bar";
                
                
//       } else{
//       body.className = "light-mode nav-list-light nav-bar";
               
//       }
//   }
    
       
     
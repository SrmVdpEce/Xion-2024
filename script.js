
// // poster slideshow
// let slideIndex = 0;
// showSlides();

// 

// // upper slider
// let upperslideIndex = 0;
// uppershowSlides();

// function uppershowSlides() {
//   let i;
//   let upperslides = document.getElementsByClassName("mySlidesupper");
//   let upperdots = document.getElementsByClassName("doter");
//   for (i = 0; i < upperslides.length; i++) {
//     upperslides[i].style.display = "none";  
//   }
//   upperslideIndex++;
//   if (upperslideIndex > upperslides.length) {upperslideIndex = 1}    
//   for (i = 0; i < upperdots.length; i++) {
//     upperdots[i].className = upperdots[i].className.replace(" active", "");
//   }
//   upperslides[upperslideIndex-1].style.display = "block";  
//   upperdots[upperslideIndex-1].className += " active";
//   setTimeout(uppershowSlides, 3000); // Change image every 2 seconds
// }

// // let sections=documnet.queryselectorAll('section')

// // window.onscroll =()=>{
// //   sections.forEach(sec => {
// //     let top = window.scrollY;
// //     let offset =sec.offsetTop -150;
// //     let height = sec.offsetHeight;

// //     if(top >=offset && top< offset +height){
// //       sec.classList.add('show-animate');
// //     }
// //     else{
// //       sec.classList.remove('show-animate');
// //     }
// //   });
// // }
// // timer
// const days=document.querySelector("#days");
// const hours=document.querySelector("#hours");
// const minutes=document.querySelector("#minutes");
// const seconds=document.querySelector("#seconds");
// // const mseconds=document.querySelector("#mseconds");

// const currentYear=new Date().getFullYear();
// const newYear=new Date(`september 22 ${currentYear} 00:00:00`);

// function UpdateTime(){
//   const currentDate=new Date();
//   const diff=newYear-currentDate;
//   const d=Math.floor(diff/1000/60/60/24);
//   const h=Math.floor((diff/1000/60/60)%24);
//   const m=Math.floor((diff/1000/60)%60);
//   const s=Math.floor((diff/1000)%60);
//   const ms=Math.floor(diff%1000);

//   days.innerHTML=d<10?"0"+d:d;
//   hours.innerHTML=h<10?"0"+h:h;
//   minutes.innerHTML=m<10?"0"+m:m;
//   seconds.innerHTML=s<10?"0"+s:s;
//   // mseconds.innerHTML=ms<10?"0"+ms:ms;
// }
// setInterval(UpdateTime,1000);




// const sendChatBtn = document.querySelector(".chat-input span");
//     const chatInput = document.querySelector(".chat-input textarea");
//     const chatbox = document.querySelector(".chatbox");
//     const chatToggler = document.querySelector(".chatbot-toogler");

//     let userMessage;
//     const API_KEY = "";

//     const createChatLi = (message, className) => {
//       const chatLi = document.createElement("li");
//       chatLi.classList.add("chat", className);
//       let ChatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
//       chatLi.innerHTML = ChatContent;
//       return chatLi;
//     }
//     const generateResponse = () => {

//     }
//     const handleChat = () => {
//       userMessage = chatInput.value.trim();
//       if (!userMessage) return;

//       chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//       setTimeout(() => {
//         chatbox.appendChild(createChatLi("Currently All our servers are under maintaince, for further queries E-Mail to AbhigyanAI23@gmail.com.", "incomming"));
//         generateResponse();
//       }, 900);
//     }
//     chatToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
//     sendChatBtn.addEventListener("click", handleChat);


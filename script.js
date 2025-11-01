const actorImages = [
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane%201.webp?raw=true",
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane%202.webp?raw=true",
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane%203.jpg?raw=true",
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane4.jpg?raw=true",
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane5.jpg?raw=true",
  "https://github.com/codewith-chiran/Harshvardhan/blob/main/harshvardhanrane%206.jpg?raw=true"
];

let index = 0;
const mainActor = document.getElementById("mainActor");

setInterval(() => {
  index = (index + 1) % actorImages.length;
  mainActor.style.opacity = 0;
  setTimeout(() => {
    mainActor.src = actorImages[index];
    mainActor.style.opacity = 1;
  }, 800);
}, 5000);

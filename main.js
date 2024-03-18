const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer.", "UI/UX Designer.", "Gamer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
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

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


const video = document.querySelector(".video-container video");
const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseenter", () => {
  video.play();
  hoverText.classList.remove("active");
});

video.addEventListener("mouseleave", () => {
  video.pause();
  hoverText.classList.add("active");
});

const video2 = document.querySelector(".video-container2 video");
const hoverText2 = document.querySelector(".video-container2 .hover-text");

video2.addEventListener("mouseenter", () => {
  video2.play();
  hoverText2.classList.remove("active");
});

video2.addEventListener("mouseleave", () => {
  video2.pause();
  hoverText2.classList.add("active");
});

const video3 = document.querySelector(".video-container3 video");
const hoverText3 = document.querySelector(".video-container3 .hover-text");

video3.addEventListener("mouseenter", () => {
  video3.play();
  hoverText3.classList.remove("active");
});

video3.addEventListener("mouseleave", () => {
  video3.pause();
  hoverText3.classList.add("active");
});

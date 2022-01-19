const content = document.querySelectorAll(".main-content");
const answer = document.querySelectorAll(".content-section-wrapper p");
const ask = document.querySelectorAll(".main-content > h2");
const image = document.querySelectorAll(".main-content img");


for(let i=0; i<content.length; i++){
    content[i].addEventListener("click", function(){
        answer[i].classList.toggle("displayNone");
        content[i].classList.toggle("border-bottom");
        ask[i].classList.toggle("blackHeading");
        image[i].classList.toggle("rotateImage");
    }); 
}
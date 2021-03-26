"use strict"

// changing colors on click
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickMeBtn = document.getElementById("click_me");
const colorCode = document.getElementById("color_code");

clickMeBtn.addEventListener("click", changeColor);


// change colors automatically
const surpriseBtn = document.getElementById("surprise");

surpriseBtn.addEventListener("click", changeColorAuto);

function changeColorAuto(){
    var funcID = setInterval(changeColor,200);
    
    setTimeout(stopInterval,3000);

    function stopInterval(){
        clearInterval(funcID)
    }

}


function changeColor() {
    let randomHex = "#" + getRandomHex();
    document.body.style.background = randomHex;
    colorCode.innerText = randomHex;
}

function getRandomHex(){
    let number = "";

    for(let i=0; i<6; i++){
        let a = Math.floor(Math.random() * hex.length);
        number += hex[a];
    }

    return number
}


// resetting ui
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function(){
    document.body.style.background = "#e6e6e6";
    colorCode.innerText = "#e6e6e6";
});


// shutting down

const showHideContent = document.querySelector(".wrapper");
const powerBtn = document.querySelector(".power_off");
const template = document.querySelector(".template");
const header = document.querySelector(".header");

powerBtn.addEventListener("click", changeView);

function changeView(e){
    console.log("helloooo")
    showHideContent.classList.toggle("show_hide");
    template.classList.toggle("template_display");
    header.classList.toggle("header_shutDown");
}




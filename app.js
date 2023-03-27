const form = document.querySelector("form");
const color1 = form.querySelector("#color1");
const color2 = form.querySelector("#color2");
const orientationInput = form.querySelector("#orientation");
const bodyBg = document.querySelector("body");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
}

color1.addEventListener("input", changeBg);
color2.addEventListener("input", changeBg);
orientationInput.addEventListener("input", changeBg)

function changeBg(){

    bodyBg.style.backgroundImage = 'linear-gradient('
    + orientationInput.value + 'deg, ' + color1.value + ', ' + color2.value + ')';
    form.querySelector("#orientationTxt").value = `Orientation:  ${orientationInput.value}°`;
    form.querySelector("#label1").textContent = color1.value;
    form.querySelector("#label2").textContent = color2.value;

    document.querySelector(".input-group:nth-child(1)").style.backgroundColor = color1.value;
    document.querySelector(".input-group:nth-child(2)").style.backgroundColor = color2.value;
}

const copyBtn = form.querySelector("#copy-btn");
copyBtn.addEventListener("click", copyGradient);

function copyGradient(){
    navigator.clipboard.writeText('background: linear-gradient('
    + orientationInput.value + 'deg, ' + color1.value + ', ' + color2.value + ')')
}

const randomBtn = form.querySelector("#random-btn")
randomBtn.addEventListener("click", generateColor)

function generateColor(){
    random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    random2 = "#" + Math.floor(Math.random()*16777215).toString(16);

    bodyBg.style.backgroundImage = 'linear-gradient('
    + orientationInput.value + 'deg, ' + random1 + ', ' + random2 + ')';
    label1.textContent = random1;
    label2.textContent = random2;
    
    document.querySelector(".input-group:nth-child(1)").style.backgroundColor = random1;
    document.querySelector(".input-group:nth-child(2)").style.backgroundColor = random2;
}
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
    adaptInputsColor();
}

const copyBtn = form.querySelector("#copy-btn");
copyBtn.addEventListener("click", copyGradient);
let lock = false;
function copyGradient(){
    navigator.clipboard.writeText('background: linear-gradient('
    + orientationInput.value + 'deg, ' + color1.value + ', ' + color2.value + ')')

    if(lock) return;

    lock = true;
    copyBtn.classList.add("active")
  
    setTimeout(() => {
    copyBtn.classList.remove("active")
    lock = false;
    }, 1000)
}

const randomBtn = form.querySelector("#random-btn")
randomBtn.addEventListener("click", generateColor)

function generateColor(){
    color1.value = random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = random2 = "#" + Math.floor(Math.random()*16777215).toString(16);

    bodyBg.style.backgroundImage = 'linear-gradient('
    + orientationInput.value + 'deg, ' + random1 + ', ' + random2 + ')';

    label1.textContent = random1;
    label2.textContent = random2;
    
    document.querySelector(".input-group:nth-child(1)").style.backgroundColor = random1;
    document.querySelector(".input-group:nth-child(2)").style.backgroundColor = random2;
}

function adaptInputsColor(){
    const colorLabels = [...document.querySelectorAll(".input-group label")]
    colorLabels.forEach(label => {
      const hexColor = label.textContent.replace("#", "");
      const red = parseInt(hexColor.slice(0,2), 16)
      const green = parseInt(hexColor.slice(2,4), 16)
      const blue = parseInt(hexColor.slice(4,6), 16)
  
      const yiq = (red * 299 + green * 587 + blue * 144) / 1000;
      console.log(yiq);
   
      if(yiq >= 128) {
        label.style.color = "#111"
      }
      else {
        label.style.color = "#f1f1f1"
      }
    })
  }
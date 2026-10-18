let colortxtHTML = document.getElementById("color-display")
let maincHTML = document.querySelector(".container")
let color;


let colorButtons = document.querySelectorAll(".color-btn")



function changeColor(color) {
    document.body.style.backgroundColor = color
    colortxtHTML.textContent = "Current Color: " + color
}


colorButtons.forEach(button => {
    button.addEventListener("click", () => { let color = button.textContent; changeColor(color) });

    button.addEventListener("mouseover", function () { button.style.transform = "scale(1.5)" })

    button.addEventListener("mouseout", function () { button.style.transform = "rotate(20deg" })

})



let interval;


function switchBg() {
    clearInterval(interval)
    let i = 0;
    interval = setInterval(function () {
        colorButtons[i].click();
        i++;

        if (i >= colorButtons.length) {
            i = 0;
        }
    }, 2000);
}


function stopBg() {
    clearInterval(interval);
}




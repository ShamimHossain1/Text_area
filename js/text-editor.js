const textElement = document.querySelector('#textarea');

//////////////////// Bold /////////////////////////

const boldButton = document.getElementById('bold');
boldButton.addEventListener('click', function () {
    if (textElement.style.fontWeight === "bold") {
        textElement.style.fontWeight = "normal";
    } else {
        textElement.style.fontWeight = "bold";
    }
});

/////////////////// Italic //////////////////////////

const italicButton = document.getElementById('italic');
italicButton.addEventListener('click', function () {
    if (textElement.style.fontStyle === "italic") {
        textElement.style.fontStyle = "normal";
    } else {
        textElement.style.fontStyle = "italic";
    }
});

////////////////// Center ///////////////////////

const centerButton = document.getElementById('center');

centerButton.addEventListener('click', function () {
    if (textElement.style.textAlign === "center") {
        textElement.style.textAlign = "";
    } else {
        textElement.style.textAlign = "center";
    }
});

////////////////// End ///////////////////////

const endButton = document.getElementById('end');

endButton.addEventListener('click', function () {
    if (textElement.style.textAlign === "end") {
        textElement.style.textAlign = "";
    } else {
        textElement.style.textAlign = "end";
    }
});

/////////////////// Start //////////////////////

const startButton = document.getElementById('start');

startButton.addEventListener('click', function () {
    if (textElement.style.textAlign === "start") {
        textElement.style.textAlign = "";
    } else {
        textElement.style.textAlign = "start";
    }
});


////////////////// font size//////////////////////

const range = document.getElementById("myRange");
const textarea = document.getElementById("textarea");
range.addEventListener("input", function () {
    textarea.style.fontSize = this.value + "px";
});



////////////////color/////////////////////////
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#textarea');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    // hexInput.value = color;
    document.querySelector('#textarea').style.color = color;

})

/////////////////// clear btn ////////////////////

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function () {

    textarea.value = "";


})
var colorNumber = document.querySelector("#colorNumber");

function setButtonColor(button, red, green, blue){
    button.setAttribute('style', 'background-color: rgb(' + red + ',' + green + ',' + blue + ');')
}

var buttons = document.querySelectorAll('.colors');


var answerButton = Math.round(Math.random() * (buttons.length - 1))
for(var i = 0; i < buttons.length; i++){
    var red = getColorValue();
    var blue = getColorValue();
    var green = getColorValue();

    setButtonColor(buttons[i], red, blue, green);

    if(i === answerButton){
        colorNumber.innerHTML = `(${red}, ${green}, ${blue})`;
    }
}


function getColorValue(){
    return Math.floor(Math.random()*255)
}


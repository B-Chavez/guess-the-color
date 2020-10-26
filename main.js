var colorNumber = document.querySelector("#colorNumber");



var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', function(){
    colorChange()
})

function setButtonColor(button, red, green, blue){
    button.setAttribute('style', 'background-color: rgb(' + red + ',' + green + ',' + blue + ');')
}

function getColorValue(){
    return Math.floor(Math.random()*255)
}

function colorChange(){


    var buttonsList = document.querySelectorAll('.colors');
    var answerButton = Math.round(Math.random() * (buttonsList.length - 1))
    var answerMessage = document.getElementById('answer')

        answerMessage.innerHTML = "";

    for(var i = 0; i < buttonsList.length; i++){
        buttonsList[i].addEventListener('click', function(){
            if (this === buttons[answerButton]){
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!"
            }
                })

        var red = getColorValue();
        var blue = getColorValue();
        var green = getColorValue();

        setButtonColor(buttonsList[i], red, blue, green);

        if(i === answerButton){
            colorNumber.innerHTML = `(${red}, ${green}, ${blue})`;
        }
    }
}


colorChange()

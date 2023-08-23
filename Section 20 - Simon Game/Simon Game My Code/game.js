// alert("it works")

buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var randomNumber;
var level = 0;
var started = false;
function nextSequence(){
    userClickedPattern = [];

     $('#level-title').text(`Level ${level}`)
     level++;

     randomNumber = Math.floor(Math.random() * 4)
     var randomChosenColor = buttonColours[randomNumber]
     gamePattern.push(randomChosenColor);

    $(`#${buttonColours[randomNumber]}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor)
}


$(`.btn`).click(function(){
    var userChosenColor = ($(this).attr("id"));
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name){
        var audio = new Audio(`./sounds/${name}.mp3`)
        audio.play()
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass('pressed')
    setTimeout(function(){
        $(`#${currentColor}`).removeClass('pressed')
    }, 100)
}

$(document).keypress(function(event){
    if(!started){
    $("#level-title").text = `level ${level}`
    nextSequence()
    started = true;
    }
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
    } else {
        playSound("wrong")
        $('body').addClass("game-over")
        setTimeout(function(){
            $(`body`).removeClass('game-over')
        }, 200)
        $('#level-title').text(`Game Over, Press Any Key to Restart`)
        startOver()
    }
}

function startOver(){
    level = 0;
    gamePattern = []
    started = false;
}
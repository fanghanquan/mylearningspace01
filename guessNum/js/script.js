//玩家1：小明
var para = document.getElementById("player1");
para.addEventListener('click',updateName);
function updateName() {
    var name = prompt("输入一个新的名字");
    para.textContent = "玩家1" + name;
}

//点我点我
/*
document.addEventListener("DOMContentLoaded",function(){
    function createParagraph() {
        var par = document.createElement("p");
        par.textContent  = "你点到我了";
        document.body.appendChild(par);
    }
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",createParagraph);                 
    }
});
*/

//猜数字游戏
var randomNumber = Math.floor(Math.random()*100)+1;
var guessField = document.querySelector(".guessField");
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSumbit = document.querySelector(".guessSumbit");
var guessCount = 1;
function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "上次猜的数：";
    }
    guesses.textContent += userGuess + " ";
    if (userGuess === randomNumber) {
        lastResult.textContent = "恭喜你，你猜中了！";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = "游戏结束！";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = " ";
        setGameOver();
    }
    else{
        lastResult.textContent = "你猜错了！";
        if (userGuess < randomNumber) {
           lowOrHi.textContent = "猜低了！" ;
        }else{
            lowOrHi.textContent = "猜高了！";
        }
    }
    guessCount ++;
    guessField.value = " ";
    guessField.focus();
}
function setGameOver() {
    guessField.disabled = true;
    guessSumbit.disabled = true;
    resetButon = document.createElement('button');
    resetButon.textContent = "重新开始游戏";
    document.body.appendChild(resetButon);
    resetButon.addEventListener('click',resetGame);
}
function resetGame(){
    var result = document.querySelectorAll('.result p');
    for (var i = 0; i < result.length; i++) {
        result[i].textContent = " ";
    }
    resetButon.parentNode.removeChild(resetButon);
    guessCount = 1;
    guessField.disabled = false;
    guessSumbit.disabled = false;
    guessField.value = " ";
    guessField.focus();
    var randomNumber = Math.floor(Math.random()*100)+1;

}
guessSumbit.addEventListener('click',checkGuess);


//随机背景色

var randomBgColor = document.querySelector('.randomBgColor');
function randomNum(numb) {
    return Math.floor(Math.random() * (numb + 1));
} 

randomBgColor.onclick = function () {
    var randomColor = 'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';
    document.body.style.backgroundColor = randomColor;
}
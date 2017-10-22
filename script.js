var duck1 = document.querySelector("#duck1");
var quackSound = document.querySelector("#quackSound")
var quackTimer = document.querySelector("#QuackTimer1")
var quackTimerNum = 0;

console.log("hi")

function playQuack(){
  quackSound.play()
}

function Quack(duckImage){
  duckImage.src = "duck-quack.jpg";
  quackSound.pause();
  quackSound.currentTime = 0;
  quackSound.play();

  window.setTimeout(function(){duckImage.src = "duck.jpg"}, 400);
}

duck1.onclick = function(){
  Duck1Quack()
}

var lastTimeOut = 0;
function Duck1Quack(){
  Quack(duck1)
  window.setTimeout(function(){Quack(duck2)}, 400)

  var nextQuackIn = Math.floor(Math.random()*5 + 5) * 1000;
  quackTimer.textContent = nextQuackIn;
  window.clearTimeout(lastTimeOut);
  lastTimeOut = window.setTimeout(Duck1Quack, nextQuackIn);
}

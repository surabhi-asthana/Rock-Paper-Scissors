const your=document.getElementById("y");
const comp=document.getElementById("c");
const rock=document.getElementById("rock");
const pap=document.getElementById("paper");
const sc=document.getElementById("scissors");
const images = ["blue.jpg","Rock.jpg", "paper.jpg", "scissors.jpg","blue.jpg"];
let a=["Rock","Paper","Scissors"];
document.getElementById("output").innerHTML="Make a choice! You have 3 seconds to choose...👾";
let ch="",timer,c=3,play=false, x;
startRound();count();
function startRound() {
 x= setTimeout(() => {
    compute("",0);
    rock.disabled=true;
    pap.disabled=true;
    sc.disabled=true;
    document.getElementById("output").innerHTML="⏰ Time's up! You cannot choose anymore.";
  }, 3100);
}
function count(){
  if(c>=0 && play==false){
    document.getElementById("timer").innerText=c;
    c--;
    setTimeout(count,1000);
  }
  else
    return;
}
function r(){
    your.innerHTML=`<img src="Rock.jpg">`;
    ch="Rock";
    play=true;
compute(ch,1200);
}
function p(){
    your.innerHTML=`<img src="paper.jpg">`;
    ch="Paper";
    play=true;
    compute(ch,1200);
}
function s(){
    your.innerHTML=`<img src="scissors.jpg">`;
    ch="Scissors";
    play=true;
    compute(ch,1200);
}
let index = 0;

/*function showNext() {
  if (index < images.length) {
    comp.innerHTML = `<img src="${images[index]}">`;
    index++;
    setTimeout(showNext, 100); 
  } else {
    return;
  }
}*/
function compute(ch,t){
    clearTimeout(x);
   let c=Math.floor(Math.random()*3);
    rock.disabled=true;
    pap.disabled=true;
    sc.disabled=true;
document.getElementById("output").innerHTML="🤖Computer Thinking...";
timer=setTimeout(() => {
if(a[c]=="Rock")
    comp.innerHTML=`<img src="Rock.jpg">`;
else if(a[c]=="Paper")
    comp.innerHTML=`<img src="paper.jpg">`;
else
    comp.innerHTML=`<img src="scissors.jpg">`;
if(ch!=""){
if(ch==a[c])
    document.getElementById("output").innerHTML="It's a draw!🤝";
else if((ch=="Rock" && a[c]=="Paper")|| (ch=="Paper" && a[c]=="Scissors")||(ch=="Scissors" && a[c]=="Rock"))
    document.getElementById("output").innerHTML="Oh snap... You lost! Better luck next time!😢";
else{
    document.getElementById("output").innerHTML="🎉Congratulations, You Win!🏆";
    celebrate();
}
  }
},t);
}
function reset(){
    rock.disabled=false;
    pap.disabled=false;
    sc.disabled=false;
    document.getElementById("output").innerHTML="Make a choice! You have 3 seconds to choose...👾";
    your.innerHTML=`<img src="blue.jpg">`;
    comp.innerHTML=`<img src="blue.jpg">`;
    clearTimeout(timer);
    c=3;
    play=false;
    index=0;
    count();
   stopConfetti();
   startRound();
  }
let confettiCanvas = null, confettiAnimationId = null;
function celebrate(duration = 6000) {
  if (confettiCanvas) {
    stopConfetti();
  }
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  confettiCanvas = canvas;
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  const confetti = [];
  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8,
      h: 15,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speed: Math.random() * 3 + 2,
      tilt: Math.random() * 10 - 5
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confetti.forEach((c) => {
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.w, c.h);
      c.y += c.speed;
      c.x += c.tilt;

      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
    confettiAnimationId = requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => {
    stopConfetti();
  }, duration);
}
function stopConfetti() {
  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  if (confettiCanvas) {
    confettiCanvas.remove();
    confettiCanvas = null;
  }
}
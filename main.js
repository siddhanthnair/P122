function setup(){
    canvas=createCanvas(900,600)
}

screen_height=0;
screen_width=0;

apple ="";
speak_data="";
to_number="";

var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening. Please Speak";
    recognition.start();
}

recognition.onresult= function(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("status").innerHTML="The Speech has been recognised as :"+ content;
if(content=="circle"){
    x=Math.floor(Math.random()*900) 
    y=Math.floor(Math.random()*600) 
    document.getElementById("status").innerHTML="Started Drawing Circle";
    draw_circle="set";
}
if(content=="rectangle"){
    x=Math.floor(Math.random()*900) 
    y=Math.floor(Math.random()*600) 
    document.getElementById("status").innerHTML="Started Drawing Rectangle";
    draw_rect="set";
}
}
function draw(){
 if(draw_circle=="set"){
radius=Math.floor(Math.random()*100)
circle(x, y, radius);
document.getElementById("status").innerHTML="Circle has been drawn";
draw_circle="";
 }

 if(draw_rect=="set"){
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTML="Rectangle has been drawn";
    draw_rect="";
     }
}

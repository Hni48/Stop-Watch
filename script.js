const minlable = document.querySelector('#minutes');
const seclable = document.querySelector('#seconds');
const milliseclable = document.querySelector('#milliseconds');


const startbtn = document.querySelector('#startbtn');
const stopbtn = document.querySelector('#stopbtn');
const pausebtn = document.querySelector('#pausebtn');
const resetbtn = document.querySelector('#resetbtn');

const laplist = document.querySelector('#laplist');

let minutes= 0;
let seconds=0;
let milliseconds=0;
let interval;


startbtn.addEventListener('click', startimer);
stopbtn.addEventListener('click', stoptimer);
pausebtn.addEventListener('click', pausetimer);
resetbtn.addEventListener('click', resetTimer);


function startimer(){
    
     interval = setInterval(updatetimer,10);
     startbtn.disabled= true;



}

function stoptimer(){
    clearInterval(interval);
    addLapList();
    resetTimerData();
    startbtn.disabled=false;
     


}

function pausetimer(){
    clearInterval(interval);
    pausebtn.disabled=true;
    startbtn.disabled=false;


}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
       


}

function updatetimer(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
    }

    }
    displaytimer();
 }

 function displaytimer(){
    milliseclable.textContent=padtime(milliseconds);
    seclable.textContent=padtime(seconds);
    minlable.textContent= padtime(minutes);
 }


 function padtime(time){
    return time.toString().padStart(2,'0');
 }


 function resetTimerData(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    displaytimer();
}

function addLapList(){
    const laptime=`${padtime(minutes)}:${padtime(seconds)}:${padtime(milliseconds)}`;
    const listitem = document.createElement('li');
    listitem.innerHTML= `<span>Lap ${laplist.childElementCount + 1}:</span> ${laptime}`;
    laplist.appendChild(listitem);    
}



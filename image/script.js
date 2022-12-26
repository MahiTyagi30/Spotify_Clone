//console.log(Welcome);

let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressRange=document.getElementById('myProgressRange');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songItem=Array.from(document.getElementsByClassName('songItems'));

let songs =[
   { songNmame: "I LIKE YOU",filePath: "song/1.mp3",coverPath:"image/cover1.jpeg"},
   { songNmame: "LOVE ME",filePath: "song/2.mp3",coverPath:"image/cover1.jpeg"},
   { songNmame: "GO",filePath: "song/3.mp3",coverPath:"image/cover1.jpeg"},
   { songNmame: "MY WAY",filePath: "song/4.mp3",coverPath:"image/cover1.jpeg"},
   { songNmame: "I LIKE YOU",filePath: "song/5.mp3",coverPath:"image/cover1.jpeg"}
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songNmame;
})



//listen to event
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressRange.vaule=progress
})
myProgressRange.addEventListener('change',()=>{
    audioElement.currentTime=myProgressRange.vaule*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');


})
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src='songs/${songIndex+1}.mp3';
        mastersongname.innerText=songs[songIndex].songNmame;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    mastersongname.innerText=songs[songIndex].songNmame;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    mastersongname.innerText=songs[songIndex].songNmame;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
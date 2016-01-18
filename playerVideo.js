var myVideo = document.getElementById("IDvideo");
var myVideoName = "0";

var myVideoTab = ["00","000","0000","01","001","0001","010","0010","011","0011","0100","0101","0110","0111"];
var myTimerTab = [250,500,1000,2000,250,500,1000,2000,250,500,1000,2000,250,500];

function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

function makeBig() { 
        myVideo.width = 560; 
} 

function makeSmall() { 
        myVideo.width = 320; 
} 

function makeNormal() { 
        myVideo.width = 420; 
}

function choixGauche() {
        myVideoName = myVideoName + "0";
        console.log(myVideoName);
}

function choixDroite() {
        myVideoName = myVideoName + "1";
        console.log(myVideoName);
}
//  Charge une autre vidéo dans le player
function getVideo() {
        var fileURL = document.getElementById("videoFile").value;  // get input field
        var myVideoURL = "../content/"+myVideoName+".mp4";
        if (fileURL != ""){
            myVideo.src = myVideoURL;
            myVideo.load();  // if HTML source element is used
            document.getElementById("play").click();  // start play
        } 
        else {
            errMessage("Enter a valid video URL");  // fail silently
        }
}
function hideButtons(){
        document.getElementById("droite").style.opacity = "0";
        document.getElementById("gauche").style.opacity = "0";
        setTimeout(showButtons, myTimerTab[myVideoTab.indexOf(myVideoName)]);
}
function showButtons(){
        document.getElementById("droite").style.opacity = "1";
        document.getElementById("gauche").style.opacity = "1";   
}
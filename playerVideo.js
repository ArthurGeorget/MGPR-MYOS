var myVideo = document.getElementById("IDvideo");
var myVideoName = "0";

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
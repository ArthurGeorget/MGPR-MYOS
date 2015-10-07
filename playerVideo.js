var myVideo = document.getElementById("IDvideo"); 

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
//  Charge une autre vidéo dans le player
function getVideo() {
        var fileURL = document.getElementById("videoFile").value;  // get input field      
        if (fileURL != ""){
            myVideo.src = fileURL;
            myVideo.load();  // if HTML source element is used
            document.getElementById("play").click();  // start play
        } 
        else {
            errMessage("Enter a valid video URL");  // fail silently
        }
}    
'use strict'
//Defining constraints
const AudioVideoContraints = {
    audio: false,
    video: true
}
//Attaching event handlers 
const videoElement = document.querySelector("video");
const buttonElement = document.querySelector("#requestForMedia");
buttonElement.onclick =async (e) => {
    const stream = await navigator.mediaDevices.getUserMedia(AudioVideoContraints);
    const videoElement = document.querySelector("video")    ;
    videoElement.srcObject = stream
}
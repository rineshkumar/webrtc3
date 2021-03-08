'use strict'
const localVideo = document.querySelector("video#localVideo");
const remoteVideo = document.querySelector("#remoteVideo");
const audioVideoConstraints = {
    audio: false,
    video: true
}
const requestLocalMediaSharingButton = document.querySelector("#requestForMedia");
requestLocalMediaSharingButton.addEventListener("click",async ()=>{
    const stream = await navigator.mediaDevices.getUserMedia(audioVideoConstraints);
    localVideo.srcObject = stream;
})



//Constraints 



navigator.mediaDevices.getUserMedia(audioVideoConstraints).then((stream) => {
    localVideo.srcObject = stream;
}).catch((

    ) => { });
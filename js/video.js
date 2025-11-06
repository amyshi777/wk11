let video = document.querySelector("#player1");
let button = document. querySelector("#mute");

function play(){
	console.log("In play");
	video.play();
}

function pause(){
	console.log("In pause");
	video.pause();
}

function slower(){
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 0.5;
	console.log("New speed is " + video.playbackRate);
}

function faster() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 2;
	console.log("New speed is " + video.playbackRate);
}

function skip() {
	console.log("The duration is " + video.duration);
	console.log("The current location is " + video.currentTime);
	video.currentTime = video.currentTime + 10;
	video.loop = true;
	console.log("The new location is " + video.currentTime);
}

function mute() {
	if(video.muted == false) {
		video.muted = true;
		console.log("Muting the video");
		button.textContent = "Unmute";
	}
	else if(video.muted == true) {
		video.muted = false;
		console.log("Unmuting the video");
		button.textContent = "Mute";
	}
}

function changeVolume(el) {
	console.log("Changing the volume");
	let vol01 = Math.max(0, Math.min(1, el.value / 100));
  	video.volume = vol01;
	console.log("video.volume is now", video.volume);
	let volSpan = document.getElementById('volume');
  	volSpan.textContent = Math.round(vol01 * 100) + '%';
	video.muted = (vol01 === 0);
  	if (button) {
		if(video.muted) {
			button.textContent = "Unmute";
		}
		else {
			button.textContent = "Mute";
		}
	}
}

function old() {
	console.log("oldVintage mode")
	video.classList.add('oldSchool');  
}

function original() {
	console.log("Original mode")
	video.classList.remove('oldSchool');  
}


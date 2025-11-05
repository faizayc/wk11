var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In Slower");
	let currspeed = video.playbackRate;
	let newspeed = video.playbackRate -= 0.5;
	console.log("Current Speed: " + currspeed + " " + "New Speed: " + newspeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster");
	let currspeed = video.playbackRate;
	let newspeed = video.playbackRate += 0.5;
	console.log("Current Speed: " + currspeed + " " + "New Speed: " + newspeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("In skip");
	console.log(video.duration);
	console.log("Current location is ", video.currentTime);
	video.currentTime += 10;
	video.loop = true;
	console.log("New location is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = false;
	if (video.muted = true) {
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
	else if (video.muted = false) {
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});



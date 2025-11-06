var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	const slider = document.querySelector("#slider");
	const label = document.querySelector("#volume");
	const n = Number(slider.value);
	video.volume = n / 100; 
	label.textContent = n + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In Slower");
	let currspeed = video.playbackRate;
	let newspeed = video.playbackRate *= 0.9;
	console.log("Current Speed: " + currspeed + " " + "New Speed: " + newspeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster");
	let currspeed = video.playbackRate;
	let newspeed = video.playbackRate /= 0.9;
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
	console.log("In Mute");
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Changing Volume");

	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Changing Volume");

	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("In Vintage - Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to Original");
	video.classList.remove("oldSchool");
});



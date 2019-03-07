//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//define key parameters
let interval = null;
let status = "stopped";
var exer_name = null;
var rep_minute = null;
var list_length = null;
var completeAudio = new Audio('/js/nextworkout.m4a',);
var nextAudio = new Audio('/js/workoutcomplete.m4a',);


$(document).ready(function(){
    rep_minute = document.getElementById("exer_interval").value;
    list_length = document.getElementById("total_exer").value;
    console.log(rep_minute)
})

function stopWatch(){
	seconds++;

	if(seconds / 60 === 1){
		seconds = 0;
		minutes++;
		
		if(minutes / 60 === 1){
			minutes = 0;
			hours++;
		}
    }
    
    
	if(seconds % rep_minute === 0 && seconds != rep_minute * list_length){
		console.log("Your exercise is done! Go to the next workout");
		playNextAudio();
	}
	if (seconds == rep_minute * list_length){
		console.log("Workout Complete");
    	status="started";
    	playCompleteAudio();
    	clearInterval(interval);
	}


	//Display
	document.getElementById("time_display").innerHTML = hours + ":" + minutes + ":" + seconds;

}

function playNextAudio(){
	nextAudio.play();
} 
function playCompleteAudio(){
	completeAudio.play();
} 


function startStop(rep_minute){
	if(status ==="stopped"){
		interval = window.setInterval(stopWatch, 1000);
		document.getElementById("startStop").innerHTML = "Stop";
		status = "started";''
	}
	else{
		window.clearInterval(interval);
		document.getElementById("startStop").innerHTML = "Start";
		status = "stopped";
	}
}

function reset(){
	window.clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementById("time_display").innerHTML = "00:00:00";
	document.getElementById('startStop').innerHTML = "Start";
}
//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//define variables for startStop and questions
let interval = null;
let status = "stopped";
var rep_minute = null;
var list_length = null;
var button = document.getElementById('startStop');
var autoStopSec = rep_minute * list_length;

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
	if(seconds % rep_minute === 0){
		console.log("Your exercise is done! Go to the next workout");
	}
	if(seconds == rep_minute * list_length){
		console.log("Workout Complete");
    	status="started";
    	clearInterval(interval);
	}


	//Display
	document.getElementById("time_display").innerHTML = hours + ":" + minutes + ":" + seconds;

}


function startStop(rep_minute){
	if(status ==="stopped"){
		interval = window.setInterval(stopWatch, 1000);
		document.getElementById("startStop").innerHTML = "Stop";
		status = "started";
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

function intervalTime(){
	rep_minute = document.getElementById("input").value;
	console.log(rep_minute);
	document.getElementById('myspan1').textContent=rep_minute;
	return rep_minute;
}

function exerciseCount(){
	list_length = document.getElementById("exer_input").value;
	console.log(list_length);
	document.getElementById('myspan2').textContent=list_length;
	return list_length;
}

function clear(){
	document.getElementById("textfield1").value = "";
}
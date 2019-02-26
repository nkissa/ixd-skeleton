//define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//define variables for startStop and questions
let interval = null;
let status = "stopped";
var exer_name = null;
var rep_minute = null;
var list_length = null;
var audio = new Audio('js/alarm.wav');
var list_exer = $("#list-exer");
var exer_btn = $("#exer_btn");

$(document).ready(function(){

    $.get("/getdata", (exercises) => {
        listExer(exercises);
    })
    exer_btn.click(function(e) {
		e.preventDefault();
		sendData();
	});
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
	if(seconds % rep_minute === 0){
		console.log("Your exercise is done! Go to the next workout");
		playAudio();
	}
	if(seconds == rep_minute * list_length){
		console.log("Workout Complete");
    	status="started";
    	playAudio();
    	clearInterval(interval);
	}


	//Display
	document.getElementById("time_display").innerHTML = hours + ":" + minutes + ":" + seconds;

}

function playAudio(){
	audio.play();
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

function sendData(){
	console.log("submit clicked")
	exer_name = document.getElementById("exer_name").value
	console.log(exer_name);
	rep_minute = document.getElementById("input").value
	console.log(rep_minute);
	list_length = document.getElementById("exer_input").value;
	console.log(list_length);


	$.post("/add",
    {
	  name: exer_name,
      interval: rep_minute,
      total_exercises: list_length
    },
    function(data, status){
	  console.log(data);
	  window.location.href = "/index";
    }); 
}

function clear(){
	document.getElementById("textfield1").value = "";
}

function listExer(exercises) {
    list_exer.html(" ");
    exercises.forEach(exer => {
        list_exer.append("<p>" + exer.name + "</p>");
    });
}
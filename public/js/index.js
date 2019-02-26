var all_ul = $("#all_exer")[0];

$(document).ready(function(){

    $.get("/getdata", (exercises) => {
        listAllExer(exercises);
    });

});


function listAllExer(exercises) {
    exercises.forEach((exer, i) => {
        var newExer = document.createElement("li");
        var exer_text = document.createTextNode(exer.name);
        newExer.appendChild(exer_text);
        newExer.setAttribute("id", exer.name);
        newExer.addEventListener("click", function() {
            window.location.href = "/timer/" + i;
        });
        console.log(all_ul)
        all_ul.appendChild(newExer);
    });
}
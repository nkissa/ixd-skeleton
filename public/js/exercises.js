var list_exer = $("#list-exer");

$(document).ready(function(){

    $.get("/getdata", (exercises) => {
        listExer(exercises);
    })
    console.log()
})




/*$.ajax({
    type: "POST",
    url: url,
    data: data,
    success: success,
    dataType: dataType
});*/
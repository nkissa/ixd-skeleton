var data = require('../data.json');
exports.viewAddHB = function(req, res){
	/*var name = req.params.name;*/
	console.log("The project name is Add");
	res.render("add", data);
};

exports.addData = function(req, res) {
	var name = req.body.name;
	var interval = req.body.interval;
	var total_exercises = req.body.total_exercises;
	console.log(interval);
	console.log(total_exercises)
	var newData = {
		"name": name,
		"interval": interval,
		"total_exercises": total_exercises
	}
	console.log(newData);
	data.exercises.push(newData);
	console.log(data.exercises);
	res.json(data.exercises);
}
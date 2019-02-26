
var data = require('../data.json');
var exercises = data.exercises;
exports.getData = function(req, res){
	/*var name = req.params.name;*/
    console.log("this is the excercises data");
    console.log(exercises);
	res.json(exercises);
};
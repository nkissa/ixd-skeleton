var data = require('../data.json');

exports.viewTimer= function(req, res){
	var id = req.params.id;
	console.log("param is " + req.params.id);
	res.render("timer", { "exercise": data.exercises[id], "Nav": data.Nav });
};
var data = require('../data.json');

exports.viewHelpHB = function(req, res){
	/*var name = req.params.name;*/
	console.log("The project name is HELP");
	res.render("help",data);
};
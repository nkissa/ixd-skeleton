
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	"nav_title": [
  	{
  		"name": "My Workouts",
  		"id": "nav1"
  	},
  	{
  		"name": "Timer",
  		"id": "nav2"
  	},
  	{
  		"name": "Music",
  		"id": "nav3"
  	},
  	{
  		"name": "Help and Documentation",
  		"id": "nav3"
  	}
  	]
  });
};

exports.viewProject = function(req, res){
  var name = req.params.name;
  console.log("The project name is: " + name);
  res.render(index);
}


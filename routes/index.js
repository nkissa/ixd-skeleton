
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	"nav_title": [ 
        {
            "name": "Start",
            "path": "start"
        },
    	{
    		"name": "My Workouts",
    		"path": "myworkouts"
    	},
    	{
    		"name": "Help and Documentation",
    		"path": "help"
    	},
       

    ]
  });
};

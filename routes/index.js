
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	"nav_title": [ 
        {
            "name": "Edit",
            "path": "start"
        },
    	{
    		"name": "Start",
    		"path": "myworkouts"
    	},
    	{
    		"name": "Help",
    		"path": "help"
    	},
    ]
  });
};

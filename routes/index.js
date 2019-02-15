
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	"nav_title": [ 
    	{
    		"name": "Help",
    		"path": "help"
    	}
    ]
  });
};

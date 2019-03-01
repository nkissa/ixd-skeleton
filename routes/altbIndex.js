
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  res.render("altbindex", { "exercise": data.exercises[id], "Nav": data.Nav });
};

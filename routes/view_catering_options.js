var data = require('../catering_options.json');

exports.view = function(req, res)
{
    console.log(data);
    res.render('view_catering_options', data);
};
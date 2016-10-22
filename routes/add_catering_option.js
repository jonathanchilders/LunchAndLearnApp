var data = require('../catering_options.json');

exports.view = function(req, res)
{
    res.render('add_catering_option');
};

exports.postCateringOption = function(req, res)
{
    var newOption = 
    {
        'name' : req.query.name,
        'delivers' : req.query.delivers,
        'food_options' : req.query.food_options
    };
    data['catering_options'].push(newOption);
};
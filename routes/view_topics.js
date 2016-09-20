var data = require('../topics.json');

exports.view = function(req, res)
{
    console.log(data);
    res.render('view_topics', data);
};
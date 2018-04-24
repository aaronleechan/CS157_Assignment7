/*
 * GET home page.
 */
module.exports.home = function(req, res)
{
    res.render('index', { title: 'Team6 Homework 7' });
};

/*
 * GET new note page.
 */
module.exports.get_newnote = function(req, res)
{
    res.render('newnote', { title: 'Add New Note' });
};

/*
 * GET edit note page.
 */
module.exports.get_editnote = function(req, res)
{
    var term = req.params.term;
    res.render('editnote', { title: 'Edit Note', term: term });
};

module.exports.get_deletenote = function(req, res)
{
    var term = req.params.term;
    res.render('deletenote', {"term" : term} );
};

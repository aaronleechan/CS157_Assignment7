/*
 * GET user list page.
 */


/*
 * GET show user page.
 */
module.exports.get_notelist = function(req, res)
{
    var db = req.db;
    var collection = db.get('notecollection');
    collection.find({}, {},
        function(err, docs)
        {
            res.render('notelist', { "notelist" : docs });
        });
};


module.exports.get_shownote = function(req, res)
{
    var term = req.params.term;
    var db = req.db;
    var collection = db.get('notecollection');

    collection.find( { term : term },
                     function(err, doc)
                     {
                         if (err || doc.length === 0) {
                             res.send("Find failed.");
                         }
                         else {
                             res.render('shownote',
                                        { term: doc[0].term,
                                          definition: doc[0].definition })
                         }
                     });
};


/*
 * POST add note page.
 */
module.exports.post_addnote = function(req, res)
{
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes.
    var term = req.body.term;
    var definition = req.body.definition;

    console.log(definition);

    // Set our collection.
    var collection = db.get('notecollection');

    // Submit to the database.
    collection.insert( { "term" : term,
                         "definition" : definition },
                       function (err, doc)
                       {
                           if (err) {
                               res.send("Insert failed.");
                           }
                           else {
                               // Forward to success page
                               res.redirect("notelist");
                           }
                       });
};

/*
 * POST update note page.
 */
module.exports.post_updatenote = function(req, res)
{
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes.
    var term = req.body.term;
    var definition = req.body.definition;

    // Set our collection.
    var collection = db.get('notecollection');

    // Submit to the database.
    collection.update( { "term" : term },
                       { $set: {"definition" : definition}},
                       function (err, doc)
                       {
                           if (err) {
                               res.send("update failed.");
                           }
                           else {
                               // Forward to success page
                               res.redirect("notelist");
                           }
                       });
};

/*
 * GET delete user page.
 */
module.exports.post_deletenote = function(req, res)
{
    var term = req.params.term;
    var db = req.db;
    var collection = db.get('notecollection');

    // Submit to the database.
    collection.remove( { "term" : term },
                       function (err, doc)
                       {
                           if (err) {
                               res.send("Delete failed.");
                           }
                           else {
                               return res.redirect('/notelist')
                       }
                       });
};

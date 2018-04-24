var express = require('express');
var router = express.Router();
var ctrlMain  = require("../controllers/cntrlMain");
var modelMain = require("../models/modelMain");

console.log("Router:"); console.log(router);


router.get('/deletenote/:term', ctrlMain.get_deletenote);

router.post('/deletenote/:term', modelMain.post_deletenote);

/*
 * GET home page.
 */
router.get('/', ctrlMain.home);

/*
 * GET note list page.
 */
router.get('/notelist', modelMain.get_notelist);

/*
 * GET new note page.
 */
router.get('/newnote', ctrlMain.get_newnote);

/*
 * POST add note page.
 */
router.post('/addnote', modelMain.post_addnote);
/*

 */

/*
 * GET show note page.
 */
router.get('/notelist/:term', modelMain.get_shownote);


/*
 * GET edit note page.
 */
router.get('/editnote/:term', ctrlMain.get_editnote);

/*
 * POST update note page.
 */
router.post('/updatenote', modelMain.post_updatenote);

// /*
//  * POST delete note page.
//  */
// router.post('/deletenote/:term', modelMain.post_deletnote);

module.exports = router;
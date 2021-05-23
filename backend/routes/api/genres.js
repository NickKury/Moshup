// create a router and asyncHandler
const express = require('express')
const asyncHandler = require('express-async-handler');
const { Genre } = require('../../db/models');

const router = express.Router();

//import database stuff and middleware

//create Api route
router.get('', asyncHandler(async (req,res) => {
    const genres = await Genre.findAll();
    res.json(genres);
}))


//export
module.exports = router;
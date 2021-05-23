const express = require('express')
const asyncHandler = require('express-async-handler');
const { Genre, Event } = require('../../db/models');

const router = express.Router();

router.get('', asyncHandler(async (req,res) => {
    const events = await Event.findAll();
    res.json(events);
}))


//export
module.exports = router;

//gets all events from the db models
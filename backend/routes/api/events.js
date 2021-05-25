const express = require('express')
const asyncHandler = require('express-async-handler');
const { Event } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const router = express.Router();

router.get('', asyncHandler(async (req,res) => {
    const events = await Event.findAll();
    res.json(events);
}))

router.get(`/:id`, asyncHandler(async(req, res)=>{
  const eventId = parseInt(req.params.id, 10)  
  const event = await Event.findByPk(eventId, {include: description, date, genreId});
  res.json(event);
}))

const validateEvent = [
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a description of the event.'),
    check('userId')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a userId.'),
    check('genreId')
        .exists({ checkFalsy: true })
      .withMessage('Please select a genre.'),
    check('date')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a date.'),
    handleValidationErrors,
  ];


router.post( '/', validateEvent, asyncHandler(async (req, res) => {
      const { description, userId, genreId, date } = req.body;
      const event = await Event.create({ description, userId, genreId, date});
  
      return res.json({
        event,
      });
    }),
  );

//export
module.exports = router;

//gets all events from the db models
// create a router and asyncHandler
const express = require('express')
const asyncHandler = require('express-async-handler');
const { Genre, Event } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');


const router = express.Router();

//import database stuff and middleware

//create Api route
router.get('', asyncHandler(async (req,res) => {
    const genres = await Genre.findAll();
    res.json(genres);
}))

router.get(`/:id`, asyncHandler(async(req, res)=>{
    const genreId = parseInt(req.params.id, 10)  
    const genre = await Genre.findByPk(genreId);
    res.json(genre);
  }))


// router.post('/search/genre'),  setTokenCookie, asyncHandler(async(req,res) =>{
//     const result = req.body;
//     const json = result.json();
//     // console.log('thisstuff', json)
// })


//export
module.exports = router;
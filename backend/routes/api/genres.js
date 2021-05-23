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

router.post('/search/genre'),  setTokenCookie, asyncHandler(async(req,res) =>{
    const result = req.body;
    const json = result.json();
    console.log('thisstuff', json)
})

// router.post('/search/genre', csrfProtection, asyncHandler(async (req, res) => {
//     const result = req.body;
//     let id = [];
//     let unfilteredGenres = [];
//     const vals = Object.values(result);
//     for (let i = 0; i < vals.length - 1; i++) {
//       id.push(parseInt(vals[i]));
//     }
//     let genres = await Genre.findAll({
//         where: { id: [...id] },
//         include: Event,
//       });
//       for (let i = 0; i < tags.length; i++) {
//         if(genres[i].Events){
//           unfilteredGenres.push(genre[i].Events[0]);
//         }else{return}
//       };
//       const genres = unfilteredEvents.filter(event=>{
//         if (event){return event}
//       })
//       if(events.length){
//         res.render("search-result", {
//           events,
//           csrfToken: req.csrfToken(),
  
//         });
//       }else{
//         res.render("search-result", {
//           csrfToken: req.csrfToken(),
//         });
//       }
//     })
//   );

//export
module.exports = router;
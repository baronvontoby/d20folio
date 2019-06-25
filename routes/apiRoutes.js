const router = require('express').Router();
const db = require("../models"); 
const seeds = require('../charSeeds.json'); 

router.route('/characters')
    .get((req,res,err) => {
        res.json(seeds);
    })

router.route('/character')
    .post((req,res,err) => {
        res.json("");
    })

router.route('/character/:id')
    .get((req,res,err) => {
        //get all characters here
        res.json(seeds[0]);
    })
    .put((req,res,err) => {
        //update character here
        res.json("");

    })
    .delete((req,res,err) => {
        //delete character
        res.json("");

    })

router.route('/characters/mine')
    .get((req,res,err) => {
        //get all my characters here
        res.json(seeds);
    })


module.exports = router;
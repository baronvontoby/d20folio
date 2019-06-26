const router = require('express').Router();
const db = require("../models"); 
const seeds = require('../charSeeds.json'); 

router.route('/characters')
    .get((req,res,err) => {
        // res.json(seeds);
        db.Character.find({})
            .sort({_id: -1})
            .then(characters => {console.log('Got Characters: ', characters); return characters;})
            .then(characters => res.json(characters))
            .catch(error => res.json(500, error));
    });

router.route('/character')
    .post((req,res,err) => {
        const newChar = req.body;

        db.Character.create(newChar)
            .then(character => res.json(character))
            .catch(err => res.json(500, err))
    });

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

    });

router.route('/characters/mine')
    .get((req,res,err) => {
        //get all my characters here
        res.json(seeds);
    });

module.exports = router;
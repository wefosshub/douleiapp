const express = require('express');
const router = express.Router();
const submitJobModel = require('../models/jobsubmitModel');

router.get('/:category', async (req, res)=>{

const category = req.params.category;

try{
const jobs = await submitJobModel.find( {  skills : category } );
res.status(200).json(jobs).end();
}
catch(err){
    res.status(500).json({message : "Could not find data"}).end()
}


})

module.exports = router




const express = require('express');
const router = express.Router();
const submitJobModel = require('../models/jobsubmitModel')

router.post('/', async (req,res)=>{

const jobDetails = new submitJobModel({

    company_name : req.body.company_name,
    company_email : req.body.company_email,
    job_title : req.body.job_title,
    job_description: req.body.job_description,
    skills : req.body.skills,
    apply_link : req.body.apply_link,
    created_date : Date()


});

await jobDetails.save();
res.status(200).json({message: "Submission successful", submitted : true}).end()
    


    
    }
     )





module.exports = router;

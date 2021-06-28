const mongoose = require('mongoose');



const jobsubmitSchema = mongoose.Schema({

company_name : String,
company_email : String,
job_title : String,
job_description: String,
skills : [String],
apply_link : String,
created_date : Date,
salary_per_year_dollars : Number 

})


const JobSubmitModel = mongoose.model('JobSubmitModel', jobsubmitSchema);

module.exports = JobSubmitModel;
# douleiapp
A job board app for developers


All the data sent and received from and to server is in json format. please note this

## Schema to send job form submission data:

End point : base/submit-job

company_name : String,
company_email : String,
job_title : String,
job_description: String,
skills : [String],
apply_link : String,
salary_per_year_dollars : Number 

## Schema for data from the server ( all jobs)

End point: base/listing/

[
    {
        "skills": [
            "skill1",
            "skill2",
            "skill3"
        ],
        "_id": "60d9a515b851f822b0572521",
        "company_name": "fawaz's company",
        "company_email": "random@email.com",
        "job_title": "Random title",
        "job_description": "random description here. This has to be html or a file? because I need this tpo be properly formatted",
        "apply_link": "www.randomsite.com",
        "created_date": "2021-06-28T10:31:49.000Z",
        "__v": 0
    }
]

This can be filtered to get data based on skills with end point: base/listing/:category    (replace :category with a skill. handy for searching)

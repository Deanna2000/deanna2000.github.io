const resumeDatabase = [
    {
        "jobtitle": "CEO and Founder", 
        "company": "Doo Drop",
        "Location": "Nashville - Remote",
        "dates": "June 2016 - Present",
       accomplishments: ["Created vision for mobile app called Doo Drop", "Worked with team of designers to develop a website for Doo Drop", "Paired with designer to create mockups for mobile app"]
    },
    {
        "jobtitle": "Senior Engagement Manager",
        "company": "Acklen Avenue",
        "Location": "Nashville - Remote",
        "dates": "November 2014 - September 2017",
        accomplishments: ["Implemented new process for management of client deliveries", "worked with leadership to add Design to our development process", "Initiated and managed monthly company wide meetings"]
    },
    {
        "jobtitle": "Director of Client Engagement", 
        "company": "appendTo",
        "Location": "Nashville - Remote",
        "dates": "May 2013 - November 2014",
        accomplishments: ["Implemented core scrum practices across all projects","Provided coaching and mentoring to Engagement Management team","Maintained client satisfaction by resolving concerns immediately"]
    },
    {
        "jobtitle": "Consultant", 
        "company": "Deanna Vickers Consulting",
        "Location": "Nashville - Remote",
        "dates": "July 2009 - April 2013",
        "accomplishments": ["Led a large project to help manage home energy assessment information for the state of TN","Managed several large telecom insuarance projects ","Created plan for a clinical research study application for a orthopaedic surgery practice"]
    }
    ]

    const resumeDatabaseString = JSON.stringify(resumeDatabase)
    localStorage.setItem("resumeDatabase", resumeDatabaseString)

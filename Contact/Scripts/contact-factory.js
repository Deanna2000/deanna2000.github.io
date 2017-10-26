//create database for project data
const contactsDatabase = [
    {
        "platform": "LinkedIn", 
        "link": "https://www.linkedin.com/in/deannavickers/",
        "image": "LinkedIn-Logo-816x231.png",
        "username": "DeannaVickers"
    },
    {
        "platform": "Twitter", 
        "link": "https://twitter.com/deanna2000",
        "image": "twitter-logo.png",
        "username": "Deanna2000"
    },
    {
        "platform": "Instagram", 
        "link": "https://www.instagram.com/deannaz000/",
        "image": "instagram-logo.png",
        "username": "Deannaz000"
    },
    ]

    // Add data to local storage
    const contactsDatabaseString = JSON.stringify(contactsDatabase)
    localStorage.setItem("contactsDatabase", contactsDatabaseString)

//create database for project data
const projectsDatabase = [
    {
        "name": "Exercise 1 - Overly Excited", 
        "link": "https://github.com/Deanna2000/Exercises-for-NSS/tree/master/overly-excited",
        "description": "Practice with arrays and displaying the data in the console.",
    },
    {
        "name": "Exercise 2 - CSS Selectors", 
        "link": "https://github.com/Deanna2000/Exercises-for-NSS/tree/master/css-selectors",
        "description": "Learning basic CSS concepts by applying them to some content in the browser.",
    },
    {
        "name": "Exercise 3 - Boy Bands", 
        "link": "https://github.com/Deanna2000/Exercises-for-NSS/blob/master/boy-bands/boybands.js",
        "description": "More work with arrays and getting them to populate in the browser using innerHTML.",
    },
    {
        "name": "Exercise 4 - Cash to Coins", 
        "link": "https://github.com/Deanna2000/Exercises-for-NSS/tree/master/cash-to-coins",
        "description": "Working with for loops and calculations to calculate the number of coins in a total amount of cash.",
    }
    ]

    // Add data to local storage
    const projectsDatabaseString = JSON.stringify(projectsDatabase)
    localStorage.setItem("projectsDatabase", projectsDatabaseString)

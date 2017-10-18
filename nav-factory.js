let myBio = {
    "title": "Bio", 
    "link": "./bio.html",
    "css": "bioClass"
}

let contactMe = {
    "title": "Contact",
    "link": "./contact.html",
    "css": "contactClass"
}

let myBlog = {
    "title": "Blog",
    "link": "blog.html",
    "css": "blogClass"
}

let myResume = {
    "title": "Resume",
    "link": "resume.html",
    "css": "resumeClass"
}

let navList = [myBio, contactMe, myBlog, myResume]

let navString = JSON.stringify(navList)
localStorage.setItem("navList", navString)
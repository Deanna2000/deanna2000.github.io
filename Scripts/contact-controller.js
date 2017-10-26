//Parse data to get out of local storage
const storedContacts = JSON.parse(localStorage.getItem("contactsDatabase"))

let contactInfo = document.getElementById("social-media-links")

//Get project data from the factory for each object and then display to browser
for (let i = 0; i < storedContacts.length; i++) {
    console.log(storedContacts.length)
    let currentContact = storedContacts[i]
    contactInfo.innerHTML += 
        `
        <a href = "${currentContact.link}">
        <img margin-right:40px; height=60px; width=60px; 
        src="/IMAGES/${currentContact.image}"></a>
        `
}
//Parse data to get out of local storage
const storedResume= JSON.parse(localStorage.getItem("resumeDatabase"))

let resumeInfo = document.getElementById("resume")

//Get resume data from the factory for each object and then display to browser
for (let i = 0; i < storedResume.length; i++) {
    let currentResEntry = storedResume[i]
    resumeInfo.innerHTML += 
    `
    <section >
        <h2>${currentResEntry.jobtitle}</h2>
        <p>${currentResEntry.company}</p>
        <p>${currentResEntry.dates}</p>
    </section>
    `
    //Get details for accomplisments and then display to browser
    for (let j=0;j<currentResEntry.accomplishments.length;j++) {
        let currentResAccomp = currentResEntry.accomplishments[j]
        //Create string template for each li (insert currentResAccomp between each one)
        //Add innerHTML for li to ul
        console.log(currentResAccomp)
        resumeInfo.innerHTML += 
        `
        <li class="resumeStyles">${currentResAccomp}<li>
        `
        console.log(currentResEntry.jobtitle) }
}
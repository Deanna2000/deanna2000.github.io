const storedResume= JSON.parse(localStorage.getItem("resumeDatabase"))

let resumeInfo = document.getElementById("resume")

//grab resume data from the factory for each key and then display to browser for that object
for (let i = 0; i < storedResume.length; i++) {
    let currentResEntry = storedResume[i]
    resumeInfo.innerHTML += 
    `
    <section class="resumeStyles">
        <h2>${currentResEntry.jobtitle}</h2>
        <p>${currentResEntry.company}</p>
        <p>${currentResEntry.dates}</p>
    </section>
    `
    //grab details for accomplisments and then display to browser for that object
    for (let j=0;j<currentResEntry.accomplishments.length;j++) {
        let currentResAccomp = currentResEntry.accomplishments[j]
        //create string template for each li (insert currentResAccomp between each one)
        //add innerHTML for li to ul
        console.log(currentResAccomp)
        resumeInfo.innerHTML += 
        `
        <li>${currentResAccomp}<li>

        `
        console.log(currentResEntry.jobtitle) 
}
}
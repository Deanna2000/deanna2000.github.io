//Parse data to get out of local storage
const storedProjects = JSON.parse(localStorage.getItem("projectsDatabase"))

let projectsInfo = document.getElementById("projects")

//Get project data from the factory for each object and then display to browser
for (let i = 0; i < storedProjects.length; i++) {
    let currentProject = storedProjects[i]
    projectsInfo.innerHTML +=
        `
    <section>
        <h2>${currentProject.name}</h2>
        <a href="${currentProject.link}">Click here to see it</a>
        <p>${currentProject.description}</p>
    </section>
        `
}
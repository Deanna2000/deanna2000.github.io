let blogInfo = document.getElementById("blogs")

for (let i = 0; i < blogDatabase.length; i++) {
    let currentBlog = blogDatabase[i]
   blogInfo.innerHTML += 
    `
    <section class="blogging">
        <p>${currentBlog.date}</p>
        <h2> ${currentBlog.title}</h2>
        <p>${currentBlog.content}</p>
    </section>
    `
    console.log(currentBlog.title) 
}
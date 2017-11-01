//set variable to call the write statement
let blogInfo = document.getElementById("blog-posts")

//iterate over the blog database to display each article on the page
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
}

let blogInfo = document.getElementById("blogs")

for (let i = 0; i < blogDatabase.length; i++) {
    let currentBlog = blogDatabase[i]
   blogInfo.innerHTML += `<li class="${currentBlog.title}"><a href="${currentBlog.date}">${currentBlog.content}</a></li>`
    console.log(currentBlog.title) 
}
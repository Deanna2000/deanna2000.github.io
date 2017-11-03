console.log("You can build this form!!!")

//create form elements
//id, date, title, body

//Use forEach() to display the blog articles instead of a for loop.
//Your directory structure should be modular. DONE
//Your projects page should be projects/index.html. DONE
//Your blog should be blog/index.html. DONE
//Your resume should be resume/index.html. DONE
//You should still be paginating your blog articles.
//set up admin/blog.html DONE


//store blog post somewhere

//display blog posts




//set up form fields to capture the blog data
let blogTitle = document.getElementById("blog-title")
let button = document.getElementById("postIt")

//add event listener for button click to submit form
button.addEventListener("click", function(event){
    let userInput = document.getElementById("userInput").value
    console.log(userInput)
})

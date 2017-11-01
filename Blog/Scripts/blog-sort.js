
// Get the database from local storage
const bloglDatabase = JSON.parse(
    localStorage.getItem("blogDatabase")
) || {}

// Create `blogPosts` key - WHAT IS THIS FOR?
bloglDatabase.blogPosts = bloglDatabase.blogPosts || []


// generate ID's for the blog entries
const idGen = function* (from) {
    let id = 1
    while (true) {
        yield from + id
        id++
        console.log(id)
    }
}
const postIDGen = idGen();



// Factory function for new articles
// const postFactory = function (title, body, id) {
//     return Object.create(null, {
//         "id": {
//             value: id || postIDGen.next().value,
//             enumerable: true
//         },
//         "title": {
//             value: title,
//             enumerable: true
//         },
//         "body": {
//             value: body,
//             enumerable: true
//         }
//     })
// }

// const blogPostFactory = postFactory()

// Sort the articles by their `id` property, descending
bloglDatabase.blogPosts.sort((p, n) => n.id - p.id)
console.log(id)

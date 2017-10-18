let navDetail = JSON.parse(localStorage.getItem("navList"))
let navInfo = document.getElementById("nav")

for (let i = 0; i < navDetail.length; i++) {
    let currentTab = navDetail[i]
    navInfo.innerHTML += `<li class="${currentTab.css}"><a href="${currentTab.link}">${currentTab.title}</a></li>`
    console.log(currentTab.title) 
}
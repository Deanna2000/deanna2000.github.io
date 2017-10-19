let navInfo = document.getElementById("nav")

for (let i = 0; i < navList.length; i++) {
    let currentTab = navList[i]
    navInfo.innerHTML += `<li class="${currentTab.css}"><a href="${currentTab.link}">${currentTab.title}</a></li>`
    console.log(currentTab.title) 
}
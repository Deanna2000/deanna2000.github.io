let navInfo = document.getElementById("nav")

for (let i = 0; i < navList.length; i++) {
    let currentTab = navList[i]
    navInfo.innerHTML += `<div class="navbutton"><li class="${currentTab.css}"><a href="${currentTab.link}"><img src="${currentTab.image}" height="225px" width="225px"></a></li></div>`
    console.log(currentTab.title)
}
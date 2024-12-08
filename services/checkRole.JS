let savedUser = JSON.parse(localStorage.getItem("admin"))
let navMain = document.querySelectorAll(".nav-main a")
let loader = document.querySelector(".loader")

if (savedUser.role === "products") {
    navMain[3].style.display = "none"
}

if (savedUser.role === "comments"){
    navMain[2].style.display = "none"
    navMain[3].style.display = "none"
}

let accessRoles = {
    all: ["admins.html", "comments.html", "orders.html", "products.html"],
    products: ["products.html", "comments.html", "orders.html"],
    comments: ["products.html", "comments.html"]
}

let currUrl = location.pathname
let currPath = currUrl.substring(7, currUrl.length)

if (!accessRoles[savedUser.role].includes(currPath)) {
    localStorage.clear()
    location.pathname = "/"
} else {
    loader.classList.add("disabled")
}
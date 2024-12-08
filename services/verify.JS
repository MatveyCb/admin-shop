import { getData } from "./services.JS"
let savedUser = JSON.parse(localStorage.getItem("admin"))

if (!savedUser) location.pathname = "/"

getData("moderators", "admin").then(data => {
    let exModer = data.find(el => el.login === savedUser.login && el.password === savedUser.password)

    if (!exModer) {
        localStorage.clear()
        location.pathname = "/"
    }
})
import { getData } from "../services/services.JS";

let savedUres = JSON.parse(localStorage.getItem("admin"))

if (savedUres) {
    getData("moderators", "admin").then(data => {
        let exModer = data.find(el => el.login === savedUres.login && el.password === savedUres.password)

        if (exModer) {
            location.pathname = "/pages/product.html"
        }
    })
} else {
    let inplogin = document.querySelector("#login")
    let inpPassword = document.querySelector("#password")
    let form = document.querySelector("form")
    let message = document.querySelector("p")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let userLogin = inplogin.value
        let userPassword = inpPassword.value

        if (!userLogin || !userPassword) return

        getData("moderators", "admin").then(data => {
            let exModer = data.find(el => el.login === userLogin && el.password === userPassword)

            if (!exModer) return message.style.display = "block"

            localStorage.setItem("admin", JSON.stringify(exModer))
            message.style.display = "none"
            location.pathname = "/pages/products.html"
        })
    })
}


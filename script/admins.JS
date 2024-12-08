import { getData } from "../services/services.JS";

let adminList = document.querySelector("tbody")
let logoutBtn = document.querySelector("#logout-btn")

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    location.pathname = "/"
})

getData("moderators", "admin").then(data => {
    renderData(data)
})

function renderData(array) {
    adminList.innerHTML = ""

    array.forEach(admin => {
        adminList.innerHTML += `
             <tr>
                            <td>${admin.name}</td>
                            <td>${admin.lastName}</td>
                            <td>${admin.login}</td>
                            <td>${admin.password}</td>
                            <td>${admin.role}</td>

                            <td>
                                <button class="dlt">
                                    delete
                                </button>
                            </td>
                        </tr>
                        `

    });
}
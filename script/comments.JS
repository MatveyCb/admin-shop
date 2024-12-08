import { getData } from "../services/services.JS";

let commentsList = document.querySelector("tbody")
let logoutBtn = document.querySelector("#logout-btn")

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    location.pathname = "/"
})


getData("comments").then(data => {
    renderData(data)
})

function renderData(array) {
    commentsList.innerHTML = ""

        array.forEach(comment => {
            commentsList.innerHTML += `
             <tr>
                            <td>${comment.title}</td>
                            <td>
                                <div>${comment.text}</div>
                            </td>
                            <td> ${comment.author}</td>
                            <td>${comment.date}</td>
                            <td>
                                <button class="dlt">
                                    delete
                                </button>
                            </td>
                        </tr>
                        `

    });
}
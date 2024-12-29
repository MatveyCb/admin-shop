import { getData, deleteData } from "../services/services.JS";
import convertData from "../services/utils.js";

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
                            <td>${convertData(comment.date)}</td>
                            <td>
                                <button class="dlt" data-id="${comment.id}">
                                    delete
                                </button>
                            </td>
                        </tr>
                        `

    });
}

commentsList.addEventListener("click", (e) => {
    let delBtn = e.target.closest(".dlt")

    if (delBtn && confirm("This comment will be deleted")) {
        let commentId = delBtn.dataset.id

        deleteData("comments/" + commentId)
            .then(() => location.reload())
    }
})
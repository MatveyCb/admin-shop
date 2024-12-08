import { getData } from "../services/services.JS";

let orderList = document.querySelector("tbody")
let logoutBtn = document.querySelector("#logout-btn")

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    location.pathname = "/"
})


getData("orders", "admin").then(data => {
    renderData(data)
})

function renderData(array) {
    orderList.innerHTML = ""

    array.forEach(order => {
        orderList.innerHTML += `
             <tr>
                            <td>${order.client}</td>
                            <td>${order.phone}</td>
                            <td>${order.address}</td>
                            <td>${order.products}</td>
                            <td>${order.cost}</td>

                            <td>
                                <button class="dlt">
                                    delete
                                </button>
                            </td>
                        </tr>
                        `

    });
}
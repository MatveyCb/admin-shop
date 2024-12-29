import { getData, deleteData } from "../services/services.JS";

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
                                <select>
                                <option value="waiting">
                                    waiting
                                    </option>

                                    <option value="deliveting">
                                    delivering
                                    </option>

                                    <option value="success">
                                    success
                                    </option>

                                    <option value="canceled">
                                    canseled
                                    </option>
                                </select>
                            <button class="dlt" data-id =${order.id}>
                                    delete
                                </button>
                            </td>
                        </tr>
                        `

    });
}

orderList.addEventListener("click", (e) => {
    let delBtn = e.target.closest(".dlt")

    if (delBtn && confirm("This order will be deleted")) {
        let orderId = delBtn.dataset.id

        deleteData("orders/" + orderId, "admin")
            .then(() => location.reload())
    }
})
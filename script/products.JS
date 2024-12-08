import { getData } from "../services/services.JS";

let prodList = document.querySelector(".list")
let logoutBtn = document.querySelector("#logout-btn")

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    location.pathname = "/"
})


getData("products").then(data => {
    renderData(data)
})

function renderData(array) {
    prodList.innerHTML = ""
    console.log(array)
        array.forEach(prod => {
            prodList.innerHTML += `
                            <div class="card">
                    <div class="card-content">
                        <div class="card-img">
                            <img src="${prod.img}" alt="">

                        </div>
                        <div class="card-info">
                            <h2>
                                ${prod.title}
                            </h2>
                            <p>
                                ${prod.info}
                            </p>
                            <span>
                                 ${prod.discount ? prod.price - (prod.price * (prod.discountValue / 100)).toFixed(2) + `грн <span>${prod.price} грн</span>` : prod.price + "грн"}
                            </span>
                        </div>
                        <div class="card-btn">
                            <button class="btn edit-btn">
                                Edit
                            </button>
                            <button class="btn delete-btn">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            `

    });
}
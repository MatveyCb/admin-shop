let URL = "https://66573aef9f970b3b36c8790d.mockapi.io/"
let ADMIN_URL = "https://670af49dac6860a6c2caec2e.mockapi.io/"

async function getData(params,url="public") {
    let baseUrl = url==="admin"?ADMIN_URL:URL
    let res = await fetch(baseUrl + params)
    let data = await res.json()
    console.log(data)
    return data
}

export {getData}
const params = new URLSearchParams(location.search)
console.log(params)
var id = params.get("id")

const URL = "https://striveschool-api.herokuapp.com/api/product/"
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NDc2MDhmYzBmMzAwMTU1ZTVhY2UiLCJpYXQiOjE3MTgxMTAwNDgsImV4cCI6MTcxOTMxOTY0OH0.w82hZZEdNUe6s6wiIGb_yBzunMmdHcPLVETAZ85aYgI"

const getData = async () => {
    const data = await fetch(URL + id, {
        headers: {
            "Authorization": token
        }
    })
    const response = await data.json()
    return response
}


getData().then(data => {
    const PRODUCT = document.getElementById("product")
    PRODUCT.innerHTML = `<img src='${data.imageUrl}' class="w-100 br-60" />`

    const ASIDE = document.getElementById("information")

    const H1 = document.createElement("h1")
    H1.innerText = `${data.name}`
    H1.style.fontFamily = "monospace"

    const PO = document.createElement("P")
    PO.innerText = `${data.brand}`
    PO.style.fontSize = "1.4rem"

    const P = document.createElement("P")
    P.innerText = `${data.description}`
    P.style.fontSize ="1.4rem"

    const H3 = document.createElement("h3")
    H3.innerText = "EUR " + `${data.price}`
    H3.style.fontFamily = "monospace"

    const BUTTON = document.createElement("button")
    BUTTON.className = "btn bg-info text-white"
    BUTTON.style.fontSize = "1.4rem"
    BUTTON.style.fontWeight = "bold"
    BUTTON.type = "button"
    BUTTON.setAttribute("onclick", "addToCar('" + data._id + "', " + data.price + ")") 
    BUTTON.innerText = "Aggiungi al carrello"

    ASIDE.appendChild(H1)
    ASIDE.appendChild(PO)
    ASIDE.appendChild(P)
    ASIDE.appendChild(H3)
    ASIDE.appendChild(BUTTON)
})

function addToCar(id, price) {
    let car = localStorage.getItem("cart")
    let carObject = {
        id: id,
        price: price,
        number: 1,
    }
    if (car == null) {
        localStorage.setItem("cart", JSON.stringify([carObject]))
    }
    else {
        car = JSON.parse(car)
        let exit = 1
        car.forEach((element, index) => {
            if (element.id === id) {
                carObject.number = element.number + 1
                car.splice(index)
                car.push(carObject)
                localStorage.setItem("cart", JSON.stringify(car))
                exit = 0
            }
        })
        if (exit === 1) {
            car.push(carObject)
            localStorage.setItem("cart", JSON.stringify(car))
        }
    }
}


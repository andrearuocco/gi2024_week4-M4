const URL = "https://striveschool-api.herokuapp.com/api/product/"
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NDc2MDhmYzBmMzAwMTU1ZTVhY2UiLCJpYXQiOjE3MTgxMTAwNDgsImV4cCI6MTcxOTMxOTY0OH0.w82hZZEdNUe6s6wiIGb_yBzunMmdHcPLVETAZ85aYgI"

// function per chiamata al server di riferimento 
const getData = async () => {
    const data = await fetch(URL, {
        headers: {
            "Authorization": token
        }
    })
    const response = await data.json()
    return response
}

function object() {
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const brand = document.getElementById("brand").value
    const imageUrl = document.getElementById("imageUrl").value
    const price = document.getElementById("price").value
    fetch(URL, {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            name: name,
            description: description,
            brand: brand,
            imageUrl: imageUrl,
            price: price
        })
    })
    .then(response => {
        console.log(response)
    })
}

//   getData().then(data => {
//    console.log(data)
//})

// dichiarazione "Nokia camaleonte" (frontend)
/*let productO = {
    name: "3310 cellphone",
    description: "An unforgettable icon.",
    brand: "Nokia",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nokia_6110_blue-92107.jpg/800px-Nokia_6110_blue-92107.jpg",
    price: 2000
}

// post per aggiungere ai dati del server un nuovo prodotto
const addProduct = async function(product) {
    const added = await fetch(URL, {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
}*/
/*    */

document.addEventListener("DOMContentLoaded", () => {
    getData().then(data => {
        console.log(data)})
 })







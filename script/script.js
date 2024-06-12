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

//getData().then(data => {
//    console.log(data)
//})

// dichiarazione "Nokia camaleonte" (frontend)
var productO = {
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
}

document.addEventListener("DOMContentLoaded", () => {
    /*addProduct(productO)*/ //aggiungo "Nokia camaleonte" (/**/ - only product0)

    // richiamo la function che fa la chiamata al server e ne prendo i dati per stamparli in console 
    getData().then(data => {
        console.log(data)
    })
})


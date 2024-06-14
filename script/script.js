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

async function object() {
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const brand = document.getElementById("brand").value
    const imageUrl = document.getElementById("imageUrl").value
    const price = document.getElementById("price").value
    await fetch(URL, {
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
    await getData().then(data => {
        console.log(data)
        const PRODUCT = document.querySelector(".product")
        PRODUCT.innerHTML = ""
        data.forEach(element => {
            
            PRODUCT.innerHTML += `<div class="d-flex list-unstyled justify-content-between"><h5>${element._id}</h5> <p>${element.name}</p> <div><i class="fa-solid fa-pencil pe-3" onclick="change('${element._id}')"></i> <i class="fa-solid fa-trash" onclick="remove('${element._id}')"></i></div></div>`
        });
    })
}

//      getData().then(data => {
//          console.log(data)
//      })

// dichiarazione "Nokia camaleonte" (frontend)
/*
let productO = {
    name: "3310 cellphone",
    description: "An unforgettable icon.",
    brand: "Nokia",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nokia_6110_blue-92107.jpg/800px-Nokia_6110_blue-92107.jpg",
    price: 2000
}
*/

function change(id) {
    console.log("Modifica " + id)

    const OVERLAY = document.querySelector(".overlay")
    OVERLAY.classList.remove("d-none")

    const EDIT = document.querySelector("#edit-modal")
    EDIT.classList.add("d-block")

    fetch(URL + id, {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then(data => {
            document.getElementById("name_ed").value = data.name
            document.getElementById("description_ed").value = data.description
            document.getElementById("brand_ed").value = data.brand
            document.getElementById("imageUrl_ed").value = data.imageUrl
            document.getElementById("price_ed").value = data.price
            document.getElementById("id_ed").value = data._id
        })
    })

}

async function edit() {
    let name_ed = document.getElementById("name_ed").value 
    let description_ed = document.getElementById("description_ed").value 
    let brand_ed = document.getElementById("brand_ed").value 
    let imageUrl_ed = document.getElementById("imageUrl_ed").value 
    let price_ed = document.getElementById("price_ed").value 
    let id_ed = document.getElementById("id_ed").value 

    await fetch(URL + id_ed, {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        method: 'PUT',
        body: JSON.stringify({
            name: name_ed,
            description: description_ed,
            brand: brand_ed,
            imageUrl: imageUrl_ed,
            price: price_ed
        })
    })

    await getData().then(data => {
        const PRODUCT = document.querySelector(".product")
        PRODUCT.innerHTML = ""
        data.forEach(element => {
            
            PRODUCT.innerHTML += `<div class="d-flex list-unstyled justify-content-between"><h5>${element._id}</h5> <p>${element.name}</p> <div><i class="fa-solid fa-pencil pe-3" onclick="change('${element._id}')"></i> <i class="fa-solid fa-trash" onclick="remove('${element._id}')"></i></div></div>`
        });
    })

    closed()
  
}

async function trash(id) {
    await fetch(URL + id, {
        method: "DELETE",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    })

    await getData().then(data => {
        console.log(data)
        const PRODUCT = document.querySelector(".product")
        PRODUCT.innerHTML = ""
        data.forEach(element => {
            
            PRODUCT.innerHTML += `<div class="d-flex list-unstyled justify-content-between"><h5>${element._id}</h5> <p>${element.name}</p> <div><i class="fa-solid fa-pencil pe-3" onclick="change('${element._id}')"></i> <i class="fa-solid fa-trash" onclick="remove('${element._id}')"></i></div></div>`
        });
    })

    closed()
}

function remove(id) {
    const MODALFOOTER = document.getElementById("modal-footer")
    MODALFOOTER.innerHTML = `<button type="button" class="btn btn-primary" onclick="trash('${id}')">Save changes</button>`
    const REMOVE = document.getElementById("delete-modal")

    const OVERLAY = document.querySelector(".overlay")
    OVERLAY.classList.remove("d-none")

    REMOVE.classList.add("block")
}
 
function closed() {
    const REMOVE = document.getElementById("delete-modal")
    REMOVE.classList.remove("block")
    REMOVE.classList.add("none")

    const OVERLAY = document.querySelector(".overlay")
    OVERLAY.classList.add("d-none")

    const EDIT = document.querySelector("#edit-modal")
    EDIT.classList.remove("d-block")
}

document.addEventListener("DOMContentLoaded", () => {
    getData().then(data => {
        data.forEach(element => {
            const PRODUCT = document.querySelector(".product")
            PRODUCT.innerHTML += `<div class="d-flex list-unstyled justify-content-between"><h5>${element._id}</h5> <p>${element.name}</p> <div><i class="fa-solid fa-pencil pe-3" onclick="change('${element._id}')"></i> <i class="fa-solid fa-trash" onclick="remove('${element._id}')"></i></div></div>`
        });
    })
 })









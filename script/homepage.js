const URL = "https://striveschool-api.herokuapp.com/api/product/"
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NDc2MDhmYzBmMzAwMTU1ZTVhY2UiLCJpYXQiOjE3MTgxMTAwNDgsImV4cCI6MTcxOTMxOTY0OH0.w82hZZEdNUe6s6wiIGb_yBzunMmdHcPLVETAZ85aYgI"

const getData = async () => {
    const data = await fetch(URL, {
        headers: {
            "Authorization": token
        }
    })
    const response = await data.json()
    return response
}

// creando gli elementi in questo modo ho la posssibilità "dinamica" di gestire lo stile della pagina
getData().then(data => {
    console.log(data)
    data.forEach((element, i) => {
        const MAIN = document.querySelector("main")

        if(i === 0 || i % 4 === 0) {
            const SECTION = document.createElement("section")
            SECTION.className = "row my-4"
            const LOTTIE = document.createElement("div")
            LOTTIE.className = "row"
            LOTTIE.innerHTML = '<img src="https://www.svgrepo.com/show/51671/shop.svg" class="col-4 h-30" alt="shop" /><img src="https://www.svgrepo.com/show/303503/shopify-logo.svg" class="col-4 h-30" alt="buy" /><img src="https://www.svgrepo.com/show/194550/online-shop.svg" class="col-4 h-30" alt="delivery" />'
            const HEADING = document.createElement("h2")
            HEADING.className = "col-12 bg-success py-3"
            HEADING.innerText = "I nostri prodotti "
            HEADING.id = `I nostri prodotti ${i}`

            const DIVO = document.createElement("div")
            DIVO.className = "card text-bg-white col-12 col-sm-6 col-lg-3 position-relative pb-3 pb-lg-0"

            const DIVT = document.createElement("div")
            DIVT.className = "position-absolute bg-info opacity-25"

            const IMG = document.createElement("img")
            IMG.className = "card-img h-100"
            IMG.alt=`${element.name}`
            IMG.src=`${element.imageUrl}`

            const DIVTH = document.createElement("div")
            DIVTH.className = "bg-info d-none"
            const UL = document.createElement("ul")
            UL.className = "row list-unstyled text-dark ps-3 pe-3"
            const LI = document.createElement("li")
            LI.className = "col-6"
            LI.innerText = `${element.description}`
            const LIT = document.createElement("li")
            LIT.className = "col-6"
            LIT.innerText = `${element.brand}`
            const LITH = document.createElement("li")
            LITH.className = "col-12"
            LITH.innerText = `${element.price}`
            UL.appendChild(LI)
            UL.appendChild(LIT)
            UL.appendChild(LITH)

            const HEADINGT = document.createElement("h5")
            HEADINGT.className = "card-title text-white"


            const BUTTON = document.createElement("a")
            BUTTON.className = "tede-no"
            BUTTON.href = "./dettagli.html?id=" + element._id
            BUTTON.innerText = `${element.name}`
            HEADINGT.appendChild(BUTTON)


            DIVTH.appendChild(UL)
            DIVTH.appendChild(HEADINGT)

            DIVO.appendChild(DIVT)
            DIVO.appendChild(IMG)
            DIVO.appendChild(DIVTH)

            SECTION.appendChild(LOTTIE)
            SECTION.appendChild(HEADING)
            SECTION.appendChild(DIVO)

            MAIN.appendChild(SECTION)
        }
        else {
            const SECTION2 = document.querySelector("main section:last-child")

            const DIVO2 = document.createElement("div")
            DIVO2.className = "card text-bg-white col-12 col-sm-6 col-lg-3 position-relative pb-3 pb-lg-0"

            const DIVT2 = document.createElement("div")
            DIVT2.className = "position-absolute bg-info opacity-25"

            const IMG2 = document.createElement("img")
            IMG2.className = "card-img h-100"
            IMG2.alt=`${element.name}`
            IMG2.src=`${element.imageUrl}`

            const DIVTH2 = document.createElement("div")
            DIVTH2.className = "bg-info d-none"
            const UL2 = document.createElement("ul")
            UL2.className = "row list-unstyled text-dark ps-3 pe-3"
            const LI2 = document.createElement("li")
            LI2.className = "col-6"
            LI2.innerText = `${element.description}`
            const LIT2 = document.createElement("li")
            LIT2.className = "col-6"
            LIT2.innerText = `${element.brand}`
            const LITH2 = document.createElement("li")
            LITH2.className = "col-12"
            LITH2.innerText = `${element.price}`
            UL2.appendChild(LI2)
            UL2.appendChild(LIT2)
            UL2.appendChild(LITH2)

            const HEADINGT2 = document.createElement("h5")
            HEADINGT2.className = "card-title text-white"

            
            const BUTTON2 = document.createElement("a")
            BUTTON2.className = "tede-no"
            BUTTON2.href = "./dettagli.html?id=" + element._id
            BUTTON2.innerText = `${element.name}`
            HEADINGT2.appendChild(BUTTON2)
           

            DIVTH2.appendChild(UL2)
            DIVTH2.appendChild(HEADINGT2)

            DIVO2.appendChild(DIVT2)
            DIVO2.appendChild(IMG2)
            DIVO2.appendChild(DIVTH2)

            SECTION2.appendChild(DIVO2)
            MAIN.appendChild(SECTION2)
        }
    })
})

/*  CONTINUA SOTTO        
    <div class="card text-bg-white col-12 col-sm-6 col-lg-3 position-relative pb-3 pb-lg-0">

        <div class="position-absolute bg-info opacity-25"></div>

        <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Dragon_Ball_Xenoverse_2_Cover.jpeg"
            class="card-img h-100" alt="Dragon_Ball_Xenoverse_2">

        <div class="bg-info d-none">

            <ul class="row list-unstyled text-dark ps-3 pe-3">
     
                <li class="col-6">Videogames</li>
            
                <li class="col-6">dragonball</li>
               
                <li class="col-12">EUR 27,99</li>
  
            </ul>
        <h5 class="card-title text-white">Dragon Ball Xenoverse 2</h5>

        </div>
    </div>
*/

/* gestione funzionalità login modal */
function modal() {
    const LOGIN = document.getElementById("login-modal")
    LOGIN.classList.add("d-block")

    const OVERLAY = document.querySelector(".overlay")
    OVERLAY.classList.remove("d-none")
}

function stop() {
    const LOGIN = document.getElementById("login-modal")
    LOGIN.classList.remove("d-block")

    const OVERLAY = document.querySelector(".overlay")
    OVERLAY.classList.add("d-none")
}

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if ((email !== "") && (password !== "")) {
        const BACK = document.getElementById("back")
        BACK.href = "./backoffice.html"
    } else {
        alert("Compila tutti i campi per autenticarti correttamente!")
    }
}
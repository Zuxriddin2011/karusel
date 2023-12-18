const Plus = () => {
    let inp = document.querySelector(".inp").value;

    let h1 = document.querySelector("h1");


    if (inp % 2) {
        h1.innerText = `${inp} 2 ga bolinmaydi`
    } else {
        h1.innerText = `${inp} 2 ga bolinadi`
    }
}

const loding = document.querySelector(".loding")

const Home = () => {

    loding.style.display= "flex"

    setTimeout(() => {
        window.location = "./index.html"
    }, 2000)
}

const products = () => {
    loding.style.display= "flex"

    setTimeout(() => {
        window.location = "./produkt.html"
    }, 2000)
}
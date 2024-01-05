const funxtsyasi = () => {
    const value = document.querySelector(".inp").value
    const h1 = document.querySelector("h1")

    if (value == "olma") {
        h1.innerText = `${value}ni narhi 10 000so'm`
    } if (value == "nok") {
        h1.innerText = `${value}ni narhi 23 000so'm`
    } if (value == "bexi") {
        h1.innerText = `${value}ni narhi 14 000so'm`
    } if (value == "ananas") {
        h1.innerText = `${value}ni narhi 23 000so'm`
    } if (value == "banan") {
        h1.innerText = `${value}ni narhi 30 000so'm`
    } if (value == "kiwi") {
        h1.innerText = `${value}ni narhi 40 000so'm`
    }
}

const loding = document.querySelector(".loding")


const Home = () => {
    loding.style.display = "flex"

    setTimeout(() => {
        window.location = "./index.html"
    }, 2000)
}
const plus = () => {
    loding.style.display = "flex"

    setTimeout(() => {
        window.location = "./success.html"
    }, 2000)
}
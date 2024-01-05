const signIn = () => {
    let login = document.getElementById("login").value;
    let parol = document.getElementById("parol").value;
    let error = document.querySelector(".a");
    let loding = document.querySelector(".loding")

    if (login === "onam" && parol === "nigoraF") {
        loding.style.display = "flex";
        error.style.display = "none";

        setTimeout(() => {
            window.location = "./success.html";
        }, 3000);
    } else {
        loding.style.display = "none";
        error.style.display = "flex";
        error.innerHTML = "Login or password is failed";
    }
};
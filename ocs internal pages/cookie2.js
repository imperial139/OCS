const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = () => {
    document.cookie = "Cookie name=Coder ACB";
    if (document.cookie) {
        cookieBox.classList.add("hide");
    } else {
        alert("Cookie Can't be set! Please unblock this site from cookie setting in your browser");
    }
}
let checkCookie = document.cookie.indexOf("Cookie Name=Coder ACB");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
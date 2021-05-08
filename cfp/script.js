function cookieOk() {
    Cookie.set("setCookieHinweis", "HalloDuDeveloper", {max_age: "infinity"});

    document.getElementById("cookie-popup").classList.add("hidden");
}
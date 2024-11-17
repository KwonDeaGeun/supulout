document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
});

let btn_leaf= document.querySelector(".btn_leaf");
btn_leaf.onclick = function(){
    window.location.href = "leaf.html";
};

let btn_root = document.querySelector(".btn_root");
btn_root.onclick = function(){
    window.location.href = "grrr.html";
};

let btn_flower = document.querySelector(".btn_flower");
btn_flower.onclick = function(){
    window.location.href = "flower.html";
};

let btn_herb = document.querySelector(".btn_herb");
btn_herb.onclick = function(){
    window.location.href = "herb.html";
};
function scrollToTop() {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
    const scrollTopButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 200) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});

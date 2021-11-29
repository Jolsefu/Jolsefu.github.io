function julesConverter(event) {
    let img = event.srcElement;
    if (img.src.includes("images/cooler-jules.png")) {
        img.src = "images/jules.png"
    }
    else {
        img.src = "images/cooler-jules.png";
    }
}

function changeRegion() {
    let ph_img = document.querySelector("#ph-img").src;
    if (ph_img.includes("philippines.png")) {
        document.querySelector("#ph-img").src = "images/countries/luzon.png";
        document.querySelector("#region").innerHTML = "<span class='badge badge-dark'><h1 class='display-5'>This is Luzon!</h1></span>"
    }
    else if (ph_img.includes("luzon.png")) {
        document.querySelector("#ph-img").src = "images/countries/visayas.png";
        document.querySelector("#region").innerHTML = "<span class='badge badge-dark'><h1 class='display-5'>This is Visayas!</h1></span>"
    }
    else if (ph_img.includes("visayas.png")) {
        document.querySelector("#ph-img").src = "images/countries/mindanao.png";
        document.querySelector("#region").innerHTML = "<span class='badge badge-dark'><h1 class='display-5'>This is Mindanao!</h1></span>"
    }
    else {
        document.querySelector("#ph-img").src = "images/countries/philippines.png";
        document.querySelector("#region").innerHTML = "";
    }
}
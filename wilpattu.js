//Fetch JSON data
fetch("Data/wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("wilpattuData")) {
            localStorage.setItem("wilpattuData", JSON.stringify(data));
        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const wilpattuData = JSON.parse(localStorage.getItem("wilpattuData"));
console.log(wilpattuData + "asdadasda");
console.log(document.getElementById("wilpattuPara1"))
//Introduction
document.getElementById("wilpattuTopic").innerHTML = wilpattuData.wilpattuIntro[0].topic;

try {
    document.getElementById("wilpattuPara1").innerHTML = wilpattuData.wilpattuIntro[0].description;
}
catch (e) {
    console.log(e)
}
document.getElementById("wilpattuImg").innerHTML = `<img src=${wilpattuData.wilpattuIntro[0].image}>`;

//safari
document.getElementById("safariList").innerHTML = wilpattuData.wilpattuIntro[1].list.map((listItem) => `<li>${listItem}</li>`).join(" ");

//gallery
document.getElementById("wilpattuGallery").innerHTML = `<img src=${wilpattuData.gallery[0].images[0]}><img src=${wilpattuData.gallery[0].images[1]}><img src=${wilpattuData.gallery[0].images[2]}>`

//logout button
if (localStorage.getItem("currentUser")) {
    document.getElementById("login").innerHTML = `<a id="logoutBtn">logout</a>`;

} else {
    document.getElementById("login").innerHTML = `<a href="login.html">login</a>`;
}


if (localStorage.getItem("currentUser")) {
    document.getElementById("loginMobile").innerHTML = `<a id="MobilelogoutBtn">logout</a>`;//

} else {
    document.getElementById("loginMobile").innerHTML = `<a href="login.html">login</a>`;
}
const editButton = document.getElementById("editBtn")
if (!localStorage.getItem("currentUser")) {
    editButton.classList.add("hiddenBtn");

}
editButton.addEventListener("click", function () {
    window.open(
        "editor.html",
        "Editor",
        "width=600,height=400"
    )
});

function logout() {
    localStorage.removeItem("currentUser");
    alert("successfully logged out!")
    location.reload()
}

let logoutBtn = document.getElementById("logoutBtn");
let MobileBtn = document.getElementById("MobilelogoutBtn");

logoutBtn.addEventListener("click", logout);
MobileBtn.addEventListener("click", logout);


//subscribtion email
document.addEventListener("DOMContentLoaded", loadcontent)

function loadcontent() {
    const NewsletterForm = document.getElementById("newsletterForm");
    NewsletterForm.addEventListener("click", subscribe);
};

function subscribe(event) {
    event.preventDefault(); // Prevent form submission    
    const email = document.getElementById("email").value;

    // Save email to localStorage
    saveEmail(email);

    // Clear input field
    document.getElementById("email").value = "";
    alert("Thank you for subscribing! you will be updated");
};
function saveEmail(email) {
    let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    subscriptions.push(email);
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));

    console.log(subscriptions);
}


















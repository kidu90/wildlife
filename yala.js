//Fetch JSON data
fetch("Data/yala.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("yalaData")) {
            localStorage.setItem("yalaData", JSON.stringify(data));

        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const yalaData = JSON.parse(localStorage.getItem("yalaData"));

console.log(yalaData);

//yala introduction
document.getElementById("yalaTopic").innerHTML = yalaData.yalaIntro[0].topic;
document.getElementById("yalaPara").innerHTML = yalaData.yalaIntro[0].discrption;
document.getElementById("yalaImg").innerHTML = `<img src=${yalaData.yalaIntro[0].image}>`

//visitors and infromation
document.getElementById("infoTopic").innerHTML = yalaData.yalaIntro[1].topic;
document.getElementById("infoList").innerHTML = yalaData.yalaIntro[1].list.map((listItem) => `<li>${listItem}</li>`).join(" ");

//image gallery
document.getElementById("galleryTopic").innerHTML = yalaData.gallery[0].topic;
document.getElementById("gallery1").innerHTML = `<img src= ${yalaData.gallery[0].images[0]}><img src=${yalaData.gallery[0].images[1]}><img src=${yalaData.gallery[0].images[2]}>`
document.getElementById("gallery2").innerHTML = `<img src= ${yalaData.gallery[0].images[3]}><img src=${yalaData.gallery[0].images[4]}><img src=${yalaData.gallery[0].images[5]}>`


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
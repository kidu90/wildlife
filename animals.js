//Fetch JSON data
fetch("Data/animals.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("animalData")) {
            localStorage.setItem("animalData", JSON.stringify(data));
        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const animalData = JSON.parse(localStorage.getItem("animalData"));
console.log(animalData);

//breif
document.getElementById("breifText").innerHTML = animalData.breif[0].description;
document.getElementById("breifList").innerHTML = animalData.animal[0].list.map((listItem) => `<li>${listItem}</li>`).join("");
document.getElementById("breifImg").innerHTML = `<img src=${animalData.animal[1].image[0]}>`;
document.getElementById("breifImg2").innerHTML = `<img src=${animalData.animal[1].image[1]}>`;

//marine 
document.getElementById("marineImg").innerHTML = `<img src=${animalData.marine[1].image}>`;
document.getElementById("marinePara").innerHTML = animalData.marine[0].discription;


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
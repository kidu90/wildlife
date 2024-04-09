//Fetch JSON data
fetch("Data/department.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("departmentData")) {
            localStorage.setItem("departmentData", JSON.stringify(data));
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const departmentData = JSON.parse(localStorage.getItem("departmentData"));

console.log(departmentData);

//Image gallery
document.getElementById("galleryRow-1").innerHTML = `<img src=${departmentData.gallery[0].images[0]}><img src=${departmentData.gallery[0].images[1]}>`;
document.getElementById("galleryRow-2").innerHTML = `<img src=${departmentData.gallery[0].images[2]}><img src=${departmentData.gallery[0].images[3]}>`;
document.getElementById("galleryRow-3").innerHTML = `<img src=${departmentData.gallery[0].images[4]}><img src=${departmentData.gallery[0].images[5]}>`;


//list
document.getElementById("depList").innerHTML = departmentData.introDep[0].listItems.map((listItem) => `<li>${listItem}</li>`).join(" ");
document.getElementById("depImg").innerHTML = `<img src=${departmentData.introDep[0].image}>`;

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
//Fetch JSON data
fetch("Data/home.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("homeData")) {

            localStorage.setItem("homeData", JSON.stringify(data))
        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const homeData = JSON.parse(localStorage.getItem("homeData"));
console.log(homeData);

//hero
document.querySelector("#heroPara").innerHTML = homeData.hero[0].description;

//introduction
document.getElementById("introPara").innerHTML = homeData.intro[0].description;
document.getElementById("introImg").innerHTML = `<img src="${homeData.intro[0].image}">`;

//facts
document.getElementById("oneList").innerHTML = homeData.one[0].list.map((listItems) => `<li>${listItems}</li>`).join("");

//challenges and Threat
document.getElementById("twoList").innerHTML = homeData.two[0].list.map((listItems) => `<li>${listItems}</li>`).join("");


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

//
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











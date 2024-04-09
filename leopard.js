//Fetch JSON data
fetch("Data/leopard.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("leoData")) {
            localStorage.setItem("leoData", JSON.stringify(data));
        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const leoData = JSON.parse(localStorage.getItem("leoData"));

//Hortain Plains park
document.getElementById("topic1").innerHTML = leoData.leoVenue[0].topic;
document.getElementById("leo1Para").innerHTML = leoData.leoVenue[0].discrption;
document.getElementById("leo1Imgs").innerHTML = `<img src=${leoData.leoVenue[0].images[0]}><img src=${leoData.leoVenue[0].images[1]}>`

//Kumana National park
document.getElementById("topic2").innerHTML = leoData.leoVenue2[0].topic;
document.getElementById("leo2para").innerHTML = leoData.leoVenue2[0].discrption;
document.getElementById("leo2Imgs").innerHTML = `<img src=${leoData.leoVenue2[0].images[0]}><img src=${leoData.leoVenue2[0].images[1]}>`

//udawalawe National park
document.getElementById("topic3").innerHTML = leoData.leoVenue3[0].topic;
document.getElementById("leo3Para").innerHTML = leoData.leoVenue3[0].discrption;
document.getElementById("leo3Imgs").innerHTML = `<img src=${leoData.leoVenue3[0].images[0]}><img src=${leoData.leoVenue2[0].images[1]}>`

//habitat lost
document.getElementById("habitatImg").innerHTML = `<img src=${leoData.habitat[0].image}>`
document.getElementById("habitatPara").innerHTML = leoData.habitat[0].discrption;
document.getElementById("habitatList").innerHTML = leoData.habitat[0].list.map((listItem) => `<li>${listItem}</li>`).join("");

//poaching
document.getElementById("poachingImg").innerHTML = `<img src=${leoData.poaching[0].image}>`;
document.getElementById("poachingPara").innerHTML = leoData.poaching[0].discription;
document.getElementById("poachingList").innerHTML = leoData.poaching[0].list.map((listItems) => `<li>${listItems}</li>`).join("");

//facts 
document.getElementById("leoFacts").innerHTML = leoData.facts[0].list.map((listItems) => `<li>${listItems}</li>`).join("");

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
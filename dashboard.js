//to show newsletter subscriptions
function list_generator(array) {
    let code = ``;
    let array_size = array.length;
    for (let i = 0; i < array_size; i++) {
        code += `<li>${array[i]}</li>`;
    }
    return code;
}



const btn = document.getElementById("SubscribeBtn");
let subEmails = document.getElementById("emailList");
btn.addEventListener("click", function () {
    let subscriptions = JSON.parse(localStorage.getItem("subscriptions"));
    if (subscriptions == "") {
        subEmails.innerHTML = "No subscription appered yet"
    } else {
        subEmails.innerHTML = list_generator(subscriptions);
    }

})

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

//editor  button
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

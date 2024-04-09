

//Fetch JSON data
fetch("Data/user.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        localStorage.setItem("userData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        const user = userData.find((userName) => userName.username === username && userName.password === password);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "dashboard.html"
            alert("You have successfully Logged in! Redirecting to the Dashboard");
        } else {
            alert("Invalid credentials")
        }

    }
});

if (localStorage.getItem("currentUser")) {
    alert("You are already Logged in!")
    window.location.href = "index.html"
}






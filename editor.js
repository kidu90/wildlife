//fetching all data to local storage if they don't exit already
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

fetch("Data/wildlife.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("wildlifeData")) {
            localStorage.setItem("wildlifeData", JSON.stringify(data));

        }

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

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



const selectBtn = document.getElementById("select");
const editBtn = document.getElementById("edit");

selectBtn.addEventListener("click", function () {
    const currentPage = document.getElementById("pages").value;
    let jsonEditor = document.getElementById("jsonData");
    jsonEditor.value = localStorage.getItem(currentPage);//populating the text editor with the currebtly selected data

})

editBtn.addEventListener("click", function () {
    const currentPage = document.getElementById("pages").value;
    const currentJSON = document.getElementById("jsonData").value;
    localStorage.setItem(currentPage, currentJSON);

})


var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var dataContainer = [];
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("updateBtn")
var currentIndex = -1;

if (localStorage.getItem("urlData") != null) {
    dataContainer = JSON.parse(localStorage.getItem("urlData"))
    displayData();
}
function addData() {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if (!nameRegex.test(nameInput.value) || !urlRegex.test(urlInput.value)) {
        let toastEl = document.getElementById('errorToast');
        let toast = new bootstrap.Toast(toastEl);
        toast.show();
        return;
    }


    const dataInput = {
        name: nameInput.value,
        url: urlInput.value,
    };

    dataContainer.push(dataInput);
    localStorage.setItem("urlData", JSON.stringify(dataContainer));
    displayData();
    clearForm();
}


function displayData() {
    var container = ``;
    for (var i = 0; i < dataContainer.length; i++) {
        const halfUrl = dataContainer[i].url.match(/^(https?:\/\/[^\/]+)/)[0];
        container += `<tr>
                <td>${i + 1}</td>
                <td>${dataContainer[i].name}</td>
                <td>${halfUrl}</td>
                <td><a href="${dataContainer[i].url}" target="_blank"><button class="btn btn-sm btn-outline-success">Visit</button></a></td>
                <td><button onclick="deleteData(dataContainer,${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
                <td><button onclick="updateTablebtn(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
                </tr>`
    }
    document.getElementById("tableDisplay").innerHTML = container;
}

function clearForm() {
    nameInput.value = "";
    urlInput.value = "";
}

function deleteData(arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
        localStorage.setItem("urlData", JSON.stringify(arr));
        displayData()

    }
}

function updateTablebtn(index) {
    nameInput.value = dataContainer[index].name;
    urlInput.value = dataContainer[index].url;
    currentIndex = index;

    addBtn.classList.add("d-none")
    updateBtn.classList.remove("d-none")

}

function updateData() {
    dataContainer[currentIndex].name = nameInput.value;
    dataContainer[currentIndex].url = urlInput.value;
    localStorage.setItem("urlData", JSON.stringify(dataContainer));
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
    clearForm();
    displayData();
}

function searchData(term) {
    var container = ``;
    for (var i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            const halfUrl = dataContainer[i].url.match(/^(https?:\/\/[^\/]+)/)[0];
            container += `<tr>
                <td>${i + 1}</td>
                <td>${dataContainer[i].name}</td>
                <td>${halfUrl}</td>
                <td><a href="${dataContainer[i].url}" target="_blank"><button class="btn btn-sm btn-outline-success">Visit</button></a></td>
                <td><button onclick="deleteData(dataContainer,${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
                <td><button onclick="updateTablebtn(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
                </tr>`
        }
        document.getElementById("tableDisplay").innerHTML = container;
    }
}


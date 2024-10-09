var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addProductBtn = document.getElementById('addProductBtn');
var updateProductBtn = document.getElementById('updateProductBtn');
var productsContainer = [];
var currentIndex = -1;

if (localStorage.getItem("products") != null) {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProducts();
}

function addingProducts() {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescriptionInput.value
        };
        productsContainer.push(product)
        localStorage.setItem("products", JSON.stringify(productsContainer))
        displayProducts();
        clearForm();


}

function deleteProducts(arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(arr));
        displayProducts();
    }
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}

function displayProducts() {
    var container = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        container += `<tr>
                <td>${i + 1}</td>
                <td>${productsContainer[i].name}</td>
                <td>${productsContainer[i].price}</td>
                <td>${productsContainer[i].category}</td>
                <td>${productsContainer[i].desc}</td>
                <td><button onclick="deleteProducts(productsContainer,${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
                <td><button onclick="editProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
                </tr>`
    }
    document.getElementById('tableDisplay').innerHTML = container;

}

function searchProducts(term) {
    var container = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            container += `<tr>
            <td>${i + 1}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="deleteProducts(productsContainer,${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
            <td><button onclick="editProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
            </tr>`}
    }
    document.getElementById('tableDisplay').innerHTML = container;
}

function editProduct(index) {
    productNameInput.value = productsContainer[index].name;
    productPriceInput.value = productsContainer[index].price;
    productCategoryInput.value = productsContainer[index].category;
    productDescriptionInput.value = productsContainer[index].desc;

    currentIndex = index;

    addProductBtn.classList.add("d-none");
    updateProductBtn.classList.remove("d-none");
}

function updateProduct() {
    productsContainer[currentIndex].name = productNameInput.value;
    productsContainer[currentIndex].price = productPriceInput.value;
    productsContainer[currentIndex].category = productCategoryInput.value;
    productsContainer[currentIndex].desc = productDescriptionInput.value;

    localStorage.setItem("products", JSON.stringify(productsContainer));

    displayProducts();
    clearForm();

    addProductBtn.classList.remove("d-none");
    updateProductBtn.classList.add("d-none");
}


// function validateProductName() {
//     var regex = /^[A-Z][a-z]{3-8}$/
//     if (productNameInput.value == true) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
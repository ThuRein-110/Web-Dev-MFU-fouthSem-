let editingIndex = null;
let products = JSON.parse(localStorage.getItem("products")) || [];

const modal = document.getElementById("productModal");
const preview = document.getElementById("previewImage");
const imageInput = document.getElementById("productImage");

imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    // 🚨 Limit file size (1MB)
    if (file.size > 1024 * 1024) {
        alert("Image too large! Please select image less than 1MB.");
        imageInput.value = "";
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(file);
});

function openModal(index = null) {
    modal.style.display = "flex";

    if (index !== null) {
        editingIndex = index;
        document.getElementById("productName").value = products[index].name;
        document.getElementById("productPrice").value = products[index].price;

        if (products[index].image) {
            preview.src = products[index].image;
            preview.style.display = "block";
        }
    } else {
        editingIndex = null;
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        imageInput.value = "";
        preview.style.display = "none";
    }
}

function closeModal() {
    modal.style.display = "none";
}

function saveProduct() {
    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();

    if (!name || !price) {
        alert("Please fill all fields");
        return;
    }

    const image = preview.src || "";

    if (editingIndex === null) {
        products.push({ name, price, image });
    } else {
        products[editingIndex] = { name, price, image };
    }

    try {
        localStorage.setItem("products", JSON.stringify(products));
    } catch (e) {
        alert("Storage full! Delete some products.");
        return;
    }

    closeModal();
    displayProducts();
}

function displayProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((product, index) => {
        list.innerHTML += `
            <div class="card">
                ${product.image ? `<img src="${product.image}">` : ""}
                <h3>${product.name}</h3>
                <p>${product.price} baht</p>
                <button class="edit-btn" onclick="openModal(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

displayProducts();

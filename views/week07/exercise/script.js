let products = [];

document.getElementById("addBtn").addEventListener("click",addProduct);

function addProduct(){
    let nameinput = document.getElementById("name");
    let priceinput = document.getElementById("price");

    const name = nameinput.value;
    const price = priceinput.value;

    if (name == "" || price ==""){
        alert("Please fill all fields");
        return;
    }  
        products.push(
            {name : name,
             price : price}
        );

    
    nameinput.value = "";
    priceinput.value = "";
    displayProducts();
}

function displayProducts(){
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(function(product,index){
        list.innerHTML +=`
        <div class="card">
            <strong>${product.name}</strong> - ${product.price}Baht
            <button onClick="deleteProduct(${index})">Delete</button>
        </div>`;
    })
}

function deleteProduct(index){
    products.splice(index, 1);
    displayProducts();
}
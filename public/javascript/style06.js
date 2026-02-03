const productsContainer = document.querySelector('.products');
const addButton = document.querySelector('.add');

function createProductCard(name, price) {
    const card = document.createElement('div');
    card.className = 'card bg-white p-4 w-36 rounded-xl shadow text-center';

    const h3 = document.createElement('h3');
    h3.textContent = name;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = price + ' baht';
    card.appendChild(p);

    const actions = document.createElement('div');
    actions.className = 'actions flex justify-between mt-4';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500';
    editBtn.onclick = () => editProduct(card);
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600';
    deleteBtn.onclick = () => deleteProduct(card);
    actions.appendChild(deleteBtn);

    card.appendChild(actions);

    return card;
}

addButton.addEventListener('click', () => {
    const name = prompt('Enter product name:');
    if (!name) return;

    const price = prompt('Enter product price:');
    if (!price || isNaN(price)) {
        alert('Invalid price!');
        return;
    }

    const newCard = createProductCard(name, price);
    productsContainer.appendChild(newCard);
});

function editProduct(card) {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');

    const newName = prompt('Edit product name:', h3.textContent);
    if (newName) h3.textContent = newName;

    const newPrice = prompt('Edit product price:', p.textContent.replace(' baht', ''));
    if (newPrice && !isNaN(newPrice)) p.textContent = newPrice + ' baht';
}

function deleteProduct(card) {
    if (confirm('Are you sure you want to delete this product?')) {
        card.remove();
    }
}

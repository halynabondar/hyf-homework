const ul = document.querySelector('#list');

console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {

    for (let product of products) {
        const li = document.createElement('li');
        li.classList.add('flex-row');
        const title = document.createElement('span');
        title.textContent = product.id;
        title.classList.add('flex-col', 'title');
        const rating = document.createElement('span');
        rating.textContent = `rating: ${product.rating}`;
        rating.classList.add('flex-col', 'rating');
        const price = document.createElement('span');
        price.classList.add('flex-col', 'price');
        price.textContent = `${product.price} DKK`;
        li.appendChild(title);
        li.appendChild(rating);
        li.appendChild(price);
        ul.appendChild(li);
    }
}

renderProducts(products);

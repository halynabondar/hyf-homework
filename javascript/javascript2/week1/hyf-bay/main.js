const ul = document.querySelector('#list');

console.log("Script loaded");

const products = getAvailableProducts();

function renderTitle(title) {
    const titleElement = document.createElement('span');
    titleElement.textContent = title;
    titleElement.classList.add('flex-col', 'title');
    return titleElement;
}

function renderRating(rating) {
    const ratingElement = document.createElement('span');
    ratingElement.textContent = `rating: ${rating}`;
    ratingElement.classList.add('flex-col', 'rating');
    return ratingElement;
}

function renderPrice(price) {
    const priceElement = document.createElement('span');
    priceElement.classList.add('flex-col', 'price');
    priceElement.textContent = `${price} DKK`;
    return priceElement;
}

function renderProduct(product) {
    const li = document.createElement('li');
    li.appendChild(renderTitle(product.id));
    li.appendChild(renderRating(product.rating));
    li.appendChild(renderPrice(product.price));
    li.classList.add('flex-row');
    return li;
}

function renderProducts(products) {
    for (let product of products) {
        ul.appendChild(renderProduct(product));
    }
}

renderProducts(products);
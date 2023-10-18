const tshirtContainer = document.getElementById("tshirt-container");

function displayProducts(){
  products.forEach((product) => {
    tshirtContainer.innerHTML += `
                <div class="shirt1">
                  <img src="${product.imgSrc}" alt="${product.name}">
                  <p>${product.name}</p>
                  <p>${product.price}</p>
                  <div class="button-container">
                      <button>+</button>
                      <span>0</span>
                      <button>-</button> <br>
                      ${product.instock} pcs. in stock <br>
                      <button id="cart-button">Add to Cart</button>
                  </div>
                </div>`
  });
}

displayProducts();
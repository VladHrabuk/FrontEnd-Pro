async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  console.log(data);
  return data;
}

const productDetails = document.querySelector(".details");
const productBoxes = document.querySelectorAll(".product-box");

async function showDetails(productId) {
  const data = await getProducts();
  const product = data.find((product) => product.id == productId);
  console.log(product);
  const { image, name, price, description, components, size, producer } =
    product;
  productDetails.innerHTML = `
        <h2 class="product-title">Деталі</h2>
        <img class="image" src="${image}" alt="product">
        <h3 class="name-product">${name}</h3>
        <p class="cost">${price}</p>
        <p class="description">${description}</p>
        <p class="components"><b>Склад:</b> ${components}</p>
        <p class="size"><b>Розміри:</b> ${size}</p>
        <p class="producer"><b>Виробник:</b> ${producer}</p>
      `;
}

productBoxes.forEach((productBox) => {
  productBox.addEventListener("click", async () => {
    const productId = productBox.id;
    console.log(productId);
    await showDetails(productId);
  });
});

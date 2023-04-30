// fetch("http://localhost:3000/api/users")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     let randomId = data.data[0].id;
//     console.log(randomId);
//     return fetch(`http://localhost:3000/api/users/${randomId}`);
//   });

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  console.log(data);
  return data;
}

let func = getProducts();
// Використовуємо функцію fetch для отримання даних з файлу JSON
fetch("http://localhost:3000/api/users")
  .then((response) => response.json()) // Перетворюємо відповідь сервера в JSON
  .then((data) => {
    // Перебираємо кожен елемент масиву продуктів з файлу JSON
    data.map((product) => {
      // Створюємо HTML-код для кожної картки продукту
      const productCard = `
           <div class="product-box" id="${product.id}">
             <img class="image" src="${product.image}" alt="${product.name}">
             <h2 class="name-product">${product.name}</h2>
             <p class="cost">${product.price}</p>
             <button class="add-product" type="submit"><i class="bx bx-shopping-bag add-cart"></i></button>
           </div>
         `;
      // Додаємо HTML-код картки продукту до блоку products-container
      document.querySelector(".products-container").innerHTML += productCard;
    });
  });

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

// const productsContainer = document.querySelector(".products-container");

// fetch("products.json")
//   .then((response) => response.json())
//   .then((products) => {
//     // Розміщення карток продуктів у контейнері
//     products.forEach((product) => {
//       const productBox = document.createElement("div");
//       productBox.classList.add("product-box");
//       productBox.id = product.id;
//       productBox.innerHTML = `
//         <img class="image" src="${product.image}" alt="${product.name}">
//         <h2 class="name-product">${product.name}</h2>
//         <p class="cost">${product.price}</p>
//         <button class="add-product" type="submit"><i class="bx bx-shopping-bag add-cart"></i></button>
//       `;
//       productsContainer.appendChild(productBox);
//     });
//   });

// const productBoxes = document.querySelectorAll(".product-box");
// const productDetails = document.querySelector(".details");

// productBoxes.forEach((productBox) => {
//   productBox.addEventListener("click", (event) => {
//     const productId = event.currentTarget.id;
//     // Завантаження детальної інформації про продукт з файлу JSON
//     fetch("products.json")
//       .then((response) => response.json())
//       .then((products) => {
//         const product = products.find((product) => product.id == productId);
//         // Відображення детальної інформації про продукт у правій частині сторінки
//         const { image, name, price, description, components, size, producer } =
//           product;
//         productDetails.innerHTML = `
//                 <h2 class="product-title">Деталі</h2>
//                 <img class="image" src="${image}" alt="product">
//                 <h3 class="name-product">${name}</h3>
//                 <p class="cost">${price}</p>
//                 <p class="description">${description}</p>
//                 <p class="components"><b>Склад:</b> ${components}</p>
//                 <p class="size"><b>Розміри:</b> ${size}</p>
//                 <p class="producer"><b>Виробник:</b> ${producer}</p>
//               `;
//       });
//   });
// });

// productBoxes.forEach((productBox) => {
//   productBox.addEventListener("click", async () => {
//     const productId = productBox.id;
//     console.log(productId);
//     await showDetails(productId);
//   });
// });

// fetch("./products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // викликаємо функцію для відображення карток товарів
//     displayProducts(data);
//   });

// // функція для відображення карток товарів
// function displayProducts(products) {
//   const productsContainer = document.querySelector(".products-container");
//   // створюємо HTML-код для кожної картки товару
//   const productCards = products
//     .map(
//       (product) => `
//                     <div class="product-box" id="${product.id}">
//                         <img class="image" src="${product.image}" alt="product">
//                         <h2 class="name-product">${product.name}</h2>
//                         <p class="cost">${product.price}</p>
//                         <button class="add-product" type="submit"><i class="bx bx-shopping-bag add-cart"></i></button>
//                     </div>
//                 `
//     )
//     .join("");

//   // вставляємо HTML-код у контейнер
//   productsContainer.innerHTML = productCards;

//   // додаємо обробник кліку на кожну картку товару
//   const productBoxes = document.querySelectorAll(".product-box");
//   productBoxes.forEach((productBox) => {
//     productBox.addEventListener("click", () => {
//       // отримуємо інформацію про товар, що відповідає клікнутій картці
//       const product = products.find((product) => product.id == productBox.id);
//       // створюємо HTML-код для детальної інформації про товар
//       const productDetails = `
//                             <img class="image" src="${product.image}" alt="product">
//                             <h2 class="name-product">${product.name}</h2>
//                             <p class="cost">${product.price}</p>
//                             <p class="description">${product.description}</p>
//                             <p class="components">Склад: ${product.components}</p>
//                             <p class="size">Розмір: ${product.size}</p>
//                             <p class="producer">Виробник: ${product.producer}</p>
//                         `;

//       // вставляємо HTML-код у контейнер для детальної інформації
//       const productDetailsContainer = document.querySelector(".details");
//       productDetailsContainer.innerHTML = productDetails;
//     });
//   });
// }

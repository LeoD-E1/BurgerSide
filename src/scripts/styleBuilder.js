const product = document.getElementById("product").content;
const fragment = document.createDocumentFragment();
const products = document.getElementById("products");

document.addEventListener("DOMContentLoaded", () => contentLoaded());
products.addEventListener("click", (event) => {
  addProductToCart(event.target);
});

const contentLoaded = () => {
  getDataFromDatabase();
};

const getDataFromDatabase = async () => {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    renderCards(data);
  } catch (error) {
    alert(error);
    getDataFromDatabase();
  }
};

const renderCards = (data) => {
  data.Base.map((item) => {
    product.querySelector("div").setAttribute("id", item.id);
    product.querySelector("img").setAttribute("src", item.imageUrl);
    product.querySelector("h3").textContent = item.name;
    product.querySelector("p").textContent = item.description;
    product.querySelector("h5").textContent = item.price;
    const clone = product.cloneNode(true);
    fragment.appendChild(clone);
  });
  products.appendChild(fragment);
};

const addProductToCart = (target) => {
  console.log(target);
};

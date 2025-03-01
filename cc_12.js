// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("********** Created Revenue Metric Card **********");
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$50,000</p>
`;
dashboardContainer.appendChild(revenueCard);

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
console.log("********** Updated Metric Cards via Array Conversion **********");
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = [...metricCards];
metricCardsArray.forEach((card) => {
  const title = card.querySelector("h3");
  if (title) {
    title.textContent += " - Updated";
  }
  card.style.backgroundColor = "#FFC0CB"; // Baby Pink
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items
console.log("********** Implemented Dynamic Inventory List **********");
function addProduct(){
    const productItem = document.createElement("li");
    productItem.setAttribute("class", "product-item");
    productItem.setAttribute("data-product-id", Date.now());
    productItem.textContent = `Product ${document.querySelectorAll(".product-item").length +1}`
    productItem.addEventListener("click", () => removeProduct(productItem));
    const inventoryList = document.getElementById("inventoryList")
    inventoryList.appendChild(productItem);
  }
  function removeProduct(productItem){
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(productItem);
  }
  const addProductButton = document.getElementById("addProductButton");
  addProductButton.addEventListener("click", addProduct);
  


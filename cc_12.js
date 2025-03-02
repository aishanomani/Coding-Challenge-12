// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("********** Created Revenue Metric Card **********");
// Select The Dashboard Container:
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");
// Create <div> Element To Represent The Metric Card
const revenueCard = document.createElement("div");
// Use setAttribute To Assign A Class And An Id To The New Element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
// Populate The Card With A Title And A Placeholder Value
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`;
// Append The New Metric Card To The Dashboard Container
dashboardContainer.appendChild(revenueCard);


// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
console.log("********** Updated Metric Cards via Array Conversion **********");
// Use document.querySelectorAll To Select All Elements With The Class "metric-card"
const metricCards = document.querySelectorAll(".metric-card");
// Convert The Resulting NodeList Into An Array
const metricCardsArray = [...metricCards];
// Use An Array Method To Update Each Card’s Inner Text 
metricCardsArray.forEach((card) => {
  const title = card.querySelector("h3");
  if (title) {
    title.textContent += " - Updated";
  }
  // Change Color Using The CSS Class Instead Of Inline Styling
  card.classList.add("updated-card"); // Baby Pink
});


// Task 3: Dynamic Inventory Management – Adding and Removing Items
console.log("********** Implemented Dynamic Inventory List **********");
// Function That Creates A New <li> Element Representing A Product.
function addProduct(){
    const productItem = document.createElement("li");
// Use setAttribute To Add A Class Or A Custom Data Attribute To The <li> (Time)
    productItem.setAttribute("class", "product-item");
    productItem.dataset.productId = Date.now();
// Create Text Label
    function getNextProductNumber() {
      return document.querySelectorAll(".product-item").length + 1;
  }
  productItem.textContent = `Product ${getNextProductNumber()}`;  
// Ensure That Products With Blank Names Are Not Added
if (!productItem.textContent.trim()) {
  return;
}
// Remove Product When Clicked
    productItem.addEventListener("click", () => removeProduct(productItem));
// Add New Product To Inventory List
const inventoryList = document.getElementById("inventoryList")
inventoryList.appendChild(productItem);
}
// Remove Specific Product From Inventory List
function removeProduct(productItem){
const inventoryList = document.getElementById("inventoryList");
inventoryList.removeChild(productItem);
}
// Add Product Button 
const addProductButton = document.getElementById("addProductButton");
// Activate Add Product Button
addProductButton.addEventListener("click", addProduct);


// Task 4: Business Customer Section – Handling Event Bubbling
console.log("********** Demonstrated Event Bubbling in Customer Section **********");
// Create A Nested Structure
const customerSection = document.getElementById("customerSection");
// Attach Click Event Listeners
customerSection.addEventListener("click", () => {
  console.log("Customer Section Clicked");
});
const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
  card.style.backgroundColor = "#bcbcde"; // Lavender 
  card.addEventListener("click", (event) => {
    console.log(`User clicked: ${event.target.textContent}`);
 // Ensure Parent's Event Handler Does Not Trigger.
    event.stopPropagation();
  });
});

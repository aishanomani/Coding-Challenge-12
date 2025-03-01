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

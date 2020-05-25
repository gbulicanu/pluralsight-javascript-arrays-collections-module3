// Accessing the objects
let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");

let yearlyLabel = document.getElementById("yearlyTotal");

// Values from the form
let newAmount = document.getElementById("itemAmount");
let newMonth = document.getElementById("monthId");

// Monthly Totals
let yearlyTotal = 0;

let monthlySales = new Set();
let monthlyLabels = new Set();

function addSale() {
  monthlySales.add(newAmount.value);
  monthlyLabels.add(newMonth.value);
  alert("You have entered in " + monthlySales.size + " sales");
  console.log(monthlySales);
}

function deleteValue() {
  monthlySales.delete("1500");
}

// Bar chart
// let monthlySalesChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: monthlyLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: monthlySales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// // Pie Chart
// let deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {

//     }
// });

(async function() {
    try {
      const data = await fetchData();

      // Chart Global Color
      Chart.defaults.color = "#fff"; // "#6C7293" default
      Chart.defaults.borderColor = "#000000";

      // Salse & Revenue Chart
      var ctx2 = $("#salse-revenue").get(0).getContext("2d");
      var myChart2 = new Chart(ctx2, {
          type: "line",
          data: {
              labels: data.categories.slice(0, 7),
              datasets: [{
                      label: "Salse",
                      data: data.columnData.slice(0,7),
                      backgroundColor: "pink",
                      fill: true
                  },
                  {
                      label: "Revenue",
                      data: data.lineData.slice(0,7),
                      backgroundColor: "green",
                      fill: true
                  }
              ]
              },
          options: {
              responsive: true
          }
      });

      // Single Line Chart
      var ctx3 = $("#line-chart").get(0).getContext("2d");
      var myChart3 = new Chart(ctx3, {
          type: "line",
          data: {
              labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
              datasets: [{
                  label: "Salse",
                  fill: false,
                  backgroundColor: "rgba(235, 22, 22, .7)",
                  data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
              }]
          },
          options: {
              responsive: true
          }
      });
    } catch (error) {
        console.error('Error fetching data:', error);
      }
})();
  
  
(async function() {
    try {
      const data = await fetchData();
        
        // Chart Global Color
        Chart.defaults.color = "#fff"; // "#6C7293" default
        Chart.defaults.borderColor = "#000000";
    
        console.log(data.pieData.slice(0,5));
        // Worldwide Sales Chart
        try{
            var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
            var myChart1 = new Chart(ctx1, {
                type: "bar",
                data: {
                    labels: data.categories.slice(0, 7),
                    datasets: [{
                            label: "USA",
                            data: data.columnData.slice(0,7),
                            backgroundColor: "#fff"
                        },
                        {
                            label: "UK",
                            data: data.columnData.slice(7,14),
                            backgroundColor: "rgba(235, 22, 22, .5)"
                        },
                        {
                            label: "AU",
                            data:data.columnData.slice(14,21),
                            backgroundColor: "rgba(235, 22, 22, .3)"
                        }
                    ]
                    },
                options: {
                    responsive: true
                }
            });
        }
        catch(err){
            console.log(err);  
        }
        
        
        
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


        // Single Bar Chart
        var ctx4 = $("#bar-chart").get(0).getContext("2d");
        var myChart4 = new Chart(ctx4, {
            type: "bar",
            data: {
                labels: ["Italy", "France", "Spain", "USA", "Argentina"],
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 22, 22, .7)",
                        "rgba(235, 22, 22, .6)",
                        "rgba(235, 22, 22, .5)",
                        "rgba(235, 22, 22, .4)",
                        "rgba(235, 22, 22, .3)"
                    ],
                    data: [55, 49, 44, 24, 15]
                }]
            },
            options: {
                responsive: true
            }
        });
        

        // Pie Chart
        var ctx5 = $("#pie-chart").get(0).getContext("2d");
        var myChart5 = new Chart(ctx5, {
            type: "pie",
            data: {
                labels: ["Italy", "France", "Spain", "USA", "Argentina"],
                datasets: [{
                    backgroundColor: [
                        "red",
                        "green",
                        "blue",
                        "yellow",
                        "pink"
                    ],
                    data: [55, 49, 44, 24, 15]
                }]
            },
            options: {
                responsive: true
            }
        });

        // Doughnut Chart
        var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
        var myChart6 = new Chart(ctx6, {
            type: "doughnut",
            data: {
                labels: data.categories.slice(0, 5),
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 22, 22, .7)",
                        "rgba(235, 22, 22, .6)",
                        "rgba(235, 22, 22, .5)",
                        "rgba(235, 22, 22, .4)",
                        "rgba(235, 22, 22, .3)"
                    ],
                    data: data.columnData.slice(0,5)
                }]
            },
            options: {
                responsive: true
            }
        });
    
        console.log(data.categories.slice(0, 5));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })();





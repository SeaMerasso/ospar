$(function() {
   var options = {
      chart: {
         renderTo: 'categorie',
         defaultSeriesType: 'pie',
         marginTop:0,
      },
      colors: ['#2f7ed8', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'], 
      title: {
         text: 'Répartition par catégories.'
      },
      tooltip :{
        pointFormat: '{point.y:.0f} '
      },
      plotOptions: {
         pie: {
            size: 150,
            allowPointSelect: false,
            dataLabels: {
               enabled: true,
               color: '#000000',
               connectorColor: '#000000',
               softConnector: false,
               format: '<b>{point.name}</b>: {point.percentage:.0f} %' ,
            },
            showInLegend: true
         }
      },
      credits: {
            text: 'Sea-Mer Asso',
            href: 'https://sea-mer.org'
        },

      series : []
   };
   
   $.get('../graphs/usage/data_graphs/categorie.csv', function(data) {
      // Split the lines
      var lines = data.split('\n');
      var series = {
         data: []
      };
      
      // Iterate over the lines and add categories or series
      $.each(lines, function(lineNo,line) {
         var items = line.split(';');
         if (lineNo != 4) {
            series.data.push({
            name: items[0],
            y:parseFloat(items[1])
            })
        } else {
            series.data.push({
            name: items[0],
            y:parseFloat(items[1]),
            visible: false
            })
        }      
      });
      
      options.series.push(series);
      // Create the chart
      var chart = new Highcharts.Chart(options);
   });
});
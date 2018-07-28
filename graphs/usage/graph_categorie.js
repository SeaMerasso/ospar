$(function() {
   var options = {
    credits: {text: 'Sea-Mer Asso', href: 'https://sea-mer.org'},
    colors: ['#2f7ed8', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'], 
    chart: {renderTo: 'graph_categorie', type: 'column', zoomType: 'y', backgroundColor: '#f6f6f6'},
    title: {text: 'Répartition par types catégories.'},
    subtitle: { text: ''},
    xAxis: {categories: []},
    yAxis: {allowDecimals: false, min: 0, max: 105, endOnTick: false,title: {text: 'Répartition en pourcentages'}, stackLabels: {style: {color: 'black', textOutline: 0,}, enabled: true}},
    tooltip: 
        {
            formatter: function () {
                if (this.series.name != 'Somme') {
                    return '<b>' + this.x + '</b><br/>' + this.series.name + ' : ' + this.y + '<br/>' + 'Total: ' + this.point.stackTotal
                } else {
                    return false
                };   
            }
        },
    plotOptions: {
        column: {
            stacking: 'percent'
            },
        series :{
            dataLabels: {
                enabled: true,
                style: {
                    textOutline: 0,
                    },
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                    },
                format: '{point.percentage:.0f} %'
                }
            },       
        },  
        series: [],
    }; 

		
    // Initialisation du premier graphique avec les données la première table.
    $.get('../graphs/usage/data_graphs/categorie_tous.csv', function(data) {
    var lines = data.split('\n');
        $.each(lines, function(lineNo,line) {
            if (lineNo == 0) {
                var items = line.split(';');
                $.each(items, function(itemNo,item) {
                    if (itemNo == 0) {
                        var titre = String(item);
		                options.subtitle.text = 'Site : ' + titre + '.' ;
		            } else {
                        options.xAxis.categories.push(String(item));
                    };
                });
            } else {
                var series = {name: [], data: [], visible: '' };
                var items = line.split(';');
                $.each(items, function(itemNo,item) {
                    if (itemNo == 0 ) {
                        series.name.push(String(item));
                        if (item == 'Fragments et objets inclassables') {
                            series.visible = false
                        };
                    } else {
                        series.data.push(parseFloat(item))
                    };
                });
                options.series.push(series);
            };
        });
        var chart = new Highcharts.Chart(options);
    
        // mise à jour des données avec les autres tables.
        $('button').click(function() {
            selection_site = ['categorie_tous', 'categorie_boucaniers', 'categorie_saint_frieux', 'categorie_zuydcoote']
            var site = $(this).attr('id');
            for (var iter = 0; iter < selection_site.length; iter++) {
                if (selection_site[iter] == site ) {
                    $.get('../graphs/usage/data_graphs/'+site+'.csv', function(data) {
                    var lines = data.split('\n');
                    var i = 0;
                    $.each(lines, function(lineNo,line) {
                        if (lineNo == 0) {
                            var items = line.split(';');
                            $.each(items, function(itemNo,item) {
                                if (itemNo == 0) {
                                    var titre = String(item);
		                            chart.setSubtitle({ text: 'Site : ' + titre + '.' });
		                        } else {
                                    options.xAxis.categories.push(String(item));
                                };
                            });
                        } else {
                            var data = [];
                            var items = line.split(';');
                            $.each(items, function(itemNo,item) {
                                if (itemNo == 0 ) {
                                    
                                } else {
                                    data.push(parseFloat(item))
                                };
                            });
                            chart.series[i].setData(data);
                            i ++ ;
                        };
                    });
                    });
                };
            };
        });
    });
})
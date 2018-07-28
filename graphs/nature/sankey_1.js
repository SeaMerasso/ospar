$(function() {
    var options = {
        credits: {text: 'Sea-Mer Asso', href: 'https://sea-mer.org'},
        chart: {
            renderTo: 'sankey_1',
            type: 'sankey',
            },
        title: {
            text: 'Répartition des déchets par texture, par nature et par état'
            },
        colors: ['#2f7ed8', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        series: [{
            data: [],
            keys: ['from', 'to', 'weight'],
            type: 'sankey',
            name: ' '
        }],
        plotOptions: {
            series :{
                dataLabels: {
                    style: {

                    }
                }
            },
        }
    };
    $.get('../graphs/nature/data_graphs/sankey.csv', function(data) {
        var lines = data.split('\n');
        $.each(lines, function(lineNo,line) {
            var items = line.split(',');
            options.series[0].data.push([String(items[0]), String(items[1]), parseFloat(items[2])]);
        });
        var chart = new Highcharts.Chart(options);
    });
});
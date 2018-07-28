$(document).ready(function() {
	var options = {
		chart: {renderTo: 'general', type: 'spline', zoomType: 'y', },
		tooltip: { crosshairs: true },
		title: { text:'Nombre total de déchets collectés.' },
		subtitle: { text: 'Source des données : <a href="http://sea-mer.org">http://sea-mer.org</a>'},
		xAxis: { categories: [] },
		yAxis: [{labels: { style: { color: Highcharts.getOptions().colors[1]}}, title: {text: 'Nombre de déchets',style: {color: Highcharts.getOptions().colors[1]}},}],
		series: [],
        credits: {text: 'Sea-Mer Asso', href: 'https://sea-mer.org'},
	};

	$.get('graphs/general/data_graphs/general.csv', function(data) {
		var lines = data.split('\n');
		$.each(lines, function(lineNo, line){
			var items = line.split(',');
				if (lineNo == 0) {
				$.each(items, function(itemNo, item) {
						options.xAxis.categories.push(String(item));
				});
				} else {
				    var donnees = { name: [], data: [] };
				    $.each(items, function(itemNo, item) {
				        if (itemNo == 0) {
				            donnees.name.push(item);
				        } else {
				            donnees.data.push(parseFloat(item));
				        }
				    }),
				options.series.push(donnees)
				};
			})

			var chart = new Highcharts.Chart(options);
	});
});
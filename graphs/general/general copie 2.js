$(document).ready(function() {
	var options = {
		chart: {renderTo: 'general'},
		title: { text:'Nombre total de déchets collectés.' },
		subtitle: { text: 'Source des données : <a href="http://sea-mer.org">http://sea-mer.org</a>'},
		xAxis: { categories: []},
		yAxis: [
		    { title: {text: 'Nombre de déchets'}},
		    { title: {text: 'Tendance météo'}, opposite: true}
		    ],
		tooltip: {},
		series: [
		
		
		
		
		],
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
				} else if ( 4 < lineNo < 7 ) {
				    var donnees = { type: 'column', name: [], yAxis: 1, data: [] };
				    $.each(items, function(itemNo, item) {
				        if (itemNo == 0) {
				            donnees.name.push(item);
				        } else {
				           donnees.data.push(parseFloat(item));
				        }
				    }),
				    options.series.push(donnees)
				} else if ( 0 < lineNo < 5 ) {
				    var donnees2 = { type: 'spline', name: [], yAxis: 0, data: [] };
				    $.each(items, function(itemNo, item) {
				        if (itemNo == 0) {
				            donnees.name.push(item);
				        } else {
				            donnees2.data.push(parseFloat(item));
				        }
				    }),
				    options.series.push(donnees2)
				};
			})
			var chart = new Highcharts.Chart(options);
	});
});
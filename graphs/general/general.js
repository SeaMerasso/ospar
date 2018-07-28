$(document).ready(function() {
	var options = {
		chart: {renderTo: 'general'},
		title: { text:'Nombre total de déchets collectés.' },
		subtitle: { text: 'Source des données : <a href="http://sea-mer.org">http://sea-mer.org</a>'},
		xAxis: { categories: [], crosshair: true},
		yAxis: [
		    { title: {text: ''}, linkedTo: 1},
		    { title: {text: ''}, opposite: true, ceiling : 12000}
		    ],
		tooltip: {shared: true},
		series: [
		    { type: 'column', name: [], yAxis: 1, data: [] },
		    { type: 'column', name: [], yAxis: 1, data: [] },
		    { type: 'spline', name: [], yAxis: 0, data: [] },
		    { type: 'spline', name: [], yAxis: 0, data: [] },
		    { type: 'spline', name: [], yAxis: 0, data: [] },
		    { type: 'spline', name: [], yAxis: 0, data: [] }
		],
        credits: {text: 'Sea-Mer Asso', href: 'https://sea-mer.org'},
        plotOptions: {
        column: { stacking: 'normal',}
        },
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
				    $.each(items, function(itemNo, item) {
				        if (itemNo == 0) {
				            options.series[lineNo-1].name.push(item);
				        } else {
				           options.series[lineNo-1].data.push(parseInt(item));
				        }
				    })
				};
			});
			var chart = new Highcharts.Chart(options);
	});
})
var noms_fichiers = ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8", "rose9", "rose10"];
$.each(noms_fichiers, function(nom_fichierNo, nom_fichier) {
    $(document).ready(function() {
        var options = {
            chart: { renderTo: nom_fichier, polar: true, type: 'column'},
            title: { text: [] },
            subtitle: { text: 'Source des données : EDMOnet'},
            credits: { text: 'Sea-Mer Asso', href: 'https://sea-mer.org' },
            xAxis: { tickmarkPlacement: 'on', type:'category' },
            yAxis: {cmin: 0, endOnTick: false, showLastLabel: true, reversedStacks: false, max: 1000 },
            plotOptions: { series: { stacking: 'normal', shadow: false, groupPadding: 0, pointPlacement: 'on' } },
            series: [],
        };
        $.get('graphs/general/data_graphs/roses/'+nom_fichier+'.csv', function(data) {
            var lines = data.split('\n');
            var items = lines[0].split(','); 
            options.title.text.push(items[0]);
            var forces = [ "Force 1 à 4", "Force 5 à 6", "Force 7 à 9", "Force 10 à 12" ];
            $.each(forces, function(forceNo, force) {
                var donnees = { data: [], type: "column", pointPlacement: 'between', name: [] };
                donnees.name.push(force);
                $.each(lines, function(lineNo, line){
                    var items = line.split(',');
                    if (String(items[1]) == String(force)) { a = String(items[2]); b = parseInt(items[3]) ; donnees.data.push([a,b]);};
                    });
                options.series.push(donnees);
            });
            var chart = new Highcharts.Chart(options);
        });
    });
});
$(function() {
    var options = {
        chart: { renderTo: 'tendance', type: 'column', zoomType: 'x', },
        title: { text: 'composante est-ouest' },
        subtitle: { text: '', floating: true },
        xAxis: {
            categories: [
            ' 1 / 12 / 2015 ' ,
' 2 / 12 / 2015 ' ,
' 3 / 12 / 2015 ' ,
' 4 / 12 / 2015 ' ,
' 5 / 12 / 2015 ' ,
' 6 / 12 / 2015 ' ,
' 7 / 12 / 2015 ' ,
' 8 / 12 / 2015 ' ,
' 9 / 12 / 2015 ' ,
' 10 / 12 / 2015 ' ,
' 11 / 12 / 2015 ' ,
' 12 / 12 / 2015 ' ,
' 13 / 12 / 2015 ' ,
' 14 / 12 / 2015 ' ,
' 15 / 12 / 2015 ' ,
' 16 / 12 / 2015 ' ,
' 17 / 12 / 2015 ' ,
' 18 / 12 / 2015 ' ,
' 19 / 12 / 2015 ' ,
' 20 / 12 / 2015 ' ,
' 21 / 12 / 2015 ' ,
' 22 / 12 / 2015 ' ,
' 23 / 12 / 2015 ' ,
' 24 / 12 / 2015 ' ,
' 25 / 12 / 2015 ' ,
' 26 / 12 / 2015 ' ,
' 27 / 12 / 2015 ' ,
' 28 / 12 / 2015 ' ,
' 29 / 12 / 2015 ' ,
' 30 / 12 / 2015 ' ,
' 31 / 12 / 2015 ' ,
' 1 / 1 / 2016 ' ,
' 2 / 1 / 2016 ' ,
' 3 / 1 / 2016 ' ,
' 4 / 1 / 2016 ' ,
' 5 / 1 / 2016 ' ,
' 6 / 1 / 2016 ' ,
' 7 / 1 / 2016 ' ,
' 8 / 1 / 2016 ' ,
' 9 / 1 / 2016 ' ,
' 10 / 1 / 2016 ' ,
' 11 / 1 / 2016 ' ,
' 12 / 1 / 2016 ' ,
' 13 / 1 / 2016 ' ,
' 14 / 1 / 2016 ' ,
' 15 / 1 / 2016 ' ,
' 16 / 1 / 2016 ' ,
' 17 / 1 / 2016 ' ,
' 18 / 1 / 2016 ' ,
' 19 / 1 / 2016 ' ,
' 20 / 1 / 2016 ' ,
' 21 / 1 / 2016 ' ,
' 22 / 1 / 2016 ' ,
' 23 / 1 / 2016 ' ,
' 24 / 1 / 2016 ' ,
' 25 / 1 / 2016 ' ,
' 26 / 1 / 2016 ' ,
' 27 / 1 / 2016 ' ,
' 28 / 1 / 2016 ' ,
' 29 / 1 / 2016 ' ,
' 30 / 1 / 2016 ' ,
' 31 / 1 / 2016 ' ,
' 1 / 2 / 2016 ' ,
' 2 / 2 / 2016 ' ,
' 3 / 2 / 2016 ' ,
' 4 / 2 / 2016 ' ,
' 5 / 2 / 2016 ' ,
' 6 / 2 / 2016 ' ,
' 7 / 2 / 2016 ' ,
' 8 / 2 / 2016 ' ,
' 9 / 2 / 2016 ' ,
' 10 / 2 / 2016 ' ,
' 11 / 2 / 2016 ' ,
' 12 / 2 / 2016 ' ,
' 13 / 2 / 2016 ' ,
' 14 / 2 / 2016 ' ,
' 15 / 2 / 2016 ' ,
' 16 / 2 / 2016 ' ,
' 17 / 2 / 2016 ' ,
' 18 / 2 / 2016 ' ,
' 19 / 2 / 2016 ' ,
' 20 / 2 / 2016 ' ,
' 21 / 2 / 2016 ' ,
' 22 / 2 / 2016 ' ,
' 23 / 2 / 2016 ' ,
' 24 / 2 / 2016 ' ,
' 25 / 2 / 2016 ' ,
' 26 / 2 / 2016 ' ,
' 27 / 2 / 2016 ' ,
' 28 / 2 / 2016 ' ,
' 29 / 2 / 2016 ' ,
' 1 / 3 / 2016 ' ,
' 2 / 3 / 2016 ' ,
' 3 / 3 / 2016 ' ,
' 4 / 3 / 2016 ' ,
' 5 / 3 / 2016 ' ,
' 6 / 3 / 2016 ' ,
' 7 / 3 / 2016 ' ,
' 8 / 3 / 2016 ' ,
' 9 / 3 / 2016 ' ,
' 10 / 3 / 2016 ' ,
' 11 / 3 / 2016 ' ,
' 12 / 3 / 2016 ' ,
' 13 / 3 / 2016 ' ,
' 14 / 3 / 2016 ' ,
' 15 / 3 / 2016 ' ,
' 16 / 3 / 2016 ' ,
' 17 / 3 / 2016 ' ,
' 18 / 3 / 2016 ' ,
' 19 / 3 / 2016 ' ,
' 20 / 3 / 2016 ' ,
' 21 / 3 / 2016 ' ,
' 22 / 3 / 2016 ' ,
' 23 / 3 / 2016 ' ,
' 24 / 3 / 2016 ' ,
' 25 / 3 / 2016 ' ,
' 26 / 3 / 2016 ' ,
' 27 / 3 / 2016 ' ,
' 28 / 3 / 2016 ' ,
' 29 / 3 / 2016 ' ,
' 30 / 3 / 2016 ' ,
' 31 / 3 / 2016 ' ,
' 1 / 4 / 2016 ' ,
' 2 / 4 / 2016 ' ,
' 3 / 4 / 2016 ' ,
' 4 / 4 / 2016 ' ,
' 5 / 4 / 2016 ' ,
' 6 / 4 / 2016 ' ,
' 7 / 4 / 2016 ' ,
' 8 / 4 / 2016 ' ,
' 9 / 4 / 2016 ' ,
' 10 / 4 / 2016 ' ,
' 11 / 4 / 2016 ' ,
' 12 / 4 / 2016 ' ,
' 13 / 4 / 2016 ' ,
' 14 / 4 / 2016 ' ,
' 15 / 4 / 2016 ' ,
' 16 / 4 / 2016 ' ,
' 17 / 4 / 2016 ' ,
' 18 / 4 / 2016 ' ,
' 19 / 4 / 2016 ' ,
' 20 / 4 / 2016 ' ,
' 21 / 4 / 2016 ' ,
' 22 / 4 / 2016 ' ,
' 23 / 4 / 2016 ' ,
' 24 / 4 / 2016 ' ,
' 25 / 4 / 2016 ' ,
' 26 / 4 / 2016 ' ,
' 27 / 4 / 2016 ' ,
' 28 / 4 / 2016 ' ,
' 29 / 4 / 2016 ' ,
' 30 / 4 / 2016 ' ,
' 1 / 5 / 2016 ' ,
' 2 / 5 / 2016 ' ,
' 3 / 5 / 2016 ' ,
' 4 / 5 / 2016 ' ,
' 5 / 5 / 2016 ' ,
' 6 / 5 / 2016 ' ,
' 7 / 5 / 2016 ' ,
' 8 / 5 / 2016 ' ,
' 9 / 5 / 2016 ' ,
' 10 / 5 / 2016 ' ,
' 11 / 5 / 2016 ' ,
' 12 / 5 / 2016 ' ,
' 13 / 5 / 2016 ' ,
' 14 / 5 / 2016 ' ,
' 15 / 5 / 2016 ' ,
' 16 / 5 / 2016 ' ,
' 17 / 5 / 2016 ' ,
' 18 / 5 / 2016 ' ,
' 19 / 5 / 2016 ' ,
' 20 / 5 / 2016 ' ,
' 21 / 5 / 2016 ' ,
' 22 / 5 / 2016 ' ,
' 23 / 5 / 2016 ' ,
' 24 / 5 / 2016 ' ,
' 25 / 5 / 2016 ' ,
' 26 / 5 / 2016 ' ,
' 27 / 5 / 2016 ' ,
' 28 / 5 / 2016 ' ,
' 29 / 5 / 2016 ' ,
' 30 / 5 / 2016 ' ,
' 31 / 5 / 2016 ' ,
' 1 / 6 / 2016 ' ,
' 2 / 6 / 2016 ' ,
' 3 / 6 / 2016 ' ,
' 4 / 6 / 2016 ' ,
' 5 / 6 / 2016 ' ,
' 6 / 6 / 2016 ' ,
' 7 / 6 / 2016 ' ,
' 8 / 6 / 2016 ' ,
' 9 / 6 / 2016 ' ,
' 10 / 6 / 2016 ' ,
' 11 / 6 / 2016 ' ,
' 12 / 6 / 2016 ' ,
' 13 / 6 / 2016 ' ,
' 14 / 6 / 2016 ' ,
' 15 / 6 / 2016 ' ,
' 16 / 6 / 2016 ' ,
' 17 / 6 / 2016 ' ,
' 18 / 6 / 2016 ' ,
' 19 / 6 / 2016 ' ,
' 20 / 6 / 2016 ' ,
' 21 / 6 / 2016 ' ,
' 22 / 6 / 2016 ' ,
' 23 / 6 / 2016 ' ,
' 24 / 6 / 2016 ' ,
' 25 / 6 / 2016 ' ,
' 26 / 6 / 2016 ' ,
' 27 / 6 / 2016 ' ,
' 28 / 6 / 2016 ' ,
' 29 / 6 / 2016 ' ,
' 30 / 6 / 2016 ' ,
' 1 / 7 / 2016 ' ,
' 2 / 7 / 2016 ' ,
' 3 / 7 / 2016 ' ,
' 4 / 7 / 2016 ' ,
' 5 / 7 / 2016 ' ,
' 6 / 7 / 2016 ' ,
' 7 / 7 / 2016 ' ,
' 8 / 7 / 2016 ' ,
' 9 / 7 / 2016 ' ,
' 10 / 7 / 2016 ' ,
' 11 / 7 / 2016 ' ,
' 12 / 7 / 2016 ' ,
' 13 / 7 / 2016 ' ,
' 14 / 7 / 2016 ' ,
' 15 / 7 / 2016 ' ,
' 16 / 7 / 2016 ' ,
' 17 / 7 / 2016 ' ,
' 18 / 7 / 2016 ' ,
' 19 / 7 / 2016 ' ,
' 20 / 7 / 2016 ' ,
' 21 / 7 / 2016 ' ,
' 22 / 7 / 2016 ' ,
' 23 / 7 / 2016 ' ,
' 24 / 7 / 2016 ' ,
' 25 / 7 / 2016 ' ,
' 26 / 7 / 2016 ' ,
' 27 / 7 / 2016 ' ,
' 28 / 7 / 2016 ' ,
' 29 / 7 / 2016 ' ,
' 30 / 7 / 2016 ' ,
' 31 / 7 / 2016 ' ,
' 1 / 8 / 2016 ' ,
' 2 / 8 / 2016 ' ,
' 3 / 8 / 2016 ' ,
' 4 / 8 / 2016 ' ,
' 5 / 8 / 2016 ' ,
' 6 / 8 / 2016 ' ,
' 7 / 8 / 2016 ' ,
' 8 / 8 / 2016 ' ,
' 9 / 8 / 2016 ' ,
' 10 / 8 / 2016 ' ,
' 11 / 8 / 2016 ' ,
' 12 / 8 / 2016 ' ,
' 13 / 8 / 2016 ' ,
' 14 / 8 / 2016 ' ,
' 15 / 8 / 2016 ' ,
' 16 / 8 / 2016 ' ,
' 17 / 8 / 2016 ' ,
' 18 / 8 / 2016 ' ,
' 19 / 8 / 2016 ' ,
' 20 / 8 / 2016 ' ,
' 21 / 8 / 2016 ' ,
' 22 / 8 / 2016 ' ,
' 23 / 8 / 2016 ' ,
' 24 / 8 / 2016 ' ,
' 25 / 8 / 2016 ' ,
' 26 / 8 / 2016 ' ,
' 27 / 8 / 2016 ' ,
' 28 / 8 / 2016 ' ,
' 29 / 8 / 2016 ' ,
' 30 / 8 / 2016 ' ,
' 31 / 8 / 2016 ' ,
' 1 / 9 / 2016 ' ,
' 2 / 9 / 2016 ' ,
' 3 / 9 / 2016 ' ,
' 4 / 9 / 2016 ' ,
' 5 / 9 / 2016 ' ,
' 6 / 9 / 2016 ' ,
' 7 / 9 / 2016 ' ,
' 8 / 9 / 2016 ' ,
' 9 / 9 / 2016 ' ,
' 10 / 9 / 2016 ' ,
' 11 / 9 / 2016 ' ,
' 12 / 9 / 2016 ' ,
' 13 / 9 / 2016 ' ,
' 14 / 9 / 2016 ' ,
' 15 / 9 / 2016 ' ,
' 16 / 9 / 2016 ' ,
' 17 / 9 / 2016 ' ,
' 18 / 9 / 2016 ' ,
' 19 / 9 / 2016 ' ,
' 20 / 9 / 2016 ' ,
' 21 / 9 / 2016 ' ,
' 22 / 9 / 2016 ' ,
' 23 / 9 / 2016 ' ,
' 24 / 9 / 2016 ' ,
' 25 / 9 / 2016 ' ,
' 26 / 9 / 2016 ' ,
' 27 / 9 / 2016 ' ,
' 28 / 9 / 2016 ' ,
' 29 / 9 / 2016 ' ,
' 30 / 9 / 2016 ' ,
' 1 / 10 / 2016 ' ,
' 2 / 10 / 2016 ' ,
' 3 / 10 / 2016 ' ,
' 4 / 10 / 2016 ' ,
' 5 / 10 / 2016 ' ,
' 6 / 10 / 2016 ' ,
' 7 / 10 / 2016 ' ,
' 8 / 10 / 2016 ' ,
' 9 / 10 / 2016 ' ,
' 10 / 10 / 2016 ' ,
' 11 / 10 / 2016 ' ,
' 12 / 10 / 2016 ' ,
' 13 / 10 / 2016 ' ,
' 14 / 10 / 2016 ' ,
' 15 / 10 / 2016 ' ,
' 16 / 10 / 2016 ' ,
' 17 / 10 / 2016 ' ,
' 18 / 10 / 2016 ' ,
' 19 / 10 / 2016 ' ,
' 20 / 10 / 2016 ' ,
' 21 / 10 / 2016 ' ,
' 22 / 10 / 2016 ' ,
' 23 / 10 / 2016 ' ,
' 24 / 10 / 2016 ' ,
' 25 / 10 / 2016 ' ,
' 26 / 10 / 2016 ' ,
' 27 / 10 / 2016 ' ,
' 28 / 10 / 2016 ' ,
' 29 / 10 / 2016 ' ,
' 30 / 10 / 2016 ' ,
' 31 / 10 / 2016 ' ,
' 1 / 11 / 2016 ' ,
' 2 / 11 / 2016 ' ,
' 3 / 11 / 2016 ' ,
' 4 / 11 / 2016 ' ,
' 5 / 11 / 2016 ' ,
' 6 / 11 / 2016 ' ,
' 7 / 11 / 2016 ' ,
' 8 / 11 / 2016 ' ,
' 9 / 11 / 2016 ' ,
' 10 / 11 / 2016 ' ,
' 11 / 11 / 2016 ' ,
' 12 / 11 / 2016 ' ,
' 13 / 11 / 2016 ' ,
' 14 / 11 / 2016 ' ,
' 15 / 11 / 2016 ' ,
' 16 / 11 / 2016 ' ,
' 17 / 11 / 2016 ' ,
' 18 / 11 / 2016 ' ,
' 19 / 11 / 2016 ' ,
' 20 / 11 / 2016 ' ,
' 21 / 11 / 2016 ' ,
' 22 / 11 / 2016 ' ,
' 23 / 11 / 2016 ' ,
' 24 / 11 / 2016 ' ,
' 25 / 11 / 2016 ' ,
' 26 / 11 / 2016 ' ,
' 27 / 11 / 2016 ' ,
' 28 / 11 / 2016 ' ,
' 29 / 11 / 2016 ' ,
' 30 / 11 / 2016 ' ,
' 1 / 12 / 2016 ' ,
' 2 / 12 / 2016 ' ,
' 3 / 12 / 2016 ' ,
' 4 / 12 / 2016 ' ,
' 5 / 12 / 2016 ' ,
' 6 / 12 / 2016 ' ,
' 7 / 12 / 2016 ' ,
' 8 / 12 / 2016 ' ,
' 9 / 12 / 2016 ' ,
' 10 / 12 / 2016 ' ,
' 11 / 12 / 2016 ' ,
' 12 / 12 / 2016 ' ,
' 13 / 12 / 2016 ' ,
' 14 / 12 / 2016 ' ,
' 15 / 12 / 2016 ' ,
' 16 / 12 / 2016 ' ,
' 17 / 12 / 2016 ' ,
' 18 / 12 / 2016 ' ,
' 19 / 12 / 2016 ' ,
' 20 / 12 / 2016 ' ,
' 21 / 12 / 2016 ' ,
' 22 / 12 / 2016 ' ,
' 23 / 12 / 2016 ' ,
' 24 / 12 / 2016 ' ,
' 25 / 12 / 2016 ' ,
' 26 / 12 / 2016 ' ,
' 27 / 12 / 2016 ' ,
' 28 / 12 / 2016 ' ,
' 29 / 12 / 2016 ' ,
' 30 / 12 / 2016 ' ,
' 31 / 12 / 2016 ' ,
' 1 / 1 / 2017 ' ,
' 2 / 1 / 2017 ' ,
' 3 / 1 / 2017 ' ,
' 4 / 1 / 2017 ' ,
' 5 / 1 / 2017 ' ,
' 6 / 1 / 2017 ' ,
' 7 / 1 / 2017 ' ,
' 8 / 1 / 2017 ' ,
' 9 / 1 / 2017 ' ,
' 10 / 1 / 2017 ' ,
' 11 / 1 / 2017 ' ,
' 12 / 1 / 2017 ' ,
' 13 / 1 / 2017 ' ,
' 14 / 1 / 2017 ' ,
' 15 / 1 / 2017 ' ,
' 16 / 1 / 2017 ' ,
' 17 / 1 / 2017 ' ,
' 18 / 1 / 2017 ' ,
' 19 / 1 / 2017 ' ,
' 20 / 1 / 2017 ' ,
' 21 / 1 / 2017 ' ,
' 22 / 1 / 2017 ' ,
' 23 / 1 / 2017 ' ,
' 24 / 1 / 2017 ' ,
' 25 / 1 / 2017 ' ,
' 26 / 1 / 2017 ' ,
' 27 / 1 / 2017 ' ,
' 28 / 1 / 2017 ' ,
' 29 / 1 / 2017 ' ,
' 30 / 1 / 2017 ' ,
' 31 / 1 / 2017 ' ,
' 1 / 2 / 2017 ' ,
' 2 / 2 / 2017 ' ,
' 3 / 2 / 2017 ' ,
' 4 / 2 / 2017 ' ,
' 5 / 2 / 2017 ' ,
' 6 / 2 / 2017 ' ,
' 7 / 2 / 2017 ' ,
' 8 / 2 / 2017 ' ,
' 9 / 2 / 2017 ' ,
' 10 / 2 / 2017 ' ,
' 11 / 2 / 2017 ' ,
' 12 / 2 / 2017 ' ,
' 13 / 2 / 2017 ' ,
' 14 / 2 / 2017 ' ,
' 15 / 2 / 2017 ' ,
' 16 / 2 / 2017 ' ,
' 17 / 2 / 2017 ' ,
' 18 / 2 / 2017 ' ,
' 19 / 2 / 2017 ' ,
' 20 / 2 / 2017 ' ,
' 21 / 2 / 2017 ' ,
' 22 / 2 / 2017 ' ,
' 23 / 2 / 2017 ' ,
' 24 / 2 / 2017 ' ,
' 25 / 2 / 2017 ' ,
' 26 / 2 / 2017 ' ,
' 27 / 2 / 2017 ' ,
' 28 / 2 / 2017 ' ,
' 1 / 3 / 2017 ' ,
' 2 / 3 / 2017 ' ,
' 3 / 3 / 2017 ' ,
' 4 / 3 / 2017 ' ,
' 5 / 3 / 2017 ' ,
' 6 / 3 / 2017 ' ,
' 7 / 3 / 2017 ' ,
' 8 / 3 / 2017 ' ,
' 9 / 3 / 2017 ' ,
' 10 / 3 / 2017 ' ,
' 11 / 3 / 2017 ' ,
' 12 / 3 / 2017 ' ,
' 13 / 3 / 2017 ' ,
' 14 / 3 / 2017 ' ,
' 15 / 3 / 2017 ' ,
' 16 / 3 / 2017 ' ,
' 17 / 3 / 2017 ' ,
' 18 / 3 / 2017 ' ,
' 19 / 3 / 2017 ' ,
' 20 / 3 / 2017 ' ,
' 21 / 3 / 2017 ' ,
' 22 / 3 / 2017 ' ,
' 23 / 3 / 2017 ' ,
' 24 / 3 / 2017 ' ,
' 25 / 3 / 2017 ' ,
' 26 / 3 / 2017 ' ,
' 27 / 3 / 2017 ' ,
' 28 / 3 / 2017 ' ,
' 29 / 3 / 2017 ' ,
' 30 / 3 / 2017 ' ,
' 31 / 3 / 2017 ' ,
' 1 / 4 / 2017 ' ,
' 2 / 4 / 2017 ' ,
' 3 / 4 / 2017 ' ,
' 4 / 4 / 2017 ' ,
' 5 / 4 / 2017 ' ,
' 6 / 4 / 2017 ' ,
' 7 / 4 / 2017 ' ,
' 8 / 4 / 2017 ' ,
' 9 / 4 / 2017 ' ,
' 10 / 4 / 2017 ' ,
' 11 / 4 / 2017 ' ,
' 12 / 4 / 2017 ' ,
' 13 / 4 / 2017 ' ,
' 14 / 4 / 2017 ' ,
' 15 / 4 / 2017 ' ,
' 16 / 4 / 2017 ' ,
' 17 / 4 / 2017 ' ,
' 18 / 4 / 2017 ' ,
' 19 / 4 / 2017 ' ,
' 20 / 4 / 2017 ' ,
' 21 / 4 / 2017 ' ,
' 22 / 4 / 2017 ' ,
' 23 / 4 / 2017 ' ,
' 24 / 4 / 2017 ' ,
' 25 / 4 / 2017 ' ,
' 26 / 4 / 2017 ' ,
' 27 / 4 / 2017 ' ,
' 28 / 4 / 2017 ' ,
' 29 / 4 / 2017 ' ,
' 30 / 4 / 2017 ' ,
' 1 / 5 / 2017 ' ,
' 2 / 5 / 2017 ' ,
' 3 / 5 / 2017 ' ,
' 4 / 5 / 2017 ' ,
' 5 / 5 / 2017 ' ,
' 6 / 5 / 2017 ' ,
' 7 / 5 / 2017 ' ,
' 8 / 5 / 2017 ' ,
' 9 / 5 / 2017 ' ,
' 10 / 5 / 2017 ' ,
' 11 / 5 / 2017 ' ,
' 12 / 5 / 2017 ' ,
' 13 / 5 / 2017 ' ,
' 14 / 5 / 2017 ' ,
' 15 / 5 / 2017 ' ,
' 16 / 5 / 2017 ' ,
' 17 / 5 / 2017 ' ,
' 18 / 5 / 2017 ' ,
' 19 / 5 / 2017 ' ,
' 20 / 5 / 2017 ' ,
' 21 / 5 / 2017 ' ,
' 22 / 5 / 2017 ' ,
' 23 / 5 / 2017 ' ,
' 24 / 5 / 2017 ' ,
' 25 / 5 / 2017 ' ,
' 26 / 5 / 2017 ' ,
' 27 / 5 / 2017 ' ,
' 28 / 5 / 2017 ' ,
' 29 / 5 / 2017 ' ,
' 30 / 5 / 2017 ' ,
' 31 / 5 / 2017 ' ,
' 1 / 6 / 2017 ' ,
' 2 / 6 / 2017 ' ,
' 3 / 6 / 2017 ' ,
' 4 / 6 / 2017 ' ,
' 5 / 6 / 2017 ' ,
' 6 / 6 / 2017 ' ,
' 7 / 6 / 2017 ' ,
' 8 / 6 / 2017 ' ,
' 9 / 6 / 2017 ' ,
' 10 / 6 / 2017 ' ,
' 11 / 6 / 2017 ' ,
' 12 / 6 / 2017 ' ,
' 13 / 6 / 2017 ' ,
' 14 / 6 / 2017 ' ,
' 15 / 6 / 2017 ' ,
' 16 / 6 / 2017 ' ,
' 17 / 6 / 2017 ' ,
' 18 / 6 / 2017 ' ,
' 19 / 6 / 2017 ' ,
' 20 / 6 / 2017 ' ,
' 21 / 6 / 2017 ' ,
' 22 / 6 / 2017 ' ,
' 23 / 6 / 2017 ' ,
' 24 / 6 / 2017 ' ,
' 25 / 6 / 2017 ' ,
' 26 / 6 / 2017 ' ,
' 27 / 6 / 2017 ' ,
' 28 / 6 / 2017 ' ,
' 29 / 6 / 2017 ' ,
' 30 / 6 / 2017 ' ,
' 1 / 7 / 2017 ' ,
' 2 / 7 / 2017 ' ,
' 3 / 7 / 2017 ' ,
' 4 / 7 / 2017 ' ,
' 5 / 7 / 2017 ' ,
' 6 / 7 / 2017 ' ,
' 7 / 7 / 2017 ' ,
' 8 / 7 / 2017 ' ,
' 9 / 7 / 2017 ' ,
' 10 / 7 / 2017 ' ,
' 11 / 7 / 2017 ' ,
' 12 / 7 / 2017 ' ,
' 13 / 7 / 2017 ' ,
' 14 / 7 / 2017 ' ,
' 15 / 7 / 2017 ' ,
' 16 / 7 / 2017 ' ,
' 17 / 7 / 2017 ' ,
' 18 / 7 / 2017 ' ,
' 19 / 7 / 2017 ' ,
' 20 / 7 / 2017 ' ,
' 26 / 7 / 2017 ' ,
' 27 / 7 / 2017 ' ,
' 28 / 7 / 2017 ' ,
' 29 / 7 / 2017 ' ,
' 30 / 7 / 2017 ' ,
' 31 / 7 / 2017 ' ,
' 1 / 8 / 2017 ' ,
' 2 / 8 / 2017 ' ,
' 3 / 8 / 2017 ' ,
' 4 / 8 / 2017 ' ,
' 5 / 8 / 2017 ' ,
' 6 / 8 / 2017 ' ,
' 7 / 8 / 2017 ' ,
' 8 / 8 / 2017 ' ,
' 9 / 8 / 2017 ' ,
' 10 / 8 / 2017 ' ,
' 11 / 8 / 2017 ' ,
' 12 / 8 / 2017 ' ,
' 13 / 8 / 2017 ' ,
' 14 / 8 / 2017 ' ,
' 15 / 8 / 2017 ' ,
' 16 / 8 / 2017 ' ,
' 17 / 8 / 2017 ' ,
' 18 / 8 / 2017 ' ,
' 19 / 8 / 2017 ' ,
' 20 / 8 / 2017 ' ,
' 21 / 8 / 2017 ' ,
' 22 / 8 / 2017 ' ,
' 23 / 8 / 2017 ' ,
' 24 / 8 / 2017 ' ,
' 25 / 8 / 2017 ' ,
' 26 / 8 / 2017 ' ,
' 27 / 8 / 2017 ' ,
' 28 / 8 / 2017 ' ,
' 29 / 8 / 2017 ' ,
' 30 / 8 / 2017 ' ,
' 31 / 8 / 2017 ' ,
' 1 / 9 / 2017 ' ,
' 2 / 9 / 2017 ' ,
' 3 / 9 / 2017 ' ,
' 4 / 9 / 2017 ' ,
' 5 / 9 / 2017 ' ,
' 6 / 9 / 2017 ' ,
' 7 / 9 / 2017 ' ,
' 8 / 9 / 2017 ' ,
' 9 / 9 / 2017 ' ,
' 10 / 9 / 2017 ' ,
' 11 / 9 / 2017 ' ,
' 12 / 9 / 2017 ' ,
' 13 / 9 / 2017 ' ,
' 14 / 9 / 2017 ' ,
' 15 / 9 / 2017 ' ,
' 16 / 9 / 2017 ' ,
' 17 / 9 / 2017 ' ,
' 18 / 9 / 2017 ' ,
' 19 / 9 / 2017 ' ,
' 20 / 9 / 2017 ' ,
' 21 / 9 / 2017 ' ,
' 22 / 9 / 2017 ' ,
' 23 / 9 / 2017 ' ,
' 24 / 9 / 2017 ' ,
' 25 / 9 / 2017 ' ,
' 26 / 9 / 2017 ' ,
' 27 / 9 / 2017 ' ,
' 28 / 9 / 2017 ' ,
' 29 / 9 / 2017 ' ,
' 30 / 9 / 2017 ' ,
' 1 / 10 / 2017 ' ,
' 2 / 10 / 2017 ' ,
' 3 / 10 / 2017 ' ,
' 4 / 10 / 2017 ' ,
' 5 / 10 / 2017 ' ,
' 6 / 10 / 2017 ' ,
' 7 / 10 / 2017 ' ,
' 8 / 10 / 2017 ' ,
' 9 / 10 / 2017 ' ,
' 10 / 10 / 2017 ' ,
' 11 / 10 / 2017 ' ,
' 12 / 10 / 2017 ' ,
' 13 / 10 / 2017 ' ,
' 14 / 10 / 2017 ' ,
' 15 / 10 / 2017 ' ,
' 16 / 10 / 2017 ' ,
' 17 / 10 / 2017 ' ,
' 18 / 10 / 2017 ' ,
' 19 / 10 / 2017 ' ,
' 20 / 10 / 2017 ' ,
' 21 / 10 / 2017 ' ,
' 22 / 10 / 2017 ' ,
' 23 / 10 / 2017 ' ,
' 24 / 10 / 2017 ' ,
' 25 / 10 / 2017 ' ,
' 26 / 10 / 2017 ' ,
' 27 / 10 / 2017 ' ,
' 28 / 10 / 2017 ' ,
' 29 / 10 / 2017 ' ,
' 30 / 10 / 2017 ' ,
' 31 / 10 / 2017 ' ,
' 1 / 11 / 2017 ' ,
' 2 / 11 / 2017 ' ,
' 3 / 11 / 2017 ' ,
' 7 / 11 / 2017 ' ,
' 8 / 11 / 2017 ' ,
' 14 / 11 / 2017 ' ,
' 15 / 11 / 2017 ' ,
' 16 / 11 / 2017 ' ,
' 17 / 11 / 2017 ' ,
' 18 / 11 / 2017 ' ,
' 19 / 11 / 2017 ' ,
' 20 / 11 / 2017 ' ,
' 21 / 11 / 2017 ' ,
' 22 / 11 / 2017 ' ,
' 23 / 11 / 2017 ' ,
' 24 / 11 / 2017 ' ,
' 25 / 11 / 2017 ' ,
' 26 / 11 / 2017 ' ,
' 27 / 11 / 2017 ' ,
' 28 / 11 / 2017 ' ,
' 29 / 11 / 2017 ' ,
' 30 / 11 / 2017 ' ,
' 1 / 12 / 2017 ' ,
' 2 / 12 / 2017 ' ,
' 3 / 12 / 2017 ' ,
' 4 / 12 / 2017 ' ,
' 5 / 12 / 2017 ' ,
' 6 / 12 / 2017 ' ,
' 7 / 12 / 2017 ' ,
' 8 / 12 / 2017 ' ,
' 9 / 12 / 2017 ' ,
' 10 / 12 / 2017 ' ,
' 11 / 12 / 2017 ' ,
' 12 / 12 / 2017 ' ,
' 13 / 12 / 2017 ' ,
' 14 / 12 / 2017 ' ,
' 15 / 12 / 2017 ' ,
' 16 / 12 / 2017 ' ,
' 17 / 12 / 2017 ' ,
' 18 / 12 / 2017 ' ,
' 19 / 12 / 2017 ' ,
' 20 / 12 / 2017 ' ,
' 21 / 12 / 2017 ' ,
' 22 / 12 / 2017 ' ,
' 23 / 12 / 2017 ' ,
' 24 / 12 / 2017 ' ,
' 25 / 12 / 2017 ' ,
' 26 / 12 / 2017 ' ,
' 27 / 12 / 2017 ' ,
' 28 / 12 / 2017 ' ,
' 29 / 12 / 2017 ' ,
' 30 / 12 / 2017 ' ,
' 31 / 12 / 2017 ' ,
' 1 / 1 / 2018 ' ,
' 2 / 1 / 2018 ' ,
' 3 / 1 / 2018 ' ,
' 4 / 1 / 2018 ' ,
' 5 / 1 / 2018 ' ,
' 6 / 1 / 2018 ' ,
' 7 / 1 / 2018 ' ,
' 8 / 1 / 2018 ' ,
' 9 / 1 / 2018 ' ,
' 10 / 1 / 2018 ' ,
' 11 / 1 / 2018 ' ,
' 12 / 1 / 2018 ' ,
' 13 / 1 / 2018 ' ,
' 14 / 1 / 2018 ' ,
' 15 / 1 / 2018 ' ,
' 16 / 1 / 2018 ' ,
' 17 / 1 / 2018 ' ,
' 18 / 1 / 2018 ' ,
' 19 / 1 / 2018 ' ,
' 20 / 1 / 2018 ' ,
' 21 / 1 / 2018 ' ,
' 22 / 1 / 2018 ' ,
' 23 / 1 / 2018 ' ,
' 24 / 1 / 2018 ' ,
' 25 / 1 / 2018 ' ,
' 26 / 1 / 2018 ' ,
' 27 / 1 / 2018 ' ,
' 28 / 1 / 2018 ' ,
' 29 / 1 / 2018 ' ,
' 30 / 1 / 2018 ' ,
' 31 / 1 / 2018 ' ,
' 1 / 2 / 2018 ' ,
' 2 / 2 / 2018 ' ,
' 3 / 2 / 2018 ' ,
' 4 / 2 / 2018 ' ,
' 5 / 2 / 2018 ' ,
' 6 / 2 / 2018 ' ,
' 7 / 2 / 2018 ' ,
' 8 / 2 / 2018 ' ,
' 9 / 2 / 2018 ' ,
' 10 / 2 / 2018 ' ,
' 11 / 2 / 2018 ' ,
' 12 / 2 / 2018 ' ,
' 13 / 2 / 2018 ' ,
' 14 / 2 / 2018 ' ,
' 15 / 2 / 2018 ' ,
' 16 / 2 / 2018 ' ,
' 17 / 2 / 2018 ' ,
' 18 / 2 / 2018 ' ,
' 19 / 2 / 2018 ' ,
' 20 / 2 / 2018 ' ,
' 21 / 2 / 2018 ' ,
' 22 / 2 / 2018 ' ,
' 23 / 2 / 2018 ' ,
' 24 / 2 / 2018 ' ,
' 25 / 2 / 2018 ' ,
' 26 / 2 / 2018 ' ,
' 27 / 2 / 2018 ' ,
' 2 / 3 / 2018 ' ,
' 3 / 3 / 2018 ' ,
' 4 / 3 / 2018 ' ,
' 5 / 3 / 2018 ' ,
' 6 / 3 / 2018 ' ,
' 7 / 3 / 2018 ' ,
' 8 / 3 / 2018 ' ,
' 9 / 3 / 2018 ' ,
' 10 / 3 / 2018 ' ,
' 11 / 3 / 2018 ' ,
' 12 / 3 / 2018 ' ,
' 13 / 3 / 2018 ' ,
' 14 / 3 / 2018 ' ,
' 15 / 3 / 2018 ' ,
' 16 / 3 / 2018 ' ,
' 17 / 3 / 2018 ' ,
' 18 / 3 / 2018 ' ,
' 19 / 3 / 2018 ' ,
' 20 / 3 / 2018 ' ,
' 21 / 3 / 2018 ' ,
' 22 / 3 / 2018 ' ,
' 23 / 3 / 2018 ' ,
' 24 / 3 / 2018 ' ,
' 25 / 3 / 2018 ' ,
' 26 / 3 / 2018 ' ,
' 27 / 3 / 2018 ' ,
' 28 / 3 / 2018 ' ,
' 29 / 3 / 2018 ' ,
' 30 / 3 / 2018 ' ,
' 31 / 3 / 2018 ' ,
' 1 / 4 / 2018 ' ,
' 2 / 4 / 2018 ' ,
' 3 / 4 / 2018 ' ,
' 4 / 4 / 2018 ' ,
' 5 / 4 / 2018 ' ,
' 6 / 4 / 2018 ' ,
' 7 / 4 / 2018 ' ,
' 8 / 4 / 2018 ' ,
' 9 / 4 / 2018 ' ,
' 10 / 4 / 2018 ' ,
' 15 / 5 / 2018 ' ,
' 16 / 5 / 2018 ' ,
' 17 / 5 / 2018 ' ,
' 18 / 5 / 2018 ' ,
' 19 / 5 / 2018 ' ,
' 20 / 5 / 2018 ' ,
' 21 / 5 / 2018 ' ,
' 22 / 5 / 2018 ' ,
' 23 / 5 / 2018 ' ,
' 24 / 5 / 2018 ' ,
' 25 / 5 / 2018 ' ,
' 26 / 5 / 2018 ' ,
' 27 / 5 / 2018 ' ,
' 28 / 5 / 2018 ' ,
' 29 / 5 / 2018 ' ,
' 30 / 5 / 2018 ' ,
' 31 / 5 / 2018 ' ,
' 1 / 6 / 2018 ' ,
' 2 / 6 / 2018 ' ,
' 3 / 6 / 2018 ' ,
' 4 / 6 / 2018 ' ,
' 5 / 6 / 2018 ' ,
' 6 / 6 / 2018 ' ,
' 7 / 6 / 2018 ' ,
' 8 / 6 / 2018 ' ,
' 9 / 6 / 2018 ' ,
' 10 / 6 / 2018 ' ,
' 11 / 6 / 2018 ' ,
' 12 / 6 / 2018 ' ,
' 13 / 6 / 2018 ' ,
' 14 / 6 / 2018 ' ,
' 15 / 6 / 2018 ' ,
' 16 / 6 / 2018 ' ,
' 17 / 6 / 2018 ' ,
' 18 / 6 / 2018 ' ,
' 19 / 6 / 2018 ' ,
' 20 / 6 / 2018 ' ,
' 21 / 6 / 2018 ' ,
' 22 / 6 / 2018 ' ,
' 23 / 6 / 2018 ' ,
' 24 / 6 / 2018 ' ,
' 25 / 6 / 2018 '
            ]
        },
        plotOptions: {},
        credits: { text: 'Sea-Mer Asso', href: 'https://sea-mer.org' },
        series: [{
            name: 'Composante',
            data: [258 ,
151 ,
87 ,
211 ,
218 ,
194 ,
-8 ,
168 ,
168 ,
168 ,
205 ,
149 ,
109 ,
-27 ,
21 ,
161 ,
64 ,
96 ,
28 ,
114 ,
244 ,
167 ,
209 ,
173 ,
101 ,
107 ,
117 ,
-107 ,
100 ,
-28 ,
242 ,
-151 ,
97 ,
121 ,
202 ,
168 ,
65 ,
191 ,
112 ,
67 ,
215 ,
144 ,
359 ,
230 ,
233 ,
193 ,
54 ,
-134 ,
-121 ,
-87 ,
-71 ,
-37 ,
73 ,
76 ,
75 ,
35 ,
133 ,
214 ,
159 ,
271 ,
264 ,
229 ,
334 ,
271 ,
261 ,
255 ,
135 ,
62 ,
244 ,
431 ,
207 ,
266 ,
26 ,
-144 ,
-133 ,
-48 ,
8 ,
-23 ,
50 ,
70 ,
136 ,
337 ,
294 ,
170 ,
55 ,
-74 ,
44 ,
-68 ,
-263 ,
-241 ,
-64 ,
205 ,
374 ,
211 ,
129 ,
23 ,
98 ,
53 ,
83 ,
-71 ,
-35 ,
-40 ,
-48 ,
-152 ,
-250 ,
-133 ,
-219 ,
-196 ,
-84 ,
-162 ,
-128 ,
20 ,
-31 ,
2 ,
140 ,
97 ,
43 ,
149 ,
283 ,
213 ,
149 ,
25 ,
-58 ,
-63 ,
-31 ,
27 ,
151 ,
237 ,
256 ,
98 ,
106 ,
-180 ,
4 ,
-8 ,
-4 ,
-33 ,
123 ,
86 ,
47 ,
159 ,
-44 ,
-220 ,
-237 ,
-206 ,
-51 ,
54 ,
186 ,
115 ,
113 ,
128 ,
236 ,
84 ,
44 ,
122 ,
166 ,
-16 ,
-140 ,
-110 ,
-95 ,
-152 ,
-138 ,
-87 ,
-11 ,
52 ,
-56 ,
-11 ,
194 ,
150 ,
121 ,
110 ,
152 ,
120 ,
28 ,
106 ,
144 ,
-178 ,
-74 ,
-121 ,
-126 ,
-144 ,
10 ,
44 ,
50 ,
1 ,
-8 ,
-10 ,
59 ,
-26 ,
-144 ,
73 ,
16 ,
-138 ,
-103 ,
12 ,
121 ,
208 ,
217 ,
124 ,
67 ,
112 ,
85 ,
84 ,
142 ,
97 ,
-23 ,
-19 ,
119 ,
139 ,
186 ,
190 ,
104 ,
181 ,
118 ,
163 ,
251 ,
50 ,
77 ,
218 ,
14 ,
54 ,
162 ,
98 ,
111 ,
166 ,
173 ,
126 ,
144 ,
162 ,
156 ,
103 ,
0 ,
-169 ,
76 ,
116 ,
33 ,
130 ,
108 ,
136 ,
137 ,
155 ,
158 ,
176 ,
127 ,
75 ,
94 ,
215 ,
181 ,
234 ,
178 ,
111 ,
164 ,
206 ,
108 ,
125 ,
194 ,
183 ,
139 ,
-81 ,
-193 ,
-159 ,
-117 ,
78 ,
29 ,
206 ,
297 ,
136 ,
-121 ,
-1 ,
-5 ,
87 ,
-95 ,
156 ,
85 ,
4 ,
102 ,
134 ,
131 ,
18 ,
190 ,
113 ,
79 ,
-43 ,
138 ,
50 ,
79 ,
-13 ,
-89 ,
-145 ,
-15 ,
15 ,
109 ,
113 ,
27 ,
52 ,
-18 ,
-78 ,
87 ,
36 ,
-37 ,
181 ,
60 ,
60 ,
223 ,
225 ,
145 ,
194 ,
99 ,
-128 ,
-277 ,
-320 ,
-273 ,
-209 ,
-60 ,
-75 ,
-44 ,
-148 ,
-208 ,
-243 ,
-173 ,
71 ,
10 ,
173 ,
272 ,
137 ,
24 ,
-13 ,
-109 ,
-251 ,
-158 ,
-71 ,
121 ,
171 ,
147 ,
-108 ,
-191 ,
-159 ,
-72 ,
3 ,
16 ,
120 ,
71 ,
85 ,
-2 ,
82 ,
215 ,
209 ,
-13 ,
-26 ,
19 ,
142 ,
236 ,
296 ,
296 ,
236 ,
150 ,
118 ,
-81 ,
145 ,
-156 ,
-298 ,
-295 ,
-167 ,
-175 ,
-315 ,
-226 ,
-38 ,
79 ,
-85 ,
-290 ,
-269 ,
-160 ,
9 ,
59 ,
104 ,
89 ,
156 ,
158 ,
19 ,
64 ,
-97 ,
-39 ,
-42 ,
-5 ,
60 ,
-75 ,
-54 ,
128 ,
105 ,
164 ,
306 ,
269 ,
195 ,
-44 ,
-158 ,
-111 ,
46 ,
49 ,
101 ,
-116 ,
161 ,
117 ,
-56 ,
60 ,
144 ,
2 ,
178 ,
230 ,
266 ,
228 ,
290 ,
181 ,
120 ,
-127 ,
-132 ,
-198 ,
-248 ,
-228 ,
-107 ,
-73 ,
-34 ,
82 ,
-126 ,
-163 ,
-153 ,
1 ,
52 ,
15 ,
-128 ,
-18 ,
-100 ,
15 ,
25 ,
-96 ,
-23 ,
99 ,
-57 ,
-161 ,
-121 ,
-66 ,
-240 ,
-347 ,
-181 ,
6 ,
110 ,
109 ,
-25 ,
152 ,
221 ,
276 ,
343 ,
366 ,
195 ,
136 ,
166 ,
201 ,
268 ,
198 ,
320 ,
-113 ,
151 ,
284 ,
227 ,
154 ,
235 ,
208 ,
-86 ,
-74 ,
48 ,
125 ,
166 ,
76 ,
55 ,
222 ,
355 ,
297 ,
227 ,
219 ,
-88 ,
-235 ,
-241 ,
-267 ,
-276 ,
-194 ,
26 ,
41 ,
-44 ,
16 ,
84 ,
40 ,
23 ,
83 ,
39 ,
-25 ,
27 ,
-106 ,
-24 ,
97 ,
95 ,
237 ,
106 ,
135 ,
205 ,
190 ,
15 ,
-83 ,
-193 ,
14 ,
142 ,
-24 ,
-47 ,
136 ,
52 ,
-49 ,
111 ,
97 ,
-77 ,
-187 ,
23 ,
-66 ,
-77 ,
-126 ,
-266 ,
-172 ,
37 ,
-84 ,
-59 ,
-94 ,
-134 ,
38 ,
55 ,
122 ,
3 ,
51 ,
-8 ,
113 ,
177 ,
135 ,
-75 ,
-102 ,
173 ,
80 ,
-128 ,
-167 ,
42 ,
-77 ,
-13 ,
153 ,
85 ,
-85 ,
6 ,
224 ,
121 ,
51 ,
416 ,
293 ,
67 ,
150 ,
33 ,
136 ,
238 ,
54 ,
-136 ,
173 ,
191 ,
81 ,
-87 ,
-125 ,
-139 ,
-105 ,
216 ,
213 ,
179 ,
215 ,
-81 ,
-100 ,
108 ,
48 ,
12 ,
167 ,
163 ,
180 ,
106 ,
-53 ,
-59 ,
160 ,
107 ,
-35 ,
194 ,
83 ,
7 ,
-82 ,
92 ,
175 ,
166 ,
-71 ,
-198 ,
19 ,
0 ,
20 ,
213 ,
182 ,
57 ,
157 ,
123 ,
98 ,
51 ,
231 ,
213 ,
201 ,
159 ,
97 ,
132 ,
39 ,
-30 ,
178 ,
235 ,
28 ,
-70 ,
102 ,
53 ,
156 ,
218 ,
288 ,
118 ,
35 ,
-136 ,
130 ,
126 ,
-28 ,
33 ,
-24 ,
-75 ,
11 ,
-7 ,
164 ,
47 ,
-28 ,
-15 ,
116 ,
138 ,
235 ,
210 ,
286 ,
187 ,
215 ,
386 ,
260 ,
384 ,
268 ,
90 ,
19 ,
7 ,
71 ,
82 ,
137 ,
94 ,
71 ,
-59 ,
-139 ,
-70 ,
-104 ,
-85 ,
83 ,
89 ,
138 ,
134 ,
276 ,
148 ,
244 ,
239 ,
117 ,
276 ,
101 ,
137 ,
208 ,
225 ,
175 ,
131 ,
35 ,
8 ,
89 ,
59 ,
-70 ,
-18 ,
297 ,
312 ,
353 ,
213 ,
188 ,
128 ,
76 ,
9 ,
270 ,
109 ,
-60 ,
124 ,
2 ,
67 ,
-8 ,
29 ,
-2 ,
96 ,
97 ,
119 ,
-55 ,
192 ,
58 ,
258 ,
221 ,
103 ,
242 ,
48 ,
135 ,
201 ,
315 ,
110 ,
44 ,
90 ,
-4 ,
29 ,
79 ,
88 ,
142 ,
137 ,
122 ,
134 ,
161 ,
169 ,
-97 ,
118 ,
282 ,
354 ,
172 ,
118 ,
153 ,
13 ,
129 ,
132 ,
193 ,
111 ,
174 ,
219 ,
107 ,
199 ,
202 ,
155 ,
258 ,
243 ,
216 ,
225 ,
200 ,
439 ,
286 ,
246 ,
-103 ,
-267 ,
-202 ,
-42 ,
85 ,
-47 ,
-93 ,
-171 ,
-69 ,
263 ,
349 ,
361 ,
366 ,
280 ,
98 ,
49 ,
166 ,
143 ,
131 ,
162 ,
69 ,
148 ,
216 ,
238 ,
11 ,
274 ,
219 ,
113 ,
-9 ,
-148 ,
-184 ,
-85 ,
-45 ,
88 ,
166 ,
120 ,
287 ,
203 ,
56 ,
17 ,
194 ,
65 ,
-47 ,
-25 ,
93 ,
35 ,
-136 ,
-215 ,
-257 ,
-247 ,
-264 ,
-202 ,
0 ,
-110 ,
-183 ,
-18 ,
-57 ,
37 ,
170 ,
201 ,
-54 ,
18 ,
-120 ,
143 ,
162 ,
-107 ,
-78 ,
37 ,
-85 ,
-63 ,
-71 ,
-31 ,
-29 ,
-47 ,
-44 ,
-72 ,
-28 ,
-1 ,
-79 ,
-35 ,
-79 ,
-47 ,
102 ,
67 ,
-43 ,
23 ,
4 ,
54 ,
-146 ,
-27 ,
-5 ,
-122 ,
-53 ,
21 ,
-43 ,
-141 ,
-81 ,
-47 ,
-114 ,
-45 ,
40 ,
-33 ,
-27 ,
0 ,
-162 ,
-5 ,
-34 ,
-69 ,
-103 ,
-75 ,
82 ,
108 ,
-15 ,
-133 ,
-145 ,
-124 ,
-104 ,
-118 ,
-149 ,
-153 ,
-128 ,
-108 ,
12 ,
145 ,
132 ,
140 ,
159 ,
193 ,
150 ,
135 ,
81 ,
15 ,
65 ,
-61 ,
-12]
        }]
    };
    var chart = new Highcharts.Chart(options);
})
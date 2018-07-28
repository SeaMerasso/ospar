<!DOCTYPE html>
<html>
<head>
    <title>Sea-Mer Asso</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    
    <script type="text/javascript" src="../modules/Highcharts-6/code/jquery.min.js"></script>
    <script src="../modules/Highcharts-6/code/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/sankey.js"></script>
    <script src="https://code.highcharts.com/modules/windbarb.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>

    
    
    <script type="text/javascript" src="graphs/general/general.js"></script>
    <script type="text/javascript" src="graphs/general/meteo.js"></script>
    <script type="text/javascript" src="graphs/general/tendance.js"></script>
    <script type="text/javascript" src="graphs/general/roses.js"></script>
    
    <script src="https://code.highcharts.com/modules/series-label.js"></script>

        
</head>

<body>
<div class="content">
    <center><img SRC="inc/logo.jpg" width="50%"></center>
    <?php include 'inc/menu.php' ?>
</div>

<div class="content">
    <div class="contenu">
        <div id="general" style="width: 100%; height: 600px; margin: 0 auto"></div>
    </div>
    <div class="contenu">
        <div id="meteo" style="width: 5000px; height: 600px;" ></div>
    </div>
     <div class="contenu">
        <div id="tendance" style="width: 5000px; height: 600px;"></div>
    </div>
</div>

<div class="content">
    <?php
    include 'graphs/general/roses.php' ;
    ?>
</div>

</body>
</html>

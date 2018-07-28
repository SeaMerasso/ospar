<!DOCTYPE html>
<html>
<head>
    <title>Sea-Mer Asso</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="http://obs.sea-mer.org/style.css">
    
    <script type="text/javascript" src="../modules/Highcharts-6/code/jquery.min.js"></script>
    <script src="../modules/Highcharts-6/code/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/sankey.js"></script>
    
    <script type="text/javascript" src="../graphs/usage/categorie.js"></script>
    <script type="text/javascript" src="../graphs/usage/graph_categorie.js"></script>
    <script type="text/javascript" src="../graphs/usage/packaging.js"></script>
    <script type="text/javascript" src="../graphs/usage/liquide.js"></script>
    
    
</head>

<body>
<div class="content">
    <center><img SRC="../inc/logo.jpg" width="50%"></center>
    <?php include '../inc/menu.php' ?>
</div>

<div class="content">
    <div class="contenu">
        <div class="demi_container">
            <div class="demi_g">
                <div id="categorie" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
            <div class="demi_d">
                <div id="packaging" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
        </div>
    </div>
    <div class="contenu">
        <div class="demi_container">
            <div class="demi_g">
                <div id="liquide" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
            <div class="demi_d">
                
            </div>
        </div>
    </div>     
    <div class="contenu">
        <?php include '../graphs/usage/graph_categorie.php'; ?>
    </div>
</div>
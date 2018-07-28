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
    
    <script type="text/javascript" src="../graphs/nature/nature.js"></script>
    <script type="text/javascript" src="../graphs/nature/texture.js"></script>
    <script type="text/javascript" src="../graphs/nature/etat.js"></script>
    
    <script type="text/javascript" src="../graphs/nature/graph_nature.js"></script>
    <script type="text/javascript" src="../graphs/nature/graph_texture.js"></script>
    
    <script type="text/javascript" src="../graphs/nature/sankey_1.js"></script>
    
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
                <div id="nature" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
            <div class="demi_d">
                <div id="texture" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
        </div>
        <div class="demi_container">
            <div class="demi_g">
                <div id="etat" style="width: 100%; height: 400px; margin: 0 auto"></div>
            </div>
            <div class="demi_d">

            </div>
        </div>
    </div>
    <div class="contenu">
        <?php include '../graphs/nature/graph_nature.php'; ?>
    </div>
    <div class="contenu">
        <?php include '../graphs/nature/graph_texture.php'; ?>
    </div>
    <div class="contenu">
        <div id="sankey_1" style="width: 100%; height: 600px; margin: 0 auto"></div>
    </div>
    

</div>
</body>
</html>
</body>
</html>
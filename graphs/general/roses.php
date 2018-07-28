<?php 
$dossier = 'graphs/general/data_graphs/roses';
$liste_fichiers = scandir($dossier);
$comptage = count($liste_fichiers);
$nombre_fichiers = $comptage - 2 ;
echo '<div class="contenu">' ;
for($i = 1; $i <= $nombre_fichiers; $i++) {
    $id = 'rose'.$i ;
    if ($i % 2 != 0) {
        echo '<div class="demi_container">';
            echo '<div class="demi_g">';
                echo '<div id="'.$id.'" style=" width: 100%; height: 400px; margin: 0 auto"></div>';
            echo '</div>';
        } else {
            echo '<div class="demi_d">';
                echo '<div id="'.$id.'" style=" width: 100%; height: 400px; margin: 0 auto"></div>';
            echo '</div>';
        echo '</div>';
}
}
echo '</div>';
?>
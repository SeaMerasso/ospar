<div id="graph_texture" style="width: 100%; height: 600px; margin: 0 auto"></div>
<center>
<div id="div_div">
<button class="bouton un" id="texture_tous">Tous les sites</button>
<button class="bouton" id="texture_boucaniers">Boucaniers</button>
<button class="bouton" id="texture_saint_frieux">Saint Frieux</button>
<button class="bouton" id="texture_zuydcoote">Zuydcoote</button>
</div>
</center>

<script>
// CSS POUR LES BOUTONS ACTIFS
var btnContainer_texture = document.getElementById("div_div");
var btns_texture = btnContainer_texture.getElementsByClassName("bouton");
for (var i = 0; i < btns_texture.length; i++) {
  btns_texture[i].addEventListener("click", function() {
    var current_texture = document.getElementsByClassName("un");
    current_texture[0].className = current_texture[0].className.replace(" un", "");
    this.className += " un";
  });
}
</script>
<div id="graph_nature" style="width: 100%; height: 600px; margin: 0 auto"></div>
<center>
<div id="div_site">
<button class="bouton deux" id="nature_tous">Tous les sites</button>
<button class="bouton" id="nature_boucaniers">Boucaniers</button>
<button class="bouton" id="nature_saint_frieux">Saint Frieux</button>
<button class="bouton" id="nature_zuydcoote">Zuydcoote</button>
</div>
</center>

<script>
// CSS POUR LES BOUTONS ACTIFS
var btnContainer_traceur = document.getElementById("div_site");
var btns_traceur = btnContainer_traceur.getElementsByClassName("bouton");
for (var i = 0; i < btns_traceur.length; i++) {
  btns_traceur[i].addEventListener("click", function() {
    var current_traceur = document.getElementsByClassName("deux");
    current_traceur[0].className = current_traceur[0].className.replace(" deux", "");
    this.className += " deux";
  });
}
</script>
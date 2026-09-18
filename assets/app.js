// Filters the cluster table by substring. Deliberately dependency-free: the
// table is rendered server side, so the page is complete and readable with
// JavaScript disabled, and this only hides rows.
(function () {
  var input = document.getElementById("tabela_filtro");
  var table = document.getElementById("tabela_clusters");
  var estado = document.getElementById("tabela_estado");
  if (!input || !table) {
    return;
  }
  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var total = rows.length;
  var timer = null;

  function aplicarFiltro() {
    var needle = input.value.trim().toLowerCase();
    var visiveis = 0;
    rows.forEach(function (row) {
      var oculta = needle !== "" && row.textContent.toLowerCase().indexOf(needle) === -1;
      row.hidden = oculta;
      if (!oculta) {
        visiveis += 1;
      }
    });
    if (estado) {
      estado.textContent = needle === "" ? "" : visiveis + " de " + total + " linhas";
    }
  }

  input.addEventListener("input", function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(aplicarFiltro, 120);
  });
})();

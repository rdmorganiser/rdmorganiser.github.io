---
layout: page

key: cooperation
lang: de
---

<link rel="stylesheet" href="/css/leaflet.css" />

<script>
    var _locations = {{ site.data.locations | jsonify }};
</script>

{% raw  %}
<script id="marker-template" type="text/x-handlebars-template">
    <h4>{{name}}</h4>

    <dl>
        {{#if url}}
        <dt>URL</dt>
        <dd><a href="{{url}}" target="_blank">{{url}}</a></dd>
        {{/if}}
        {{#if contact}}
        <dt>Kontakt</dt>
        <dd>{{contact}}</dd>
        {{/if}}
    </dl>
</script>
{% endraw %}

<script src="/js/handlebars.min.js"></script>
<script src="/js/leaflet.js"></script>
<script src="/js/map.js"></script>

<div id="map" class="map"></div>

Kooperationen
=============

Um Anforderungen und Feedback aus den Fachwissenschaften einfließen zu lassen sowie den Austausch und die Abstimmung mit Infrastrukturinitiativen zum Datenmanagement sicherzustellen, kooperiert RDMO mit verschiedenen Partnern:

* [bwFDM - Koordiniertes Forschungsdatenmanagement in Baden-Württemberg](https://bwfdm.scc.kit.edu/)
* [Göttingen eResearch Alliance](http://www.eresearch.uni-goettingen.de/)
* [Hessisches Forschungsdateninfrastrukture (HeFDI)](https://www.uni-marburg.de/projekte/forschungsdaten/projekt)

* [Universität Bochum](www.ruhr-uni-bochum.de)
* [Universitäts- und Landesbibliothek Darmstadt](https://www.ulb.tu-darmstadt.de)
* [Universität Dortmund](https://www.tu-dortmund.de/uni/de/Uni)
* [Universitätsbibliothek Duisburg-Essen](https://www.uni-due.de/ub/index.php)
* [Universitäten von Düsseldorf, Siegen & Wuppertal]()
* [Universitätsbibliothek Stuttgart](https://www.ub.stuttgart.de/)
* [Universität Trier](https://www.uni-trier.de)

* [Leibnitz-Institut für Pflanzenbiochemie](https://www.ipb-halle.de)
* [Max Planck Digital Library (MPDL)](https://www.mpdl.mpg.de)
* [Wasserforschungsisntitut EAWAG](www.eawag.ch)


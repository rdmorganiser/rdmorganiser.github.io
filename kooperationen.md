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

Fachwissenschaften
------------------

* [Arbeitsgruppe Optische Sonnenphysik am Leibniz-Institut für Astrophysik Potsdam](http://www.aip.de/de/forschung/forschungsschwerpunkt-kmf/cosmic-magnetic-fields/sonnenphysik/optische-sonnenphysik)
* [Projekt TwinLife](http://www.twin-life.de/de)

Infrastruktur
-------------

* [bwFDM - Koordiniertes Forschungsdatenmanagement in Baden-Württemberg](https://bwfdm.scc.kit.edu/)
* [Projekt DataWiz](http://www.zpid.de/index.php?wahl=forschung&uwahl=informationstechnologie&uuwahl=DataWiz)
* [GESIS - Datenarchiv für Sozialwissenschaften](http://www.gesis.org/home/)
* [Göttingen eResearch Alliance](http://www.eresearch.uni-goettingen.de/)
* [Fraunhofer-Gesellschaft](https://www.fraunhofer.de/)
* [Kompetenzzentrum Forschungsdaten der Universität Heidelberg](http://data.uni-heidelberg.de/)
* [Universitätsbibliothek Duisburg-Essen](https://www.uni-due.de/ub/index.php)



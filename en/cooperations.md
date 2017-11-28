---
layout: page

key: cooperation
lang: en
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
        <dt>Contact</dt>
        <dd>{{contact}}</dd>
        {{/if}}
    </dl>
</script>
{% endraw %}

<script src="/js/handlebars.min.js"></script>
<script src="/js/leaflet.js"></script>
<script src="/js/map.js"></script>

<div id="map" class="map"></div>

Cooperations
============

The project needs feedback from disciplines and IT infrastructure representatives to ensure the tool meets the needs of the target groups. We gratefully acknowledge the following partners:

Disciplines
-----------

* [Research Group Optical Solar Physics in Leibniz Institute for Astrophysics Potsdam](http://www.aip.de/en/research/research-area-cmf/cosmic-magnetic-fields/solar-physics/optical-solar-physics?set_language=en)
* [Project TwinLife](http://www.twin-life.de/en)

Infrastructure
--------------

* [bwFDM - Koordiniertes Forschungsdatenmanagement in Baden-Württemberg](https://bwfdm.scc.kit.edu/english/index.php)
* [Project DataWiz](https://www.zpid.de/index.php?wahl=forschung&uwahl=informationstechnologie&uuwahl=DataWiz&lang=EN)
* [GESIS - Data Archive for the Social Sciences (DAS)](http://www.gesis.org/en/home/)
* [Göttingen eResearch Alliance](http://www.eresearch.uni-goettingen.de/)
* [Fraunhofer-Gesellschaft](https://www.fraunhofer.de/en.html)
* [Heidelberg University, Competence Centre for Research Data](http://data.uni-heidelberg.de/index.en.html)
* [University Library Duisburg-Essen](https://www.uni-due.de/ub/en/eindex.php)

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

* [bwFDM - Koordiniertes Forschungsdatenmanagement in Baden-Württemberg](https://bwfdm.scc.kit.edu/)
* [Göttingen eResearch Alliance](http://www.eresearch.uni-goettingen.de/)
* [Hessisches Forschungsdateninfrastrukture (HeFDI)](https://www.uni-marburg.de/projekte/forschungsdaten/projekt)

* [University of Bochum](www.ruhr-uni-bochum.de)
* [University and national library of Darmstadt](https://www.ulb.tu-darmstadt.de)
* [University of Dortmund](https://www.tu-dortmund.de/uni/de/Uni)
* [University library of Duisburg-Essen](https://www.uni-due.de/ub/index.php)
* [Universities of Düsseldorf, Siegen & Wuppertal]()
* [University lirbary of Stuttgart](https://www.ub.stuttgart.de/)
* [University Trier](https://www.uni-trier.de)

* [Leibnitz-Institut für Pflanzenbiochemie](https://www.ipb-halle.de)
* [Max Planck Digital Library (MPDL)](https://www.mpdl.mpg.de)
* [Wasserforschungsisntitut EAWAG](www.eawag.ch)


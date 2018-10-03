---
layout: page

key: cooperations
lang: de
---

<link rel="stylesheet" href="{{ site.baseurl }}/css/leaflet.css" />

<script>
    var _locations = {{ site.data.locations | jsonify }};
</script>

{% raw  %}
<script id="popup-template" type="text/x-handlebars-template">

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

{% raw  %}
<script id="legend-template" type="text/x-handlebars-template">

<p>
    <img src="/img/icons/marker-icon-blue.png" /> Produktiv-Instanzen
</p>
<p>
    <img src="/img/icons/marker-icon-grey.png" /> Test-Instanzen
</p>

</script>
{% endraw %}

<script src="{{ site.baseurl }}/js/handlebars.min.js"></script>
<script src="{{ site.baseurl }}/js/leaflet.js"></script>
<script src="{{ site.baseurl }}/js/map.js"></script>

<div id="map" class="map"></div>

Kooperationen
=============

Um Anforderungen und Feedback aus den Fachwissenschaften einfließen zu lassen sowie den Austausch und die Abstimmung mit Infrastrukturinitiativen zum Datenmanagement sicherzustellen, kooperiert RDMO mit verschiedenen Partnern:

<ul>
{% for location in site.data.locations %}
    <li>
        <a href="{{ location.url }}">{{ location.name }}</a>
    </li>
{% endfor %}
</ul>

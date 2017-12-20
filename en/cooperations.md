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

<ul>
{% for location in site.data.locations %}
    <li>
        <a href="{{ location.url }}">{{ location.name }}</a>
    </li>
{% endfor %}
</ul>

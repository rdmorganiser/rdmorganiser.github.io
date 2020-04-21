---
layout: page

key: cooperations
lang: en
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
        <dt>Contact</dt>
        <dd>{{contact}}</dd>
    {{/if}}
    {{#if discipline}}
        <dt>Discipline</dt>
        <dd>{{discipline}}</dd>
    {{/if}}
    {{#if description}}
        <dt>Description</dt>
        <dd>{{description}}</dd>
    {{/if}}
</dl>

</script>
{% endraw %}

{% raw  %}
<script id="legend-template" type="text/x-handlebars-template">

<p>
    <img src="/img/icons/marker-icon-blue.png" /> Production instances
</p>
<p>
    <img src="/img/icons/marker-icon-grey.png" /> Testing instances
</p>

</script>
{% endraw %}

<script src="{{ site.baseurl }}/js/func.js"></script>
<script src="{{ site.baseurl }}/js/handlebars.min.js"></script>
<script src="{{ site.baseurl }}/js/leaflet.js"></script>
<script src="{{ site.baseurl }}/js/map.js"></script>

<script src="{{ site.baseurl }}/js/tablesorter.min.js"></script>
<script src="{{ site.baseurl }}/js/tablesorter.widgets.js"></script>
<link rel="stylesheet" type="text/css" href="/css/table.css">

<div id="map" class="map"></div>

Cooperations
============

The project needs feedback from disciplines and IT infrastructure representatives to ensure the tool meets the needs of the target groups. We gratefully acknowledge the following partners:

<input class="tabfilter" type="search" data-column="all" placeholder="Filter">
<table id="partners" class="tablesorter">
    <thead>
        <th class="name"></th><th></th>
    </thead>
    <tbody>
        {% for location in site.data.locations %}
            <tr>
                <td class="name">
                    {% if location.url %}
                        <a href="{{ location.url }}">{{ location.name }}</a>
                    {% else %}
                        {{ location.name }}
                    {% endif %}
                </td>
                <td id="{{ location.name | slugify: latin }}" class="instance">
                    {% if location.color == "blue" %}
                        <p style="display: none">live</p>
                        <img src="/img/icons/marker-icon-blue.png" />
                    {% else %}
                        <p style="display: none">test</p>
                        <img src="/img/icons/marker-icon-grey.png" />
                    {% endif %}
                    <script>
                        $("#{{ location.name | slugify }}")
                        .on("click", function(){
                            open_marker("{{ location.name | slugify }}");
                        });
                    </script>
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>

<script>
    $(document).ready(function() {
        init_table();
    });
</script>

---
layout: front

key: index
lang: de
---


# Willkommen bei RDMO
<hr>

Auf diesen Seiten informieren wir u.a. über die [RDMO-Arbeitsgemeinschaft](./Community),  die [Software](./Doku_Admins) und deren Dokumentation, [aktuelle Aktivitäten der Arbeitsgemeinschaft](./aktuelles) und unsere Kooperationspartner.

<div style="width: 35%;margin-top: 1%;">
<h2>Was ist RDMO?</h2>
Der Research Data Management Organiser (RDMO) unterstützt Forschungsprojekte bei der Planung, Umsetzung und Verwaltung aller Aufgaben des Forschungsdatenmanagements.
</div>

<div style=" margin-left:28%;margin-top: -5%;">
<img src="./img/3.Möglichkeit.PNG" style="width: 300px;"/>
</div>

<div style="width: 33%; margin-left:67%;margin-top: -15%;">
<h2>RDMO-Community</h2>
Werden Sie Teil der Community und beteiligen Sie sich an der technischen oder inhaltlichen Weiterentwicklung von RDMO in einer unserer Arbeitsgruppen.<br/>
Wir freuen uns auf Sie!
</div>

<h2>Kooperationsnetzwerk</h2>
Nicht nur aktive Mitarbeitende können sich Rat und Unterstützung von der RDMO-Community holen, auch RDMO-Nutzende und Institutionen, die über eine eigene Instanz verfügen.<br/>
Dieses Kooperationsgeflecht ermöglicht RDMO gleichzeitig, Anforderungen und Feedback aus den Fachwissenschaften zu berücksichtigen, sowie den Austausch und die Abstimmung mit Infrastrukturinitiativen zum Datenmanagement sicherzustellen.


<link rel="stylesheet" href="./css/leaflet.css" />

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
    {{#if discipline}}
        <dt>Disziplin</dt>
        <dd>{{discipline}}</dd>
    {{/if}}
    {{#if description}}
        <dt>Beschreibung</dt>
        <dd>{{description}}</dd>
    {{/if}}
</dl>

</script>
{% endraw %}

{% raw  %}
<script id="legend-template" type="text/x-handlebars-template">

<p>
    <img src="./img/icons/marker-icon-blue.png" /> Produktiv-Instanzen
</p>
<p>
    <img src="./img/icons/marker-icon-grey.png" /> Test-Instanzen
</p>

</script>
{% endraw %}

<script src="./js/func.js"></script>
<script src="./js/handlebars.min.js"></script>
<script src="./js/leaflet.js"></script>
<script src="./js/map.js"></script>

<script src="./js/tablesorter.min.js"></script>
<script src="./js/tablesorter.widgets.js"></script>
<link rel="stylesheet" type="text/css" href="./css/table.css">

<div id="map" class="map"></div>

<div>
    <div class="no_entries"></div>
    <input class="tabfilter" type="search" data-column="all" placeholder="Filter">
</div>

<table id="partners" class="tablesorter">
    <thead>
        <th class="name"></th>
        <th class="contact"></th>
        <th class="instance"></th>
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
                <td class="contact">
                    {% if location.mail %}
                        <a href="{{ location.mail }}">{{ location.contact }}</a>
                    {% else %}
                           {{ location.contact }}
                    {% endif %}
                </td>
                <td id="{{ location.name | slugify: latin }}" class="instance">
                    {% if location.lat and location.lon %}
                        {% if location.color == "blue" %}
                            <img src="./img/icons/marker-icon-blue.png" />
                        {% else %}
                            <img src="./img/icons/marker-icon-grey.png" />
                        {% endif %}
                        <script>
                            $("#{{ location.name | slugify }}")
                            .on("click", function(){
                                open_marker(
                                    "{{ location.name | slugify }}",
                                    [{{ location.lat }}, {{ location.lon }}],
                                    "{{ location.description | size }}"
                                );
                            });
                        </script>
                    {% endif %}
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

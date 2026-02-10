---
layout: front
lang: de
key: index
---

# Willkommen bei RDMO

<hr>

Auf diesen Seiten finden Sie alle wichtigen Informationen rund um die RDMO-Software, aktuelle Veranstaltungen, die RDMO-Community und Möglichkeiten zur Mitarbeit. <br/> Hilfestellungen zum Umgang mit RDMO in der Rolle [Nutzung]({{ site.baseurl }}/Doku_User), [Management]({{ site.baseurl }}/Doku_Manager) und [Administration]({{ site.baseurl }}/Doku_Admins) sind unter <i>Anleitungen</i> zu finden.<br/> Der Schlüssel für die Weiterentwicklung der Software ist eine aktive Beteiligung von Interessierten. Daher steht Ihnen eine Auswahl an [Arbeitsgruppen]({{ site.baseurl }}/aktuelles) mit unterschiedlichem Fokus zur Verfügung. Sprechen Sie die Verantwortlichen an oder schreiben Sie eine <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> an die interne Mailingliste.<br/>

Die freie Software finden Sie unter: [github.com/rdmorganiser](https://github.com/rdmorganiser)

Eine Demo-Instanz finden Sie unter: [rdmo.aip.de](https://rdmo.aip.de)

Hier können Sie sich für unsere Mailingliste anmelden, um immer auf dem letzten Stand zu bleiben: [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/subscribe/rdmo)

Hier können Sie sich zur Mailingliste der Contentgruppe, um bei der Weiterentwicklung vom Katalogen und weiteres Materials beizutragen - keine Programmierkenntnisse erforderlich! [rdmo-contentgruppe@listserv.dfn.de](https://www.listserv.dfn.de/sympa/subscribe/rdmo-contentgruppe)

Hier können Sie sich für unseren Gruppenchat anmelden, für Zusammenarbeit und Troubleshooting: [RDMO-Matrix](https://matrix.to/#/#rdmo:matrix.org)

<div style="width: 35%;margin-top: 1%;">
<h2>Was ist RDMO?</h2>
Der Research Data Management Organiser (RDMO) unterstützt Forschungsprojekte bei der Planung, Umsetzung und Verwaltung aller Aufgaben des Forschungsdatenmanagements.
</div>

<div style=" margin-left:33%;">
<img src="./img/what_is_rdmo.png" style="width: 250px;"/>
</div>

<div style="width: 33%; margin-left:67%;">
<h2>RDMO-Community</h2>
Werden Sie Teil der Community und beteiligen Sie sich an der technischen oder inhaltlichen Weiterentwicklung von RDMO in einer unserer Arbeitsgruppen.<br/>
Wir freuen uns auf Sie!
</div>

<h2>Kooperationsnetzwerk</h2>
Alle RDMO-Nutzende und Institutionen, die über eine eigene Instanz verfügen, können sich Rat und Unterstützung von der RDMO-Community holen.<br/>
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

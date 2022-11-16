---
layout: front

key: index
lang: de
---


# Willkommen auf der Seite von RDMO
<hr>

Auf diesen Seiten informieren wir u.a. über die [RDMO-Arbeitsgemeinschaft]({{ site.baseurl }}/rdmo_arge),  die [Software]({{ site.baseurl }}/software), deren [Dokumentation]({{ site.baseurl }}/dokumentation), [aktuelle Aktivitäten der Arbeitsgemeinschaft]({{ site.baseurl }}/aktuelles) und unsere [Kooperationspartner]({{ site.baseurl }}/kooperationen).

## Was ist der Research Data Management Organiser?
Der Research Data Management Organiser (RDMO) unterstützt Forschungsprojekte bei der Planung, Umsetzung und Verwaltung aller Aufgaben des Forschungsdatenmanagements. Es ermöglicht zusätzlich die textuelle Ausgabe eines Datenmanagementplans nach den Vorgaben unterschiedlicher Förderer.
RDMO ist durch das RDMO-Projekt mit seinen [Arbeitspaketen]({{ site.baseurl }}/arbeitspakete) geschaffen worden. 

## RDMO-Community
RDMO wurde im Rahmen von zwei Förderperioden als DFG Projekt entwickelt und hat den Status einer operationellen Software erreicht. Seit 2020 kümmert sich die Community um die stetige Weiterentwicklung der Software und Koordinierung des Projekts. Die Mitarbeit erfolgt dabei in verschiedenen Gruppen: Steuerungsgruppe, Softwaregruppe und Contentgruppe.

Um immer auf dem neuesten Stand zu bleiben, abonnieren Sie bitte unsere Mailingliste [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/info/rdmo), folgen uns auf [Twitter](https://twitter.com/rdmorganiser), oder diskutieren mit uns auf [Slack](https://rdmo.slack.com).
(Schreiben Sie eine E-Mail an uns: <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a> und wir laden Sie zu Slack ein.)<br/>
Wenn Sie Fragen haben oder uns anderweitig kontaktieren möchten, schicken Sie bitte eine Mail an unsere interne Mailingliste <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a>.

## Kooperationen
Um Anforderungen und Feedback aus den Fachwissenschaften einfließen zu lassen sowie den Austausch und die Abstimmung mit Infrastrukturinitiativen zum Datenmanagement sicherzustellen, kooperiert RDMO mit verschiedenen Partnern:
<script src="{{ site.baseurl }}/js/func.js"></script>

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

<script src="{{ site.baseurl }}/js/handlebars.min.js"></script>
<script src="{{ site.baseurl }}/js/leaflet.js"></script>
<script src="{{ site.baseurl }}/js/map.js"></script>

<div id="map" class="map" style="z-index: 1000000; position: relative; top: 10px; left: 10%; width: 80%; height: 250px; background-color: #F5F5DC;"> </div>
<script>
    $(document).ready(function() {
        init_table();
    });
</script>

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
                    {% if location.contact %}
                        {{ location.contact }}
                    {% endif %}
                </td>
                <td id="{{ location.name | slugify: latin }}" class="instance">
                    {% if location.lat and location.lon %}
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


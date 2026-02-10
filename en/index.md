---
layout: front
lang: en
key: index
---

# Welcome to RDMO

<hr>

On these pages you will find all important information about the RDMO software, current events, the RDMO community and opportunities to get involved. <br/> Help for handling RDMO in the roles [Usage]({{ site.baseurl }}/en/Docu_User), [Management]({{ site.baseurl }}/en/Docu_Manager) and [Administration]({{ site.baseurl }}/en/Docu_Admins) can be found under <i>Informations</i>.<br/> The key to the further development of the software is the active participation of interested parties. A selection of [working groups]({{ site.baseurl }}/en/news) with different focuses is therefore available to you. Talk to the responsible person or write an <a href="mailto:rdmo-contact@listserv.dfn.de">mail</a> to the internal mailing list.<br/>

The free software: [github.com/rdmorganiser](https://github.com/rdmorganiser)

Demo instance: [rdmo.aip.de](https://rdmo.aip.de)

Register for our public mailing list, to be always updated: [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/subscribe/rdmo)

Register for the public mailing list of the Content Group, to contribute to the development of catalogues and other material - no programming experience required! [rdmo-contentgruppe@listserv.dfn.de](https://www.listserv.dfn.de/sympa/subscribe/rdmo-contentgruppe)

Register to our group chat, for working together and for troubleshooting: [RDMO-Matrix](https://matrix.to/#/#rdmo:matrix.org).

If you just need support, you can contact us via [e-mail](mailto:rdmo-support@listserv.dfn.de) or on the the dedicated [Matrix channel](https://matrix.to/#/!IbUclBYgtlGwfEyCdJ:matrix.org).


<div style="width: 35%;margin-top: 1%;">
<h2>What is RDMO?</h2>
The Research Data Management Organiser (RDMO) supports research projects in the planning, implementation and administration of all research data management tasks.
</div>

<div style="margin-left:33%;">
<img src="../img/what_is_rdmo.png" style="width: 300px;padding:10px;hspace: 5px; vspace:5px;"/>
</div>

<div style="width: 33%; margin-left:67%;">
<h2>RDMO-Community</h2>
Become part of the community and participate in the technical or content-related further development of RDMO in one of our working groups.<br/>
We look forward to you!
</div>

<h2>Cooperation network</h2>
All RDMO users and institutions that have their own instance can seek advice and support from the RDMO community.<br/>
At the same time, this network of cooperation enables RDMO to take into account requirements and feedback from the specialist sciences, as well as to ensure the exchange and coordination with infrastructure initiatives for data management.

<link rel="stylesheet" href="../css/leaflet.css" />

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
    <img src="../img/icons/marker-icon-blue.png" /> Produktiv-Instanzen
</p>
<p>
    <img src="../img/icons/marker-icon-grey.png" /> Test-Instanzen
</p>

</script>

{% endraw %}

<script src="../js/func.js"></script>

<script src="../js/handlebars.min.js"></script>

<script src="../js/leaflet.js"></script>

<script src="../js/map.js"></script>

<script src="../js/tablesorter.min.js"></script>

<script src="../js/tablesorter.widgets.js"></script>

<link rel="stylesheet" type="text/css" href="../css/table.css">

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
                            <img src="../img/icons/marker-icon-blue.png" />
                        {% else %}
                            <img src="../img/icons/marker-icon-grey.png" />
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

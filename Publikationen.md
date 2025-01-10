---
layout: page
lang: de
key: rdmo-pub
---

# Publikationen über RDMO

RDMO wurde bereits in zahlreichen Publikationen erwähnt. Im Folgenden sind diese nach bestimmten Inhalten gegliedert aufgelistet.
Falls die Liste nicht vollständig sein sollte, schreiben Sie bitte eine <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> an die interne Mailingliste.<br/>


<u>RDMO Development</u>
  <ul class="publication">
{% for publication in site.data.publications.RDMO_development %}
    <li>
        <i>{{ publication.type }}</i>
        <br />
        <strong>{{ publication.title }}</strong>
        <br />
        <i>{{ publication.authors }}</i>
        <br />
        <i>{{ publication.date }}</i>
        <br />
        {% if publication.uri %}
            <a href="{{ publication.uri }}">Details</a>
        {% endif %}
        <br />
        {% if publication.doi %}
            <i>{{ publication.doi }}</i>
        {% endif %}
    </li>
{% endfor %}
  </ul>

<u>RDMO Implementation and Applications</u>
  <ul class="publication">
{% for publication in site.data.publications.RDMO_implementation %}
    <li>
        <i>{{ publication.type }}</i>
        <br />
        <strong>{{ publication.title }}</strong>
        <br />
        <i>{{ publication.authors }}</i>
        <br />
        <i>{{ publication.date }}</i>
        <br />
        {% if publication.uri %}
            <a href="{{ publication.uri }}">Details</a>
        {% endif %}
        <br />
        {% if publication.doi %}
            <i>{{ publication.doi }}</i>
        {% endif %}
    </li>
{% endfor %}
  </ul>
  
<u>DMP Tools</u>
  <ul class="publication">
{% for publication in site.data.publications.DMP_Tools %}
    <li>
        <i>{{ publication.type }}</i>
        <br />
        <strong>{{ publication.title }}</strong>
        <br />
        <i>{{ publication.authors }}</i>
        <br />
        <i>{{ publication.date }}</i>
        <br />
        {% if publication.uri %}
            <a href="{{ publication.uri }}">Details</a>
        {% endif %}
        <br />
        {% if publication.doi %}
            <i>{{ publication.doi }}</i>
        {% endif %}
    </li>
{% endfor %}
  </ul>

<u>DMP and SMP Templates</u>
  <ul class="publication">
{% for publication in site.data.publications.DMP_SMP %}
    <li>
        <i>{{ publication.type }}</i>
        <br />
        <strong>{{ publication.title }}</strong>
        <br />
        <i>{{ publication.authors }}</i>
        <br />
        <i>{{ publication.date }}</i>
        <br />
        {% if publication.uri %}
            <a href="{{ publication.uri }}">Details</a>
        {% endif %}
        <br />
        {% if publication.doi %}
            <i>{{ publication.doi }}</i>
        {% endif %}
    </li>
{% endfor %}
  </ul>
  

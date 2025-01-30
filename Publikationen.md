---
layout: page
lang: de
key: rdmo-pub
---

# Publikationen über RDMO

RDMO wurde bereits in zahlreichen Publikationen erwähnt. Im Folgenden sind diese nach bestimmten Inhalten gegliedert aufgelistet.
Falls die Liste nicht vollständig sein sollte, schreiben Sie bitte eine <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> an die interne Mailingliste.<br/>

<details>
  <summary><h2>RDMO Development</h2>
    <p>Hier sind die Publikationen über die Entwicklung der RDMO-Software selbst und des Contents (Kataloge, Optionen usw.) aufgelistet.</p>
  </summary>
  <ul class="publication">
  {% for publication in site.data.publications.RDMO_development %}
    <li>
        <i>{{ publication.authors }}</i> ({{ publication.date }}).<br />
        <strong>{{ publication.title }}</strong> [{{ publication.type }}].<br />
        {% if publication.doi %}<a href="{{ publication.doi }}">Download</a>
        {% elif publication.uri %}<a href="{{ publication.uri }}">Download</a>
        {% endif %}
    </li>
  {% endfor %}
  </ul>
</details>

<details>
  <summary><h2>RDMO Implementation and Applications</h2>
    <p>Hier sind Publikationen rund um die Entwicklung einzelner Instanzen oder FDM-Systemen aus der Community, sowie über anlassbezogenem Content.</p>
  </summary>
  <ul class="publication">
  {% for publication in site.data.publications.RDMO_implementation %}
    <li>
        <i>{{ publication.authors }}</i> ({{ publication.date }}).<br />
        <strong>{{ publication.title }}</strong> [{{ publication.type }}].<br />
        {% if publication.doi %}<a href="{{ publication.doi }}">Download</a>
        {% elif publication.uri %}<a href="{{ publication.uri }}">Download</a>
        {% endif %}
    </li>
  {% endfor %}
  </ul>
</details>

<details>
  <summary><h2>DMP Tools</h2>
    <p>Hier sind Publikationen über andere DMP-Werkzeuge.</p>
  </summary>
  <ul class="publication">
  {% for publication in site.data.publications.DMP_Tools %}
    <li>
        <i>{{ publication.authors }}</i> ({{ publication.date }}).<br />
        <strong>{{ publication.title }}</strong> [{{ publication.type }}].<br />
        {% if publication.doi %}<a href="{{ publication.doi }}">Download</a>
        {% elif publication.uri %}<a href="{{ publication.uri }}">Download</a>
        {% endif %}
    </li>
  {% endfor %}
  </ul>
</details>

<details>
  <summary><h2>DMP and SMP Templates</h2>
    <p>Hier sind Publikationen über DMPs und SMPs und deren Vorlagen, losgelost von den DMP-Werkzeugen.</p>
  </summary>
  <ul class="publication">
  {% for publication in site.data.publications.DMP_SMP %}
    <li>
        <i>{{ publication.authors }}</i> ({{ publication.date }}).<br />
        <strong>{{ publication.title }}</strong> [{{ publication.type }}].<br />
        {% if publication.doi %}<a href="{{ publication.doi }}">Download</a>
        {% elif publication.uri %}<a href="{{ publication.uri }}">Download</a>
        {% endif %}
    </li>
  {% endfor %}
  </ul>
</details>

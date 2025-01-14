---
layout: page
lang: de
key: rdmo-pub
---

# Publications about RDMO

RDMO has already been mentioned in numerous publications. These are listed below, broken down according to specific content.
If the list is not complete, please write an <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> to the internal mailing list.<br/>

<details>
  <summary><h2>RDMO Development</h2>
    <p>Here are publications about the development of the RDMO software and content (catalogs, options, etc.).</p>
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
    <p>Here are publications about the development of single instances or RDM-ecosystems in the community, as well as application-specific content.</p>
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
    <p>Here are publications about other DMP tools.</p>
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
    <p>Here are publications about DMPs and SMPs and their templates, independently from DMP tools.</p>
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
  

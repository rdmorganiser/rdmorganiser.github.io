---
layout: page
lang: de
key: rdmo-pub
---

# Publications about RDMO

RDMO has already been mentioned in numerous publications. These are listed below, broken down according to specific content. If the list is not complete, please write an <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> to the internal mailing list.<br/>
RDMO publikations can also be found in our <a href="https://zenodo.org/communities/rdmo">Zenodo community "Research Data Management Organiser (RDMO)"</a>.<br/>

  <h2>RDMO Development</h2>
  <p>Here are publications about the development of the RDMO software and content (catalogs, options, etc.).</p>
  <ul class="publication">
  {% for publication in site.data.publications.RDMO_development %}
  {% include publications.html %}
  {% endfor %}
  </ul>

  <h2>RDMO Implementation and Applications</h2>
  <p>Here are publications about the development of single instances or RDM-ecosystems in the community, as well as application-specific content.</p>
  <ul class="publication">
  {% for publication in site.data.publications.RDMO_implementation %}
  {% include publications.html %}
  {% endfor %}
  </ul>

  <h2>DMP Tools</h2>
  <p>Here are publications about other DMP tools.</p>
  <ul class="publication">
  {% for publication in site.data.publications.DMP_Tools %}
  {% include publications.html %}
  {% endfor %}
  </ul>

  <h2>DMP and SMP Templates</h2>
  <p>Here are publications about DMPs and SMPs and their templates, independently from DMP tools.</p>
  <ul class="publication">
  {% for publication in site.data.publications.DMP_SMP %}
  {% include publications.html %}
  {% endfor %}
  </ul>

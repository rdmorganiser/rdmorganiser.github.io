---
layout: page
lang: de
key: rdmo-pub
---

# Publications about RDMO

RDMO has already been mentioned in numerous publications. These are listed below, broken down according to specific content.
If the list is not complete, please write an <a href="mailto:rdmo-contact@listserv.dfn.de">Mail</a> to the internal mailing list.<br/>


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
  
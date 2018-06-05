---
layout: page

key: talks
lang: de
---

Talks
=====

RDMO has been presented at several occasions: 

<ul class="talks">
{% for talk in site.data.talks %}
    <li>
        <a href="{{ talk.url }}">{{ talk.event }}</a>, {{ talk.date|date: "%d. %m. %Y" }}, {{ talk.place }}
        <br />
        <strong>{{ talk.title }}</strong>
        <br />
        <i>{{ talk.authors }}</i>
        <br />
        {% if talk.abstract %}
        <a href="{{ talk.abstract }}">Abstract</a>
        {% endif %}
        {% if talk.slides %}
        <a href="{{ talk.slides }}">Folien</a>
        {% endif %}
        {% if talk.recording %}
        <a href="{{ talk.recording }}">Aufzeichnung</a>
        {% endif %}
    </li>
{% endfor %}
</ul>

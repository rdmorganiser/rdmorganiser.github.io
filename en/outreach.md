---
layout: page

key: outreach
lang: en
---

Events
=======

Additionally to workshops and activities organised by the project there are various activities, presentations and interactions on national and international level.
As of now, we presented RDMO at numerous events:

<ul class="talks">
{% for talk in site.data.talks %}
    <li>
        <a href="{{ talk.url }}">{{ talk.event }}</a>, {{ talk.date|date: "%d/%m/%Y" }}, {{ talk.place }}
        <br />
        <strong>{{ talk.title }}</strong>
        <br />
        <i>{{ talk.authors }}</i>
        <br />
        {% if talk.abstract %}
        <a href="{{ talk.abstract }}">Abstract</a>
        {% endif %}
        {% if talk.slides %}
        <a href="{{ talk.slides }}">Slides</a>
        {% endif %}
        {% if talk.recording %}
        <a href="{{ talk.recording }}">Recording</a>
        {% endif %}
    </li>
{% endfor %}
</ul>

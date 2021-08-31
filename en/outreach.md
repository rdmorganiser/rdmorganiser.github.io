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
        {% if talk.url %}
            <a href="{{ talk.url }}">{{ talk.event }}</a>, {{ talk.date|date: "%d. %m. %Y" }}, {{ talk.place }}
        {% else %}
            {{ talk.event }}, {{ talk.date|date: "%d. %m. %Y" }}, {{ talk.place }}
        {% endif %}
        <br />
        <strong>{{ talk.title }}</strong>
        <br />
        <i>{{ talk.authors }}</i>
        <br />
        {% if talk.abstract %}
            <a href="{{ talk.abstract }}">Abstract</a>
        {% endif %}
        {% if talk.proceeding %}
            <a href="{{ talk.proceeding }}">Proceeding</a>
        {% endif %}
        {% if talk.slides %}
            <a href="{{ talk.slides }}">Folien</a>
        {% endif %}
        {% if talk.recording %}
            <a href="{{ talk.recording }}">Aufzeichnung</a>
        {% endif %}
        {% if talk.poster %}
            <a href="{{ talk.poster }}">Poster</a>
        {% endif %}
    </li>
{% endfor %}
</ul>

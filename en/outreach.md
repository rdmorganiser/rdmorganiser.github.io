---
layout: page

key: outreach
lang: en
---

Events
========

Additionally to workshops and activities organised by the project there are various activities, presentations and interactions on national and international level.

At [Potsdam University of Applied Sciences (FHP)](http://www.fh-potsdam.de/), the project collaborated with a one semester course for master students of Information Science. In winter semester 2015/2016 students from a project course did coursework on various aspects associated with the project and wrote the following term papers:

* **Datenmanagementpläne. Eine Bestandsübersicht. / Data management plans. An overview.**
*Marcus Heinrich, Martin Heger*
[Link to paper]({{ site.baseurl }}docs/Heinrich_Heger_DMP_eine_Bestandsuebersicht.pdf)

* **Publikation von Forschungsdaten. / Publication of research data.**
*Christoph Steinhof*
[Link to paper]({{ site.baseurl }}docs/Projektarbeit_Steinhof_Publikation_von_Forschungsdaten.pdf)

* **Sozialwissenschaftliche Fragestellungen zum Forschungsdatenmanagement am Beispiel von WissGrid. / RDM specifics for Social Sciences, using WissGrid project material.**
*Michaela Meyer*
[Link to paper]({{ site.baseurl }}docs/Projektarbeit_Meyer_Sozialwissenschaftliche_Fragestellungen_zum_FDM.pdf)

An extensive collection of literature on the topic [Research Data Management](https://www.zotero.org/groups/forschungsdaten/items) on Zotero was created.

A master thesis on “Data modeling for Research Data Management Plans” was written by Martin Heger in cooperation with our project.
[Link to master thesis]({{ site.baseurl }}docs/Heger_MA.pdf)

{% comment %}
In the upcoming weeks, we will present RDMO at the following events:
{% endcomment %}

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

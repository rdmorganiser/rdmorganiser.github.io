---
layout: page

key: outreach
lang: de
---

Veranstaltungen
===============

Neben den vom Projekt durchgeführten Veranstaltungen zur Evaluierung des Werkzeugs werden auf nationaler Ebene die Vernetzung und der fachliche Austausch über Arbeitsgruppen bzw. -kreise einschlägiger Initiativen vorangetrieben.

An der [Fachhochschule Potsdam (FHP)](http://www.fh-potsdam.de/) wird das Projekt zudem in einer einsemestrigen Lehrveranstaltung im Rahmen des Masterstudiengangs Informationswissenschaften thematisiert. So wurde im Wintersemester 2015/16 ein Projektkurs durchgeführt, in dem sich Studierende, einzeln oder in Gruppen, jeweils mit ausgewählten Aspekten der Thematik beschäftigten und eine Projektarbeit verfassten. In diesem Zusammenhang sind folgende Semesterarbeiten entstanden:

* **Datenmanagementpläne. Eine Bestandsübersicht.**  
*Marcus Heinrich, Martin Heger*  
[Link zur Hausarbeit]({{ site.baseurl }}docs/Heinrich_Heger_DMP_eine_Bestandsuebersicht.pdf)

* **Publikation von Forschungsdaten.**  
*Christoph Steinhof*  
[Link zur Hausarbeit]({{ site.baseurl }}docs/Projektarbeit_Steinhof_Publikation_von_Forschungsdaten.pdf)

* **Sozialwissenschaftliche Fragestellungen zum Forschungsdatenmanagement am Beispiel von WissGrid.**  
*Michaela Meyer*  
[Link zur Hausarbeit]({{ site.baseurl }}docs/Projektarbeit_Meyer_Sozialwissenschaftliche_Fragestellungen_zum_FDM.pdf)

Es wurde zudem eine umfangreiche Sammlung von [Schriften zum Thema Forschungsdatenmanagement](https://www.zotero.org/groups/forschungsdaten/items) auf Zotero zusammengestellt.

Im Projektkontext hat Martin Heger seine Masterarbeit mit dem Titel "Datenmodellierung für Forschungsdaten-managementpläne" verfasst. [Link zur Masterarbeit]({{ site.baseurl }}docs/Heger_MA.pdf)

{% comment %}
In den nächsten Wochen wird RDMO bei den folgenden Veranstaltungen vorgestellt:
{% endcomment %}

RDMO wurde bereits bei zahlreichen Anlässen vorgestellt und diskutiert:

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

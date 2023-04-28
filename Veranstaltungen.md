---
layout: page

key: old_news
lang: de
---

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  height: 600px;
  overflow: auto;
}
</style>

# Veranstaltungen, Vorträge und Bekanntmachungen

Damit wir auf dem neuesten Stand bleiben können, schicken Sie uns bitte Informationen zu neuen Veranstaltungen und Publikationen an <a href="mailto:mail@jochenklar.de">Jochen Klar</a> oder <a href="mailto:schoenau@ub.rwth-aachen.de">Sabine Schönau</a> oder machen Sie einen Pull Request.

## Bisherige Workshops und Treffen

{% include events.html %}

## Vorträge

RDMO wurde bereits bei zahlreichen Anlässen vorgestellt und diskutiert:

<details>
  <summary style="list-style-image: &#9658;"><u>Siehe Liste der Vorträge:</u></summary>
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
</details>

## Publikationen

Neuroth, H., Engelhardt, C., Klar, J., Ludwig, J., & Enke, H. (2018). [Aktives Forschungsdatenmanagement](https://www.degruyter.com/view/journals/abitech/38/1/article-p55.xml), ABI Technik, 38(1), 55-64. doi: [https://doi.org/10.1515/abitech-2018-0008](https://doi.org/10.1515/abitech-2018-0008)

Kröger, J., & Wedlich-Zachodin, K. (2020). [Das Beteiligungsmodell von forschungsdaten.Info: Ein Kleines ABC Der Nachhaltigkeit“](/docs/das_beteiligungsmodel.pdf), Bausteine Forschungsdatenmanagement, Nr. 1 (April), 86-95. doi: [https://doi.org/10.17192/bfdm.2020.1.8160](https://doi.org/10.17192/bfdm.2020.1.8160)


## Lehre

An der [Fachhochschule Potsdam (FHP)](http://www.fh-potsdam.de/) wird das Projekt  in einer einsemestrigen Lehrveranstaltung im Rahmen des Masterstudiengangs Informationswissenschaften thematisiert. So wurde im Wintersemester 2015/16 ein Projektkurs durchgeführt, in dem sich Studierende, einzeln oder in Gruppen, jeweils mit ausgewählten Aspekten der Thematik beschäftigten und eine Projektarbeit verfassten. In diesem Zusammenhang sind folgende Semesterarbeiten entstanden:

* **Datenmanagementpläne. Eine Bestandsübersicht.**
*Marcus Heinrich, Martin Heger*
[Link zur Hausarbeit]({{ site.baseurl }}/docs/Heinrich_Heger_DMP_eine_Bestandsuebersicht.pdf)

* **Publikation von Forschungsdaten.**
*Christoph Steinhof*
[Link zur Hausarbeit]({{ site.baseurl }}/docs/Projektarbeit_Steinhof_Publikation_von_Forschungsdaten.pdf)

* **Sozialwissenschaftliche Fragestellungen zum Forschungsdatenmanagement am Beispiel von WissGrid.**
*Michaela Meyer*
[Link zur Hausarbeit]({{ site.baseurl }}/docs/Projektarbeit_Meyer_Sozialwissenschaftliche_Fragestellungen_zum_FDM.pdf)

* **Datenmodellierung für Forschungsdatenmanagementpläne**
*Martin Heger*
[Link zur Masterarbeit]({{ site.baseurl }}/docs/Heger_MA.pdf)
(Anmerkung: Durch die Weiterentwicklung von RDMO entsprechen einige der hier beschriebenen Informationen zum [Datenmodells](https://rdmo.readthedocs.io/en/latest/management/domain.html#attributes-entities-and-the-data-model-refactoring) nicht mehr dem aktuellen Stand.)

Es wurde zudem eine umfangreiche Sammlung von [Schriften zum Thema Forschungsdatenmanagement](https://www.zotero.org/groups/forschungsdaten/items) auf Zotero zusammengestellt.


<script>
function openYear(evt, yearName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(yearName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
</script>

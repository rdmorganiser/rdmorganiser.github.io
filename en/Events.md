---
layout: page

key: old_news
lang: en
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

# Events, lectures and announcements

So that we can stay up to date, please send us information about new events and publications to <a href="mailto:mail@jochenklar.de">Jochen Klar</a> or <a href="mailto:schoenau@ ub.rwth-aachen.de">Sabine Schönau</a> or make a pull request.

## Previous workshops and meetings:

{% include events.html %}


## Talks

RDMO has been presented at several occasions:<br/>
<details>
  <summary style="list-style-image: &#9658;"><u>See list of talks:</u></summary>
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


## Publications

Neuroth, H., Engelhardt, C., Klar, J., Ludwig, J., & Enke, H. (2018). [Aktives Forschungsdatenmanagement](https://www.degruyter.com/view/journals/abitech/38/1/article-p55.xml), ABI Technik, 38(1), 55-64. doi: [https://doi.org/10.1515/abitech-2018-0008](https://doi.org/10.1515/abitech-2018-0008)

Kröger, J., & Wedlich-Zachodin, K. (2020). [Das Beteiligungsmodell von forschungsdaten.Info: Ein Kleines ABC Der Nachhaltigkeit“](/docs/das_beteiligungsmodel.pdf), Bausteine Forschungsdatenmanagement, Nr. 1 (April), 86-95. doi: [https://doi.org/10.17192/bfdm.2020.1.8160](https://doi.org/10.17192/bfdm.2020.1.8160)

At [Potsdam University of Applied Sciences (FHP)](http://www.fh-potsdam.de/), the project collaborated with a one semester course for master students of Information Science. In winter semester 2015/2016 students from a project course did coursework on various aspects associated with the project and wrote the following term papers:

* **Datenmanagementpläne. Eine Bestandsübersicht. / Data management plans. An overview.**
*Marcus Heinrich, Martin Heger*
[Link to paper]({{ site.baseurl }}/docs/Heinrich_Heger_DMP_eine_Bestandsuebersicht.pdf)

* **Publikation von Forschungsdaten. / Publication of research data.**
*Christoph Steinhof*
[Link to paper]({{ site.baseurl }}/docs/Projektarbeit_Steinhof_Publikation_von_Forschungsdaten.pdf)

* **Sozialwissenschaftliche Fragestellungen zum Forschungsdatenmanagement am Beispiel von WissGrid. / RDM specifics for Social Sciences, using WissGrid project material.**
*Michaela Meyer*
[Link to paper]({{ site.baseurl }}/docs/Projektarbeit_Meyer_Sozialwissenschaftliche_Fragestellungen_zum_FDM.pdf)

An extensive collection of literature on the topic [Research Data Management](https://www.zotero.org/groups/forschungsdaten/items) on Zotero was created.

A master thesis on “Data modeling for Research Data Management Plans” was written by Martin Heger in cooperation with our project.
[Link to master thesis]({{ site.baseurl }}/docs/Heger_MA.pdf)
(Note: Due to further development of RDMO, the description of the [data model](https://rdmo.readthedocs.io/en/latest/management/domain.html#attributes-entities-and-the-data-model-refactoring) given in this document does no longer represent the current state.)


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

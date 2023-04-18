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

<button class="tablinks">2023</button>
{% for announcement in site.data.2023.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ announcement.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ announcement.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}

<br/>

<div class="tab">
  <button class="tablinks" onclick="openYear(event, '2022')" id="defaultOpen">2022</button>
  <button class="tablinks" onclick="openYear(event, '2021')">2021</button>
  <button class="tablinks" onclick="openYear(event, '2020')">2020</button>
  <button class="tablinks" onclick="openYear(event, '2019')">2019</button>
  <button class="tablinks" onclick="openYear(event, '2018')">2018</button>
  <button class="tablinks" onclick="openYear(event, '2017')">2017</button>
  <button class="tablinks" onclick="openYear(event, '2016')">2016</button>
</div>

<div id="2022" class="tabcontent">

{% for x in site.data.2022.current %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

<div id="2021" class="tabcontent">

{% for x in site.data.2021.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

<div id="2020" class="tabcontent">

{% for x in site.data.2020.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

<div id="2019" class="tabcontent">

{% for x in site.data.2019.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

<div id="2018" class="tabcontent">

{% for x in site.data.2018.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

<div id="2017" class="tabcontent">

{% for x in site.data.2017.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>
 
<div id="2016" class="tabcontent">

{% for x in site.data.2016.former %}
<table style="width: 100%;">
	<tr>
		<th style="width: 20%;"/>
		<td style="width: 80%; padding-left:10px;"/>
	</tr>
	<tr style="border-bottom: 1pt solid darkgrey;">
		<th style="width: 20%;">{{ x.date | markdownify }}</th>
		<td style="width: 90%; padding-left:10px;">{{ x.event.en | markdownify }}</td>
	</tr>
</table>
{% endfor %}
</div>

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

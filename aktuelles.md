---
layout: page

key: news
lang: de
---

# Aktuelles

Auf dieser Seite fassen wir komprimiert unsere aktuellen Aktivitäten zusammen. 
Um immer auf dem neuesten Stand zu bleiben, abonnieren Sie unsere Mailingliste [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/info/rdmo), folgen uns auf [Twitter](https://twitter.com/rdmorganiser), oder diskutieren mit uns auf [Slack](https://rdmo.slack.com). 
(Schreiben Sie eine E-Mail an uns: <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a> und wir laden Sie zu Slack ein.)<br/>

{% for announcement in site.data.2023.current %}
## Ankündigung:

<table style="width: 100%; border: 3px dotted red;">
  <tr>
    <th style="width: 20%; padding: 10px;"></th>
    <td style="width: 80%; padding: 10px;"></td>
  </tr>
  <tr>
    <th style="width: 20%; padding: 10px;">{{ announcement.date | markdownify }}</th>
    <td style="width: 80%; padding:10px;">{{ announcement.event.de | markdownify }}
    </td>
  </tr>
</table>
{% endfor %}

## RDMO Arbeitsgemeinschaft

Die [Arbeitsgemeinschaft RDMO]({{ siteurl }}/Community) hat sich mit der Veranstaltung am 07.10.2020 konstituiert. Sie ruft die Anwender von RDMO auf, sich auf der Grundlage des [Memorandum of Understanding (MoU)]({{ siteurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) an der Weiterarbeit zu beteiligen.
Für die Verbindungsinformation zu den Workshops und regulären Terminen bitte die RDMO-Arbeitsgemeinschaft oder die jeweiligen Verantwortlichen kontaktieren. Interessierte sind herzlich willkommen.


## Reguläre RDMO-Videokonferenz-Termine
(Stand: April 2023)


<table style="width: 100%; border:1px solid black;">
	<tr>
		<th style="width: 20%;"/>
		<th style="width: 45%; padding-left: 5px;">Fokus</th>
		<th style="width: 20%; padding-left: 5px;">Termin</th>
		<th style="width: 25%; padding-left: 5px;">Ansprechperson</th>
	</tr>
	{% for group in site.data.groups.current %}
	<tr>
		<td style="font-weight: bold; padding-left:5px;">{{ group.name_de | markdownify }}</td>
		<td>
			<ul>
				<li>{{ group.content_de1 | markdownify }}</li>
				<li>{{ group.content_de2 | markdownify }}</li>
			</ul>
		</td>
		<td>{{ group.date_de | markdownify }}</td>
		<td><a href="mailto:{{ leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
	{% for group in site.data.groups.former %}
	<tr style="border:1px solid grey; border-bottom-right-radius: 15px; color:grey;">
		<td style="font-weight: bold;">{{ group.name_de | markdownify }}</td>
		<td>
			<ul>
				<li>{{ group.content_de1 | markdownify }}</li>
				<li>{{ group.content_de2 | markdownify }}</li>
			</ul>
		</td>
		<td>{{ group.date_de | markdownify }}</td>
		<td><a href="mailto:{{ leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
</table>





<br/>


## Ad-Hoc-Gruppen

Für spezielle Aufgaben und Fragestellungen können aus dem Kreis der Mitglieder jederzeit weitere Arbeitsgruppen gebildet werden, die mit der StG abgestimmt werden.
Über die Weiterführung der Ad-Hoc-Gruppen entscheidet die Mitgliederversammlung.

## Mitgliederversammlung

Die Mitgliederversammlung der RDMO-Arbeitsgemeinschaft stellt die Gesamtheit aller Mitglieder dar. Anwender und weitere Interessenten können an der Mitgliederversammlung teilnehmen. Die Mitglieder wählen die Vertreter\*innen in der SG.
Die Mitgliederversammlung tritt je nach Bedarf mindestens aber einmal pro Jahr zusammen.




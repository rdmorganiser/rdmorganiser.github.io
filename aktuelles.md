---
layout: page

key: news
lang: de
---

# Aktuelles

Auf dieser Seite fassen wir komprimiert unsere aktuellen Aktivitäten zusammen. 
Um immer auf dem neuesten Stand zu bleiben, abonnieren Sie unsere Mailingliste [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/info/rdmo), folgen uns auf [Twitter](https://twitter.com/rdmorganiser), oder diskutieren mit uns auf [Slack](https://rdmo.slack.com). 
(Schreiben Sie eine E-Mail an uns: <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a> und wir laden Sie zu Slack ein.)<br/>

{% for announcement in site.data.announcements %}
## Ankündigungen:

<table style="width: 100%;">
  <tr>
    <th style="width: 10%;"></th>
    <td style="width: 90%; padding-left:10px;"></td>
  </tr>
  <tr style="border-bottom: 1pt solid darkgrey;">
    <th style="width: 10%;">{{ announcement.event.date | markdownify }}</th>
    <td style="width: 90%; padding-left:10px;">{{ announcement.event.de | markdownify }}
    </td>
  </tr>
</table>
{% endfor %}

## RDMO Arbeitsgemeinschaft

Die [Arbeitsgemeinschaft RDMO]({{ siteurl }}/rdmo_arge) hat sich mit der Veranstaltung am 07.10.2020 konstituiert. Sie ruft die Anwender von RDMO auf, sich auf der Grundlage des [Memorandum of Understanding (MoU)]({{ siteurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) an der Weiterarbeit zu beteiligen.
Für die Verbindungsinformation zu den Workshops und regulären Terminen bitte die RDMO-Arbeitsgemeinschaft oder die jeweiligen Verantwortlichen kontaktieren. Interessierte sind herzlich willkommen.


## Reguläre RDMO-Videokonferenz-Termine
(Stand: April 2023)

<table style="width: 100%; border:1px solid black;">
	<tr>
		<th style="width: 5%;"/>
		<th style="width: 15%;"/>
		<th style="width: 45%; padding-left: 25px;">Fokus</th>
		<th style="width: 20%;">Termin</th>
		<th style="width: 25%;">Ansprechperson</th>
	</tr>
	<tr>
		<td style="font-weight: bold; padding-left:5px;" colspan="2">Steuerungsgruppe</td>
		<td>
			<ul>
				<li>Austausch der Steuerungsmitglieder</li>
				<li>nicht öffentlich, keine Teilnahme möglich</li>
			</ul>
		</td>
		<td>am 4. Dienstag im Monat (13:00-14:30)</td>
		<td><a href="mailto:gerald.jagusch@tu-darmstadt.de">Gerald Jagusch</a></td>
	</tr>
	<tr>
		<td style="font-weight: bold; padding-left:5px;" colspan="2">Allgemeiner JourFixe</td>
		<td>
			<ul>
				<li>Sprechstunde zur Klärung allgemeiner Fragen</li>
				<li>offen, bei Fragen einfach hinzukommen</li>
			</ul>
		</td>
		<td>am 1. Donnerstag im Monat (11:00-12:00 Uhr)</td>
		<td><a href="mailto:mail@jochenklar.de">Jochen Klar</a></td>
	</tr>
	<tr>
		<td style="font-weight: bold; padding-left:5px;" colspan="2">Softwaregruppe</td>
		<td>
			<ul>
				<li>Austausch über vergangene und zukünftige technische Entwicklungen</li>
				<li>offen, Teilnahme jederzeit möglich</li>
			</ul>
		</td>
		<td>am 3. Donnerstag im Monat (11:00-12:00 Uhr)</td>
		<td><a href="mailto:mail@jochenklar.de">Jochen Klar</a></td>
	</tr>
	<tr>
		<td style="font-weight: bold; padding-left:5px;" colspan="2">Allgemeine Contentgruppe</td>
		<td>
			<ul>
				<li>Austausch und Anstimmung über inhaltliche Entwicklungsprozesse</li>
				<li>offen, Teilnahme jederzeit möglich</li>
			</ul>
		</td>
		<td>z.Zt. unregelmäßig</td>
		<td><a href="mailto:kerstin.wedlich@kit.edu">Kerstin Wedlich-Zachodin</a></td>
	</tr>
	<tr style="border-bottom-right-radius: 15px;">
		<td/>
		<td style="font-weight: bold;">UAG Redaktionsprozesse</td>
		<td>
			<ul>
				<li>Umsetzung beschlossener Änderungen inhaltlicher Art</li>
				<li>offen, Teilnahme jederzeit möglich</li>
			</ul>
		</td>
		<td>am 4. Donnerstag im Monat (11:00-12:00 Uhr)</td>
		<td><a href="mailto:giacomo.lanza@ptb.de">Giacomo Lanza</a></td>
	</tr>
	<tr style="border-bottom-right-radius: 15px;">
		<td/>
		<td style="font-weight: bold;">UAG Website</td>
		<td>
			<ul>
				<li>Aktualisierung der offiziellen Website von RDMO</li>
				<li>offen, Teilnahme jederzeit möglich</li>
			</ul>
		</td>
		<td>am 2. Montag im Monat (10:00-11:00 Uhr)</td>
		<td><a href="mailto:schoenau@ub.rwth-aachen.de">Sabine Schönau</a></td>
	</tr>
	<tr style="border-bottom-right-radius: 15px;">
		<td/>
		<td style="font-weight: bold;">UAG DFG Checkliste</td>
		<td>
			<ul>
				<li>Überführung der DFG Checkliste in einen generischen RDMO Katalog samt View.</li>
				<li>offen, Teilnahme jederzeit möglich</li>
			</ul>
		</td>
		<td>am 2. Dienstag (15:00-16:00 Uhr)</td>
		<td><a href="mailto:giacomo.lanza@ptb.de">Giacomo Lanza</a></td>
	</tr>
	<tr style="border:1px solid grey; border-bottom-right-radius: 15px; color:grey;">
		<td/>
		<td style="font-weight: bold;">UAG Textanleitungen</td>
		<td>
			<ul>
				<li>Erstellung förderspezifischer (formeller) und fachspezifischen (alltauglicher) DMP-Vorgaben und repräsentativer Use Cases</li>
				<li>abgeschlossen, keine Teilnahme mehr möglich</li>
			</ul>
		</td>
		<td>am 1. Montag im Monat (11:30-12:30)</td>
		<td><a href="mailto:christin.henzen@tu-dresden.de">Christin Henzen</a></td>
	</tr>
	<tr style="border:1px solid grey; border-bottom-right-radius: 15px; color:grey;">
		<td/>
		<td style="font-weight: bold;">UAG Werbung und Außenkooperationen</td>
		<td>
			<ul>
				<li>Zusammenführung der Inhalte und Aktivitäten aus nationalen und internationalen Gruppen</li>
				<li>abgeschlossen, keine Teilnahme mehr möglich</li>
			</ul>
		</td>
		<td>nicht festgelegt; alle 2 Monate</td>
		<td><a href="mailto:anders@dkrz.de">Ivonne Anders</a></td>
	</tr>
</table>

<br/>


## Ad-Hoc-Gruppen

Für spezielle Aufgaben und Fragestellungen können aus dem Kreis der Mitglieder jederzeit weitere Arbeitsgruppen gebildet werden, die mit der StG abgestimmt werden.
Über die Weiterführung der Ad-Hoc-Gruppen entscheidet die Mitgliederversammlung.

## Mitgliederversammlung

Die Mitgliederversammlung der RDMO-Arbeitsgemeinschaft stellt die Gesamtheit aller Mitglieder dar. Anwender und weitere Interessenten können an der Mitgliederversammlung teilnehmen. Die Mitglieder wählen die Vertreter\*innen in der SG.
Die Mitgliederversammlung tritt je nach Bedarf mindestens aber einmal pro Jahr zusammen.




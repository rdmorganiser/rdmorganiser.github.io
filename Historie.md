---
layout: page

key: rdmo-begin
lang: de
---

# Historie

## Erste Projektphase

*In der ersten Projektphase wurde von November 2015 - April 2017 die erste Version von RDMO entwickelt. Hier dokumentieren wir die Beschreibung des Projektes und der Arbeitspakete. Bitte beachten Sie, dass die Informationen auf dieser Seite daher nicht mehr aktuell sind.*

### Projektbeschreibung

**Ziel des Projekts ist es, ein Werkzeug zur Verfügung zu stellen, das die strukturierte Planung, Umsetzung und Verwaltung des Forschungsdatenmanagements unterstützt und zusätzlich die textuelle Ausgabe eines Datenmanagementplans (DMP) ermöglicht.**

DMP legen dar, wie, mit welchen Mitteln und in welchem Umfang die anfallenden Forschungsdaten während eines Projekts und für die Folgezeit gesichert und zugreifbar gemacht werden. Um Wissenschaftlerinnen und Wissenschaftlern ein Hilfsmittel zur Erstellung dieser DMP an die Hand zu geben, wurden in der Vergangenheit durch mehrere Institutionen spezielle Online-Tools entwickelt. Vorreiter sind hier das [Digital Curation Centre (DCC)](http://www.dcc.ac.uk) in Großbritannien mit [DMPonline](https://dmponline.dcc.ac.uk), die [California Digital Library (CDL)](http://www.cdlib.org) mit dem [DMPTool](https://dmptool.org/) und in Deutschland die [Universität Bielefeld](https://www.uni-bielefeld.de/ub/digital/forschungsdaten).

Hauptzweck der genannten Instrumente ist es, Forschende bei der Erstellung von DMP gemäß den Vorgaben des jeweiligen Förderers zu unterstützen. Während diese Werkzeuge sinnvolle Hilfsmittel im Rahmen der Antragstellung sind, beschränken sie sich jedoch im Wesentlichen auf die für diesen Zweck relevanten Fragen und schöpfen mithin nicht das volle Potential von DMP aus. Neben der Dokumentation des Forschungsdaten­manage­ments können DMP auch dazu dienen, die Planung des Forschungsdatenmanagements schon im Vorfeld zu optimieren, die Umsetzung im Projektverlauf – gewissermaßen als Leitfaden – zu unterstützen und dadurch die Effizienz und Qualität von wissenschaftlicher Arbeit zu erhöhen. Die Wissenschaftlerin oder der Wissenschaftler hätte in diesem Fall voraussichtlich eine höhere Moti­vation, zum eigenen Nutzen einen DMP zu erstellen.

Unser Projekt wird auf externen und eigenen Vorarbeiten (insbesondere dem [WissGrid-Leitfaden zum Forschungsdatenmanagement]({{ site.baseurl }}/docs/Leitfaden_Data-Management-WissGrid.pdf)) aufbauend ein Werkzeug zur Verfügung stellen, das die strukturierte Planung, Umsetzung und Verwaltung des For­schungs­datenmanagements unterstützt, statt nur einen Text für Förderanträge zu generieren. Das Werkzeug kann auch als begleitendes Instrument für den Projektverlauf genutzt werden.

Zielgruppe werden alle im Forschungsdatenmanagement Involvierten und nicht nur die For­schenden sein. Die Anwendung wird inhaltlich und technisch hinreichend anpassbar sein, um sowohl dis­zi­plinären als auch institutionellen Unterschieden gerecht zu werden. Besonderes Augenmerk liegt auf der lokalen Installation und Einbettung in bestehende IT-Administrationsprozesse. Das Online-Tool wird mehrsprachig (in der ersten Form deutsch und englisch) angeboten werden.

### Konzeption

In diesem Arbeitspaket werden die Inhalte, die logische Struktur und der Bedienungsablauf für das geplante Werkzeug für Forschungsdatenmanagemenpläne erarbeitet. Dies umfasst als Hauptaufgaben die inhaltliche Aktualisierung der Vorarbeiten, die Erweiterung um verschiedene Zielgruppenausrichtungen, die Modularisierung, die Verknüpfung mit Folgeaufgaben und die Strukturierung des Ablaufs sowie der logischen Abhängigkeiten der Leitfragen.

Die erste Überarbeitung wird primär auf dem Know-How aus eigenen und weiteren Vorarbeiten, relevanten nationalen und internationalen Veröffentlichung sowie auf eigenen Analysen und Erfahrungswerten beruhen. Einige Fragen können vermutlich nicht durch dieses Vorgehen entschieden werden oder benötigen je nach Situation und Zielgruppe unterschiedliche Konfigurationen. Diese Fragen werden als Teil der Zielgruppen-Evaluationen und in Einzelgesprächen mit Zielgruppenvertreterinnen und -vertretern thematisiert. Die Ergebnisse werden Grundlage der Überarbeitung. Fragen, Entscheidungsbaum und abschließende Informationen werden als sog. Wireframes, d.h. konzeptuelle Ablaufdiagramme, dem Arbeitspaket Software zur Implementierung übergeben.

### Software

Die für den Projekterfolg nötigen Software-Entwicklungsarbeiten werden in diesem Arbeitspaket durchgeführt. Hierzu zählen die Konzeption der Softwarearchitektur und des zugehörigen Daten­bankmodells sowie die Entwicklung der Applikation. Hierbei wird sowohl auf eigene Vorarbeiten im Be­reich der Web-Entwicklung, als auch die oben erwähnten, quell-offenen Tools [DMPonline](https://dmponline.dcc.ac.uk) und [DMPTool](https://dmptool.org/) aufgebaut.

Um einen parallelen Arbeitsablauf zu ermöglichen und eine Trennung von Inhalt und Applikation zu erreichen, wird der Kern der Software zunächst unabhängig von den im Arbeitspaket Konzeption erarbeiteten Fragen und Antworten entwickelt. In den ersten Monaten der Projektlaufzeit konzentrieren sich die Arbeiten auf die Entwicklung der Softwarearchitektur und eines passenden Datenbankmodells.

Zusätzlich werden die Schnittstellen der bestehenden Werkzeuge und weiterer relevanter Initiativen daraufhin untersucht, ob sie in RDMO integriert wer­den können. Aufbauend darauf wird ein Prototyp entwickelt, welcher mit einem vorläufigen Fragenset die prinzipielle Funktionalität der Applikation demonstriert.

Mit dem Abschluss der oben beschriebenen konzeptionellen Arbeiten werden die erarbeiteten Fragenkomplexe in die Anwendung überführt und eine erste nutzbare Version erstellt. Diese Version wird zunächst an zentraler Stelle installiert und den Nutzenden für die im Arbeitspaket Community und Nutzertests beschriebene Evaluation zugänglich gemacht. In enger Zusammenarbeit mit diesem Arbeitspaket werden dann die in den Tests gefundenen Fehler beseitigt, Verbesserungen eingefügt und so die Applikation in einem iterativen Prozess nach und nach finalisiert.

Der Quellcode der Anwendung wird schon in der Entwicklungsphase unter einer offenen Lizenz veröffentlicht und wird auf [github.com/rdmorganiser](https://github.com/rdmorganiser) abrufbar sein.

### Community und Nutzertests

In diesem Arbeitspaket wird der Prototyp durch Angehörige der verschiedenen Zielgruppen (jeweils Forschende und Infrastrukturvertreterinnen und -vertreter in den Kontexten Arbeitsgruppe, Projekt sowie Institut) getestet und evaluiert. Auf Grundlage dieses Nutzer­feedbacks werden in einem iterativen Prozess Fehler behoben und Verbesserungen eingearbeitet, um zu gewährleisten, dass die finale Version der Anwendung den Anforderungen und Bedürf­nissen der Zielgruppen entspricht. Die Tests finden in zwei Runden statt: die erste nach etwa einem Drittel, die zweite etwa nach dem zweiten Drittel der Projektlaufzeit.

Die Nutzertests werden in der Form von Workshops durchgeführt, die Hands-on-Sessions und Gruppengespräche zur Evaluierung beinhalten werden. Im Mittelpunkt steht dabei die Frage, inwieweit das Tool für ihre Arbeit hilfreich und dazu geeignet ist, das Forschungsdatenmanagement zu unterstützen, wozu neben der einfachen Bedienbarkeit vor allem auch die inhaltliche Dimension beleuchtet werden muss. D.h. die Workshops, die im ersten Drittel der Projektlaufzeit durchgeführt werden, werden auch eine Gelegenheit sein, zielgruppen- und disziplinspezifische Anforderungen zu erheben.

Während die Tests mit den Forschenden sich hauptsächlich auf die inhaltlichen Aspekte konzentrieren, wird in den Workshops mit Infrastrukturvertreterinnen und -vertretern zusätzlich die Konfigurierbarkeit und Anpassbarkeit des Werkzeuges für die Bedürfnisse des jeweiligen institutionellen Kontextes in den Blick genommen.

Auf Grundlage der Ergebnisse der Nutzertests werden Iterationen des Fragenkatalogs und der Aufgabenverwaltung vorgenommen und Fehler in der Software behoben.

Die finale Version von RDMO wird in einem Abschlussworkshop der Community vorgestellt.


### Features

Der RDMO ist in der ersten Projektphase mit diesen grundlegenden Features ausgestattet worden, die für die Organisation des Datenmanagements benötigt werden. Derzeit befindet sich das Projekt in der zweiten Phase.
Die Entwicklungsziele für die zweite Projektphase sind insbesondere:

* Erweiterung des Datenmodells um Aufgaben
* ein Rollenkonzept mit rollenbezogenen Ansichten, um Informationen und Aufgaben zielgruppenspezifisch und projektübergreifend zu verwalten
* Unterstützung von Repositorien und Identifiezierungssystemen, um Datenmanagementpläne mit den tatsächlichen Daten in temporären Projektspeicherorten bzw. in dauerhaften Datenrepositorien zu verlinken.
* Unterstützung der Auswertung von DMPs, um z.B. automatisch Datenrepositorien zu empfehlen oder Kostenabschätzung anhand der Kriterien der Datenrepositorien durchzuführen
* Ausbau der unterstützten Authentifizierungs- und Autorisierungs-Systeme (LDAP, Shibboleth, OAuth, ORCID)
* Beteiligung an der Entwicklung eines internationalen Austauschformats für DMPs
* verbesserte technische Wartbarkeit durch Standardisierung der Installation (Docker-Container) und Integration eines Update-Mechanismus
* Nachhaltigkeit und Community-Building
* Dissemination und Training

Das RDMO-Projekt arbeitet mit einer Vielzahl von Fachdisziplinen, Institutionen und Wissenschaftsorganisationen und auch internationalen Initiativen zusammen, um die Anwendbarkeit und Nachnutzbarkeit der RDMO-Software sicherzustellen. Wenn Sie Fragen haben oder uns anderweitig kontaktieren möchten, schicken Sie bitte eine Mail an uns unter <a href="mailto:rdmo-contact@listserv.dfn.de">rdmo-contact@listserv.dfn.de</a>.

Das RDMO-Projekt wird durch die DFG (Deutsche Forschungsgemeinschaft) gefördert.

Die Beschreibung der ersten Projektphase kann [hier]({{ site.baseurl }}/erste-projektphase) eingesehen werden.

**Das RDMO-Projekt wird in die community-getragene RDMO Arbeitsgemeinschaft überführt**

Im Herbst 2020 endet die DFG-Förderung für RDMO, die Forschungsdatenmanagementsoftware Research Data Management Organiser. RDMO wird inzwischen als Tool für die dynamische Begleitung des Forschungsdatenmanagements in Projekten und für die Erstellung von Datenmanagementplänen an vielen Forschungsinstitutionen in Deutschland genutzt. 

Um die Open Source Software weiterhin nutzbar zu halten und weiterzuentwickeln gründet sich aktuell die Arbeitsgemeinschaft (AG) RDMO mit der Unterzeichnung eines [Memorandum of Understanding]({{ site.baseurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) . 
Bereits auf dem letzten RDMO-Community-Treffen im Februar in Potsdam wurde hierfür der Weg geebnet, indem eine künftige [Organisationsstruktur]({{ site.baseurl }}/groups) mit verschiedenen Gremien ins Leben gerufen wurde. Diese Struktur soll die künftige Entwicklung tragen und ist im MoU detailliert ausgeführt.
<br/>

<details>
  <summary><u>Ehemaliges DFG Projekt Team</u></summary>
  {% for member in site.data.dfg_team.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.de | markdownify }}
    </div>
</div>
{% endfor %}
</details>
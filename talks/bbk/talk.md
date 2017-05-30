class: center, middle

.logo[
    ![RDMO](img/RDMO-logo.png)
]

## Research Data Management Organiser

Ein neues Werkzeug für das Forschungsdatenmanagement

### Jochen Klar

[Leibniz-Institut für Astrophysik Potsdam (AIP)](http://www.aip.de)

---

Projekt RDMO
------------

<div class="partner">
  <img src="img/partner/aip.png"/>
  <img src="img/partner/fhp.png"/>
</div>

* Gefördert von der Deutschen Forschungsgemeinschaft, Bereich LIS
* Projektlaufzeit von November 2015 - April 2017
* Nachfolgeprojekt bewilligt (30 Monate)

### Team

.team[
    ![Claudia Engelhardt](img/team/engelhardt.jpg)
    ![Jochen Klar](img/team/klar.jpg)
    ![Matin Heger](img/team/heger.jpg)
    ![Harry Enke](img/team/enke.jpg)
    ![Heike Neuroth](img/team/neuroth.jpg)
    ![Jens Ludwig](img/team/ludwig.jpg)
]

.small.center[
  Claudia Engelhardt (FHP) &ndash; Jochen Klar (AIP) &ndash; Martin Heger (FHP, Masterstudent)
]
.small.center[
  Harry Enke (AIP) &ndash; Heike Neuroth (FHP) &ndash; Jens Ludwig (DINI/nestor AG)
]
---

Projekt RDMO
------------

.aim[
    Ziel des Projekts ist es, ein Werkzeug zur Verfügung zu stellen, das die strukturierte Planung, Umsetzung und Verwaltung des Forschungsdatenmanagements unterstützt und zusätzlich die textuelle Ausgabe eines Datenmanagementplans (DMP) ermöglicht.
]

---

Datenmanagementpläne
--------------------

<i>stark idealisiert</i>

* Optimierung des Forschungsdatenmanagements schon im Vorfeld des Projektes
* Leitfaden für Umgang mit Forschungsdaten über den gesamten Projektverlauf
* Planung des Verbleibs der Forschungsdaten nach Projektende
  * Veröffentlichung
  * Langzeitarchivierung

--
* Erhöhung von Qualität und Effizienz von wissenschaftlicher Arbeit
* Mehr als nur Anforderung der Förderorganisation
* Im Idealfall Gewinn für den Forschenden und die Institution

---

Datenmanagementpläne
--------------------

#### Anwendungen

* Teil des [FAIR Data Management](http://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/oa_pilot/h2020-hi-oa-data-mgt_en.pdf) in Horizon 2020
* Teil der [Leitlinien zum Umgang mit Forschungsdaten](http://www.dfg.de/download/pdf/foerderung/antragstellung/forschungsdaten/richtlinien_forschungsdaten.pdf) der DFG
* Anforderungen von zahlreichen Förderern im angloamerikanischen Raum

#### Werkzeuge

* [DMPTool](https://dmptool.org), California Digital Library (CDL)
* [DMPonline](https://dmponline.dcc.ac.uk), Digital Curation Centre (DCC)
* Tool der [Universität Bielefeld](https://data.uni-bielefeld.de/de/data-management-plan)
* [TUB-DMP](https://www.szf.tu-berlin.de/menue/dienste_tools/datenmanagementplan_tub_dmp/) der Technischen Universität Berlin

---

Datenmanagementpläne
--------------------

<i>realistischere Sicht</i>

* Datenmanagementpläne werden gesehen:
  * als Auflage im Antragsprozess
  * als statisches Dokument
* Bestehende Tool konzentrieren sich auf:
  * Auffinden der verschiedenen Vorlagen der Förderer
  * Produzieren von Text-Dokumenten
* Bestehende Tool sind zentralisierte Webapplikationen:
  * Weitergabe von potentiell sensiblen Informationen
  * Eingeschränkte Anpassbarkeit (institutionell, fachspezifisch)

---

RDMO - Vom Plan zum Organiser
-----------------------------

.agenda[
    ![Organiser](img/agenda.jpg)
]

* Unterstützung des Datenmanagements über den  
  gesamten Projektverlauf
* Einbinden aller im Forschungsdatenmanagement  
  involvierten Akteure
* Erfassung aller relevanten Informationen für ein  
  nachhaltiges Datenmanagement
  * Strukturiertes Interview
  * Entscheidungsbaum, Überspringen redundanter Fragen
  * Ausgabe eines textuellen Datenmanagementplans
  * Ausgabe von anstehenden Aufgaben
  * Schnittstellen zu anderen Tools

.attribution[
    Image credit: <a href="https://en.wikipedia.org/wiki/nl:Gebruiker:Michiel1972">M.Minderhoud</a>, <a href="https://commons.wikimedia.org/wiki/File:Agenda.jpg">Agenda</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode">CC BY-SA 3.0</a>
]

---

RDMO - Lokal statt zentral
-----------

* Lokale Installation durch
  * Universitäten
  * Forschungsinstitute
  * Infrastrukturen
  * Kollaborationen
* Anpassung an institutionelles Umfeld
* Anpassung an disziplinspezifische Aspekte
* Lokale Anpassungen für eigenes *Corporate Design*
* Reibungslose Installation (z.B. durch IT-Abteilung)

---

Konzeption
----------

* Inhaltliche Aktualisierung der WissGrid Checkliste
* Erarbeitung eines generischen Fragenkatalogs
  * Logische Strukturierung
  * Verknüpfung von Fragen, Antwortoptionen, Ansichten und Aufgaben
  * Hilfetexte und Links zu weiteren Informationen
* Ausloten disziplinspezifische Anpassungsbedarfs
  * Astrophysik
  * Sozialwissenschaften
* Interoperabilität mit Datenmodellen
  * CERIF, Kerndatensatz Forschung, CASRAI (Masterarbeit M. Heger)

---

Software
--------

* Realisierung einer Webanwendung auf Basis von:
  * Python und dem [Django Framework](https://www.djangoproject.com)
  * JavaScript und [AngularJS 1](https://angularjs.org)
  * [Bootstrap 3](http://getbootstrap.com/)
  * [Pandoc](http://pandoc.org)
* Nutzung einer relationalen Datenbank (MySQL, PostgreSQL, Oracle, SQLite)
* Authenfizierungschnittstellen (LDAP, Shibboleth, OAuth2)
* Zentrale Demo-Instanz auf https://rdmo.aip.de

---

Open Source
-----------

* Offene Entwicklung seit dem *ersten Tag*
* Apache 2.0 Lizenz
* Code auf GitHub unter https://github.com/rdmorganiser/rdmo
* Dokumentation http://rdmo.readthedocs.io
* Tests mit [Travis CI](https://travis-ci.org/rdmorganiser/rdmo) und [Coveralls](https://coveralls.io/github/rdmorganiser/rdmo)
* Releases mit GitHub
* DOI mit Zenodo

---

Community und Nutzertests
-------------------------

* User-Tests:
  * [Arbeitsgruppe Sonnenphysik](http://www.aip.de/en/research/research-area-cmf/cosmic-magnetic-fields/solar-physics/optical-solar-physics)/[GREGOR Telekop](https://gregor.aip.de/) am AIP
  * [TwinLife](http://www.twin-life.de/), Partner DIW
* Vernetzung:
  * DataWiz, eRA, GESIS, UB Heidelberg, UB Duisburg Essen
  * bwFDM-info, gfbio, Digitale Hochschule NRW
  * DINI/nestor-AG "Forschungsdaten"
* Input-Workshop am 27.6.2016
* Abschlussworkshop am 7.4.2017
* Seminar WS 2015/2016 an der FHP, Masterarbeit

---

class: center, middle, inverted

RDMO Tour
---------

### Nutzerperspektive

[rdmo.aip.de](https://rdmo.aip.de)

---

class: inverted

RDMO Tour Nutzerperspektive
----------------------

* Zugang per lokalem Account, Oauth, LDAP Anbindung, Shibboleth
* Strukturierung anhand von Projekten, Kollaboration
* Strukturiertes Interview
  * verschiedene Widgets, kontollierte Vokabulare, Hilfetexte, Navigation
  * Reiter für verschiedene Projektpartner, Förderer, Datensätze, etc.
  * Bedingungen und Überspringen von Fragen
* Anzeigen und Export der Antworten und von Ansichten
* Erstellen von Snapshots
* Anzeigen der Aufgaben
* Mehrsprachigkeit

---

class: center, middle, inverted

RDMO Tour
---------

### Betreiberperspektive

[rdmo.aip.de](https://rdmo.aip.de)

---

RDMO Architektur
----------------

.architecture[
    ![RDMO Architektur](img/architektur.svg)
]

---

class: inverted

RDMO Tour Betreiberperspektive
-------------------------

* Fragen
  * Kataloge, Abschnitte und Unterabschnitte
  * Fragensets und Fragen
* Domäne
  * Attribute und Entitäten
  * Bereiche, Anzeigenamen, Optionen, Bedingungen
* Optionen und Optionensets
* Bedingungen
* Ansichten
* Aufgaben

---

Import/Export
-------------

* Interoperabilität zwischen den RDMO-Instanzen
* Export URLs für Betreiber:
  * Domäne, Optionen, Bedingungen, Fragenkatalog, Ansichten, Aufgaben
* Export für Nutzende:
  * Projekt mit Snapshots und Antworten
* Import zur Zeit über Kommandozeile
* URI zur Identifikation einzelner Elemente
* RDMO Fragenkatalog: [github.com/rdmorganiser/rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog)

---

RDMO XML Format
---------------

```xml
<catalog xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:uri>https://rdmorganiser.github.io/terms/questions/rdmo</dc:uri>
  <dc:comment/>
  <order>1</order>
  <title lang="en">RDMO</title>
  <title lang="de">RDMO</title>
  <sections>
    <section>
      <dc:uri>https://rdmorganiser.github.io/terms/questions/rdmo/general</dc:uri>
      <dc:comment/>
      <order>0</order>
      <title lang="en">General</title>
      <title lang="de">Allgemein</title>
      <subsections>
        <subsection>
        <dc:uri>https://rdmorganiser.github.io/terms/questions/rdmo/general/topic</dc:uri>
        <dc:comment/>
        <order>0</order>
        ...
```

---

Themes
------

* Lokale Anpassungen für eigenes *Look and Feel*
* Kein Fork des `rdmo` Repositories nötig
* Jedes HTML-Template und jede CSS Datei kann überschrieben werden

.forschungsdaten1[
    ![forschungsdaten.info Theme](img/forschungsdaten1.png)
]
.forschungsdaten2[
    ![forschungsdaten.info Theme](img/forschungsdaten2.png)
]

---

Programmierbare API
-------------------

```bash
curl -X GET -H 'Authorization: Token oojoh3phaighaebiNeiyeeCeiY3Peuv2eitoojoh' \
  https://rdmo.aip.de/api/v1/projects/values/?attribute__path=project/dataset/size/volume
```

```json
[
  {
    "id":10061,
    "project":"https://rdmo.aip.de/api/v1/projects/projects/69/",
    "attribute":"https://rdmo.aip.de/api/v1/domain/attributes/262/",
    "set_index":0,
    "collection_index":0,
    "text":"",
    "option":null,
    "created":"2017-05-29T14:50:20.009917Z",
    "updated":"2017-05-29T14:50:20.009924Z"
  },
  ...
]

```

---

RDMO Instanzen im Aufbau
------------------------

### Leibniz-Institut für Astrophysik (AIP)

### Göttingen eResearch Alliance

### bwFDM-info

* Karlsruher Institut für Technologie
* Universität Stuttgart
* Universität Konstanz

### Universität Duisburg-Essen

--

...

.uncle-sam[
    ![Uncle Sam](img/uncle-sam.jpg)
]

---

Zusammenarbeit
--------------

* Webseite: [rdmorganiser.github.io](https://rdmorganiser.github.io)
* GitHub Organisation: [github.com/rdmorganiser](https://github.com/rdmorganiser)
* RDMO Quellcode: [github.com/rdmorganiser/rdmo](https://github.com/rdmorganiser/rdmo)
* Fagenkatalog: [github.com/rdmorganiser/rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog)
* Dokumentation: [rdmo.readthedocs.io](http://rdmo.readthedocs.io)


* Mailingliste: DMPW@LISTSERV.DFN.DE
* GitHub Issues: [github.com/rdmorganiser/rdmo/issues](https://github.com/rdmorganiser/rdmo/issues)
* Slack: [rdmo.slack.com](https://rdmo.slack.com)


* Demo: [rdmo.aip.de](https://rdmo.aip.de)

---

Nachfolgeantrag
---------------

<div class="partner">
  <img src="img/partner/aip.png"/>
  <img src="img/partner/fhp.png"/>
  <img src="img/partner/kit.png"/>
</div>

* Erweiterung des Organisers
  * Konkrete Aufgaben
  * *actionable data management plan*
* Integration in Infrastruktur
  * Lokale Softwareinfrastruktur
  * Daten und Repositorien (re3data)
* Etablierung in der Community
* Nachhaltigkeit / Verstetigung
  * Organisatorisch: Entscheidungsstrukturen, Kooperationsszenarien
  * Technisch: Produktreife, Stabilität, Wartbarkeit, Installation

---

class: inverted

Zusammenfassung RDMO
--------------------

.summary[
* Organisation des Datenmanagements über die gesamte Projektlaufzeit
* Einbindung aller involvierten Stakeholder
* Abfragen der relevanten Informationen über ein strukturiertes Interview
* Abrufen der Informationen über verschiedene Ansichten und einer API
* Hohe Anpassbarkeit an institutionelles und fachspezifische Umfeld
* Einfache Installation
]

---

class: center, middle, inverted

Vielen Dank für die Aufmerksamkeit
----------------------------------

[https://rdmorganiser.github.io/talks/bbk](https://rdmorganiser.github.io/talks/bbk)

jklar@aip.de, [@jochenklar](https://twitter.com/jochenklar)

---

Links
-----

Datenmanagementpläne

* [Data Management Pläne auf forschungsdaten.org](http://www.forschungsdaten.org/index.php/Data_Management_Pl%C3%A4ne)
* [Leitfaden zum Forschungsdaten-Management. Handreichungen aus dem WissGrid-Projekt](https://rdmorganiser.github.io/docs/Leitfaden_Data-Management-WissGrid.pdf)

Förderorganisationen

* [Guidelines on FAIR Data Management in Horizon 2020](http://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/oa_pilot/h2020-hi-oa-data-mgt_en.pdf)
* [Guidelines on Open Access to Scientific Publications and Research Data in Horizon 2020](http://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/oa_pilot/h2020-hi-oa-pilot-guide_en.pdf)
* [Guidelines on Data Management in Horizon 2020](http://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/oa_pilot/h2020-hi-oa-data-mgt_en.pdf)
* [DFG-Leitlinien zum Umgang mit Forschungsdaten](http://www.dfg.de/foerderung/antragstellung_begutachtung_entscheidung/antragstellende/antragstellung/nachnutzung_forschungsdaten/index.html)

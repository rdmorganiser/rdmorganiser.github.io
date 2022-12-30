---
layout: page

key: old_news
lang: de
---

Vergangene Veranstaltungen, Vorträge und Bekanntmachungen
========

Workshops:
--------------

* 04.10.2021 6. RDMO-Community-Treffen (virtuell, 3-4 Stunden) [Programm](/events/workshop102021_programm) und [Anmeldung](https://meetings.aip.de/event/13/)
* 02.09.2021 DMPs in der NFDI - Kick-Off Meeting (virtuell, bei Interesse an RDMO StG schreiben)
* 02.03.2021 RDMO AG gemeinsam mit NFDI4ING und NFDI-Direktorat [Programm und Slides](/docs/nfdiws/workshop-nfdi), [Bericht](/docs/nfdiws/wsreport)
* 07.10.2020 4. RDMO-Community-Treffen (virtuell) [Programm](/events/workshop102020_programm), [Bericht](https://www.forschungsdaten.org/index.php/Viertes_Community-Treffen)
* 24.02.2020 3. RDMO-Community-Treffen, Gründungstreffen als Open Source Projekt, [Programm](/events/workshop022020_programm), [Bericht](https://www.forschungsdaten.org/index.php/Drittes_Community-Treffen)
* 03.12.2019 Lokaler Workshop in Bonn an der Max Weber Stiftung
* 07.10.2019 2. Community-Treffen [Programm+Slides](/events/workshop2019), [Bericht](https://www.forschungsdaten.org/index.php/Zweites_Community-Treffen)
* 27.09.2019 4. Projekttreffen
* 21.02.2019 3. Projekttreffen
* 15.11.2018 Workshop über DMPs bei dem Open Science Forum in Luxemburg
* 21.09.2018 2. Projekttreffen
* 13.09.2018 Lokaler Workshop in Dresden
* 03.09.2018 1. Community-Treffen in Uni Duisburg-Essen [Bericht](http://www.forschungsdaten.org/index.php/Erstes_Community-Treffen)
* 17./18.07.2018 Lokaler Workshop in Bochum und Siegen
* 12.07.2018 Lokaler Workshop in Darmstadt
* 11.06.2018 Lokaler Workshop in der UB Braunschweig
* 20.04.2018 Lokaler Workshop an der RWTH Aachen
* 08./09.02.2018 1. Projekttreffen
* 18.10.2017 Lokaler Workshop am Alfred-Wegner-Institut (AWI) in Bremerhaven
* 17.04.2017 Lokaler Workshop am ZB Med Informationszentrum Lebenswissenschaften
* 10.08.2017 Lokaler Workshop an der Ruhr Universität Bochum (RUB)
* 07.04.2017 Abschlussworkshop der ersten Projektphase mit Vorstellung der Projektergebnisse
* 27.06.2016 Input-Workshop mit ausgewählten Expertinnen und Experten aus der Forschungsdaten-Community

Vorträge:
--------------

RDMO wurde bereits bei zahlreichen Anlässen vorgestellt und diskutiert:

<details>
  <summary><u>Siehe Liste der Vorträge:</u></summary>
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

Publikationen:
--------------

Neuroth, H., Engelhardt, C., Klar, J., Ludwig, J., & Enke, H. (2018). [Aktives Forschungsdatenmanagement](https://www.degruyter.com/view/journals/abitech/38/1/article-p55.xml), ABI Technik, 38(1), 55-64. doi: [https://doi.org/10.1515/abitech-2018-0008](https://doi.org/10.1515/abitech-2018-0008)

Kröger, J., & Wedlich-Zachodin, K. (2020). [Das Beteiligungsmodell von forschungsdaten.Info: Ein Kleines ABC Der Nachhaltigkeit“](/docs/das_beteiligungsmodel.pdf), Bausteine Forschungsdatenmanagement, Nr. 1 (April), 86-95. doi: [https://doi.org/10.17192/bfdm.2020.1.8160](https://doi.org/10.17192/bfdm.2020.1.8160)


Lehre:
--------------

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

Es wurde zudem eine umfangreiche Sammlung von [Schriften zum Thema Forschungsdatenmanagement](https://www.zotero.org/groups/forschungsdaten/items) auf Zotero zusammengestellt.

Im Projektkontext hat Martin Heger seine Masterarbeit mit dem Titel "Datenmodellierung für Forschungsdaten-managementpläne" verfasst. [Link zur Masterarbeit]({{ site.baseurl }}/docs/Heger_MA.pdf)
(Anmerkung: Durch die Weiterentwicklung von RDMO entsprechen einige der hier beschriebenen Informationen zum [Datenmodells](https://rdmo.readthedocs.io/en/latest/management/domain.html#attributes-entities-and-the-data-model-refactoring) nicht mehr dem aktuellen Stand.)

Bekanntmachungen:
--------------

<b>Dezember 2021</b>

ab sofort ist die neue Version RDMO 1.7.0 verfügbar. Es handelt sich zwar primär um Fehlerbehebungen, da jedoch zusätzliche Funktionalität hinzugekommen ist, wird die mittlere Zahl der Versionsnummer erhöht. Als Reaktion auf Feedback haben wir das Interview leicht überarbeitet. Bei den Fragen zu Datensätzen wird jetzt mit “Sichern und fortfahren” nicht mehr zum nächsten Datensatz gewechselt, sondern zum nächsten Fragenset, wobei aber der gleiche Datensatz weiterbearbeitet wird. (Über die Einstellung PROJECT_QUESTIONS_CYCLE_SETS kann das alte Verhalten behalten werden.) Fragensets, die durch Bedingungen übersprungen werden können, werden durch ein kleines Fragezeichen in der Navigation gekennzeichnet. Mehr Informationen gibt es wie immer auf der Release-Seite: https://github.com/rdmorganiser/rdmo/releases

Außerdem stehen einige Neuerungen im Repositorium rdmo-catalog an. Sie werden unter der Versionsnummer 1.1.0-rdmo-1.6.0 veröffentlicht, wobei rdmo-1.6.0 bedeutet, dass das Release mit RDMO ab 1.6.0 verwendet werden kann. Es sind folgende Änderungen enthalten:

- Domäne: 22 neue Attribute (benötigt für Horizon Europe)
- Bedingungen: 4 neue Bedingungen
- Optionen: zusätzliche Optionen; Sprachjustierung; Lokalisierung auf Französisch und Italienisch
- Kataloge: zusätzliche Fragen und Hilfetexte; Aktualisierung von DFG-Links; Sprachjustierung; Lokalisierung auf Französisch und Italienisch
- Community-Beiträge: Tabellenübersicht; neuer Katalog für Science Europe / VW Stiftung; Aktualisierung FoDaKo-DFG-Katalog


<b>November 2021</b>
in den letzten Wochen sind einige kleinere Probleme in RDMO aufgefallen, weshalb ab sofort die Version 1.6.2 verfügbar ist, die im wesentlichen Bug Fixes enthält. So wurden Overlays repariert für den Fall, dass in den Einstellungen PROJECT_ISSUES deaktiviert waren. Außerdem wurde ein Fehler behoben, der aufgetreten ist, wenn Datensätze entfernt werden. Ein Problem beim Auflösen von Bedingungen in Fragensets wurde ebenfalls beseitigt. Einige Verbesserungen, die eher für technische Interessierte oder RDMO-Administrierende interessant sein dürften, sind ebenfalls auf der Liste der Neuerungen. Von nun an nutzen wir Github-Actions und nicht mehr Travis-CI für unsere automatischen Tests. Weiterhin wurde auf der Kommandozeile ein Befehl hinzugefügt, mit dem sich Projekte aufspüren und entfernen lassen, die beispielsweise keine Besitzer haben. Unsere Release Notes finden sich wie immer hier: https://github.com/rdmorganiser/rdmo/releases.

Die Berichte zum Community-Treffen vom 04.10.2021 sind - wie immer - auf
https://www.forschungsdaten.org/index.php/Sechstes_Community-Treffen zu finden.

Am 16. November war der Tag der Forschungsdaten in NRW. Im Nachmittagsprogramm hat Torsten Rathmann über Anforderungen der Drittmittelgeber und DMPs sprechen und dabei auch RDMO vorstellen, insbesondere auch eine neue Version der FoDaKo-Fragenkataloge für DFG-Projekte. Weitere Informationen gibt es auf der [Veranstaltungswebsite](https://www.fdm.uni-wuppertal.de/de/schulungen-veranstaltungen.html).


<b>Oktober 2021</b>

Nach einer 2 monatigen Testphase haben wir am Dienstag RDMO 1.6 veröffentlicht. Wie immer finden Sie die relevanten Informationen auf der Release-Page auf GitHub:

    https://github.com/rdmorganiser/rdmo/releases/tag/1.6

In der neuen Version werden viele Neuerungen enthalten sein:

- Fragensets können jetzt auch geschachtelt sein, um Hierarchien wie z.B. Datensätze -> Erstellende -> Institutionen (wie in DataCite) abzubilden.
- In den Katalogen können Fragen für die Nutzenden als optional markiert werden und Standardantworten können konfiguriert werden.
- Eine Autocomplete-Widget, Tooltips in Hilfetexten, die Möglichkeit Fragen nebeneinander anzuordnen dienen der besseren Nutzbarkeit.
- Ein Overlay-Tutorial für neue Benutzende soll den Einstieg erleichtern.
- Die Instanz kann so konfiguriert werden, dass die meisten Eingaben beim Beantworten der Fragen automatisch gespeichert werden.
- Die Implementation der Bedingungen und weitere Datenbankzugriffe wurden optimiert, um die Geschwindigkeit der Seitenaufrufe zu verbessern.
- Im Management-Interface können Fragen, Fragensets und Optionen ausgeblendet werden.
- Für Fragensets, die als Sammlung konfiguriert sind, wird das Attribut jetzt explizit gesetzt (also project/dataset/id statt project/dataset). Eine Migration wird bestehende Fragenkataloge automatisch anpassen.
- Für neue Instanzen wird die Theme-Erstellung vereinfacht, bestehende Instanzen können aber wie gewohnt weiter betrieben werden.

RDMO nutzt ab Version 1.6 Django 3.2 und setzt damit Python 3.6 voraus. Wenn das bei Ihnen Probleme verursachen sollte, wenden Sie sich bitte an uns.


<b>September 2021</b>

Community-Workshop am 4. Oktober 2021:

Die das ausführliche [Programm](https://rdmorganiser.github.io/events/workshop102021_programm/) ist jetzt veröffentlicht. Wir werden noch die Beiträge für die Breakout-Sessions in der letzten September-Woche hinzufügen.

Die [Registrierung](https://meetings.aip.de/event/13/) ist offen.

Software:

der Release Candidate von RDMO befindet sich noch in der Testphase. Wir würden uns freuen, wenn Institutionen, die über Testinstanzen oder ähnliches verfügen, die Version ausprobieren würden, damit etwaige Fehler schon in der Testphase gefunden und ausgemerzt werden können. Der Release Candidate muss direkt von GitHub installiert werden. Wie das geht, steht auf der (pre-)Release-Page:

[Pre-Release](https://github.com/rdmorganiser/rdmo/releases/tag/1.6-rc.1)

Die Testphase läuft noch mindestens bis zum nächsten Entwicklertreffen, welches am dritten Donnerstag im September stattfindet. Je nach Feedback wird die Testphase dann verlängert oder beendet, um anschließend die Arbeiten an einem neuen RDMO-Release zu beginnen.


<b>August 2021</b>

Auch im Sommer geht es fleißig mit RDMO weiter! Die neue neuen Version von RDMO ist jetzt soweit, dass wie angekündigt, eine Testphase beginnen kann. Der Release Candidate muss direkt von GitHub installiert werden, wie das geht, steht auf der [(pre-)Release-Page](https://github.com/rdmorganiser/rdmo/releases/tag/1.6-rc.1). Außerdem ist die Liste zahlreicher Änderungen auf dieser Seite einsehbar.

<b>Juli 2021</b>

Die Arbeiten am neuen Release von RDMO, der voraussichtlich Anfang August erscheinen wird, laufen. Teil des Releases werden geschachtelte Fragensets, optionale Fragen, voreingestellte Standardantworten, ein Autocomplete-Widget, Tooltips in Hilfetexten, Tutorial-Einblendungen für neue Benutzerinnen und Benutzer und zahlreiche weitere Verbesserungen sein. Anders als zuvor werden wir vor dem Release eine Testphase legen, in der die neue Version schon mal auf Testinstanzen (sofern vorhanden) ausprobiert werden kann. Wir werden Sie dazu per Mail informieren, wenn es soweit ist.

<b>April 2021</b>

RDMO 1.5.5,  eine neue Version, ist veröffentlicht, die wieder ein paar kleinere Bugs beseitigt. Die Version kann wie üblich installiert werden. Wenn bereits RDMO 1.5 installiert ist, müssen auch keine Datenbank-Migrationen durchgeführt werden. Mehr Infos gibt es auf [Release-Seite  auf GitHub](https://github.com/rdmorganiser/rdmo/releases/tag/1.5.5)

<b>März 2021</b>

*RDMO 1.5*

In der letzten Woche ist die Version 1.5 von RDMO erschienen, die wieder eine Reihe von Neuerungen enthält. Diesesmal stand besonders die praktische Nutzbarkeit für die Forschenden im Vordergrund. Das Interview wird jetzt immer auf der Seite fortgesetzt, die zuletzt aufgerufen wurde. Am User-Interface wurden einige Details verändert, so dass die Nutzerführung deutlich intuitiver wird. In den Fragenkatalogen können File-Uploads konfiguriert werden, um zusätzliches Material wie Grafiken oder Dokumente hochzuladen. Projekte können nun als Unterprojekte von bestehenden Projekten erstellt werden, wobei sich die Zugriffsrechte vererben. Ansichten von Oberprojekten können auf Unterprojekte zugreifen, um Informationen aus mehreren Projekten zusammenzutragen. Das Hinzufügen von neuen Usern zu Projekten funktioniert jetzt über Email-Benachrichtigungen und es können auch Nutzende, die noch nicht in der RDMO Instanz registriert sind, über diesen Weg eingeladen werden. Auch “unter der Haube” habe wir an RDMO gearbeitet: Durch Optimierung der Datenbankzugriffe sollte RDMO jetzt deutlich schneller und flüssiger sein. Die (eher technische) Übersicht über die einzelnen Features gibt es auf der [Release-Seite auf GitHub](https://github.com/rdmorganiser/rdmo/releases/tag/1.5).

*Neues aus der RDMO Content-Gruppe*

Mittlerweile haben sich neben der UAG Redaktionsprozesse für Attribute, Optionen und Ansichten noch 3 weitere UAGs gebildet: Textanleitung für DMPs, Werbung für RDMO und Engagement in einer RDA - UAG für DMP. Wer Interesse hat, sich bei den UAGs einzubringen, ist herzlich willkommen. So arbeitet die UAG Redaktionsprozesse beispielsweise gerade daran, anhand eines konkreten Falles neue Attribute, Optionen und Bedingungen in die entsprechenden Dateien des RDMO-Standardkatalogs einzupflegen. Die CG trifft sich jeden 2. Donnerstag im Monat von 11-12h. Ankündigung erfolgt über den RDMO-Verteiler.

*Bericht NFDI - DMP Workshop*

Am 02.03. führte die Steuerungsgruppe der Arbeitsgemeinschaft RDMO gemeinsam mit dem NFDI Direktorat und dem Konsortium NFDI4Ing einen virtuellen Workshop zum Thema „Erstellung von Datenmanagementplänen und Einsatz von DMP Tools in der NFDI“ durch mit 50 Vertretern von 21 Konsortien (gefördert und noch nicht gefördert). Ein ausführlicher Bericht zu dieser Veranstaltung befindet sich auf der [Webseite von RDMOs](/docs/nfdiws/wsreport).


<b>Februar 2021</b>

Die Arbeiten an einer neuen RDMO-Version, deren Release Ende Februar angestrebt wird,  laufen. Wenn alles klappt wird sie Verbesserungen der Nutzeroberfläche enthalten, es ermöglichen Dateien beim Beantworten von Fragen hochzuladen und eine hierarchische Struktur von Projekten einführen, die dann auf diese Weise verschachtelt werden können. Bis es so weit ist, muss allerdings noch etwas getestet und entwickelt werden.

Wie bereits an anderer Stelle angekündigt veranstaltet die UAG Datenmanagementpläne der DINI/nestor-AG Forschungsdaten in Kooperation mit fdm.nrw im Frühjahr 2021 eine virtuelle Workshopreihe zum Thema Datenmanagementpläne. Eine Beschreibung der Workshops sowie die Anmeldung sind nun online.

Die Workshops richten sich sowohl an Teilnehmende, die bisher wenig Kontakt mit dem Thema DMP hatten, als auch an Personen, die bereits über vielfältige Erfahrung mit DMPs verfügen.

Die Steuerungsgruppe von  RDMO hat gemeinsam mit dem NFDI Direktorat und dem Konsortium NFDI4Ing alle NFDI-Konsortien eingeladen,  aktiv mit einem Kurzvortrag an dem virtuellen Workshop “Erstellung von Datenmanagementplänen und DMP Tools in der NFDI” Anfang März 2021 teilzunehmen.  Dies geschieht vor dem Hintergrund der “Leipzig-Berlin-Erklärung zu NFDI-Querschnittsthemen der Infrastrukturentwicklung” und dem darin genannten Querschnittsthema “Erstellung von Datenmanagementplänen”. Sie soll dem  Austausch innerhalb der NFDI dienen.  Wir werden über die Ergebnisse zeitnah berichten.

<b>Dezember 2020</b>
Virtuelle RDMO-Sprechstunde

Wir wünschen allen ein erholsames Jahresende und einen Gutes Neues Jahr

<b>November 2020</b>

Regelmäßige virtuelle Treffen der Content-Gruppe und der Software-Gruppe

Die Content-Gruppe trifft sich ab jetzt jeden 2. Donnerstag im Monat von 11-12h. Das Treffen findet via Zoom statt und wird per E-mail und Slack erneut angekündigt. Immer eine Woche später, also am 3. Donnerstag im Monat, trifft sich in gleicher Form die Software-Gruppe. Beide Treffen sind für alle Interessierten offen.

Community-Treffen 07.10.2020

Unser 4. Community-Treffen hat am 07.10.2020 virtuell mit ca. 60 Teilnehmerinnen und Teilnehmern stattgefunden.   Der ausführliche Bericht ist auf [Forschungdaten.org](https://www.forschungsdaten.org/index.php/Viertes_Community-Treffen) zu finden, nebst den meisten Folien, die präsentiert und diskutiert wurden.

<b>Oktober 2020</b>

Zunächst wollen wir vor allem noch einmal auf das geplante virtuelle RDMO Anwender-Treffen am 07.10.2020 hinweisen. Ein detailliertes [Programm](/events/workshop022020_programm/) ist auf der RDMO-Webseite veröffentlicht. Die Keynote wird von Herrn Sure-Vetter (NFDI-Direktor) gehalten. Außerdem wird das RDMO Memorandum of Understanding (MoU) ausführlich vorgestellt. Bitte melden Sie sich bis zum 04.10.2020 für das Anwender-Treffen auf der [Registrierungsseite](https://meetings.aip.de/event/9/) an.

In der kommenden Woche wird noch vor dem Anwender-Treffen das RDMO-Release 1.3 erscheinen. Es wird einige Neuerungen enthalten, von denen hier nur ausschnittsweise ein paar genannt werden sollen. So wird es neben einigen Bug-Fixes kleinere Verbesserungen an der Nutzeroberfläche, eine erweiterte Konfigurierbarkeit von Referenz-Dokumenten und Erleichterungen beim Anpassen des Footers. Außerdem ist RDMO dank der Arbeit von Dario Pilori und Giacomo Lanza mit dem nächsten Release auch in italienischer Sprache nutzbar. Eine der größeren Veränderungen betrifft die Überarbeitung von Tasks, die in ihrer Funktionalität deutlich erweitert wurden.

<b>September 2020</b>

Auch in diesem Monat waren wir nicht untätig und haben heute Version 1.2 von RDMO veröffentlicht. In den Management-Oberflächen können nun Elemente wie Optionen, Attribute, aber auch ganze Fragenkataloge direkt kopiert werden. Kataloge, Aufgaben und Ansichten können von den Nutzenden verborgen werde (z.B. so lange noch an ihnen gearbeitet wird). Attribute und Bedingungen zeigen an, in welchen Fragen, Fragensets, etc. sie genutzt werden. Elemente können jetzt auch einzeln exportiert werden, z.B. ein Fragenset oder eine Ansicht. Auch den Import haben wir neu gestaltet. Vor dem eigentlichen Import wird jetzt angezeigt was importiert wird und ob es Probleme dabei gibt. Außerdem können einzelne Elemente abgewählt werden. Nach dem Import wird noch einmal gezeigt was importiert wurde und ob es Fehler gegeben hat.

Auch einige Fehler wurden mit dem neuen Release behoben. Viele von ihnen betrafen Übersetzungen. RDMO ist nun besser auf fehlende Texte vorbereitet, sollten diese in der gewählten Sprache nicht verfügbar sein. In diesen Fällen wird auf die vorhandene Sprache zurückgegriffen. Views wurden um vier verfügbare Variablen erweitert. Die Funktion “render_value” kann nun mit “project/title”, “project/description”, “project/created” und “project/updated” verwendet werden.


<b>August 2020</b>

In der neuen RDMO-Version 1.1 haben wir die Projekt Export- und Import-Funktionalitäten überarbeitet. Damit sind die Grundlagen gelegt, Formate wie DataCite, das von DataCite abgeleitete Schema von RADAR und auch das von der RDA vorgeschlagene [maDMP](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) in RDMO zu unterstützen. Da das Mapping von RDMO auf diese Formate aber abhängig von unserem Domänenmodell ist, das aber wiederum kein Teil des RDMO-Codes ist, sondern unabhängig gepflegt wird, war es nötig den Code hierfür in Plugins auszulagern. Diese werden in der Zukunft, analog zu dem [rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog) Repository, in [rdmo-plugins](https://github.com/rdmorganiser/rdmo-plugins) gesammelt. Das “Mapping” der Formate auf das RDMO Domänenmodell passiert im Code dieser Plugins, wurde von uns aber zusätzlich in einem [Google-Doc](https://docs.google.com/spreadsheets/d/16fQ0Rgg-2ewMK9FklEjU8pAcpHODEm7PYy6xDCninew/edit?usp=sharing) dokumentiert. Für die vollständige Unterstützung wird es aber noch nötig sein, zusätzliche Fragen und Attribute einzuführen.

In der Zukunft wollen wir diese Art von Plugins verstärkt nutzen, um Domänenspezifische Features in RDMO zu realisieren und natürlich können Plugins auch von Instanzen genutzt werden, um stärker angepasste Funktionalitäten zu realisieren. Die Details gibt es in der [Plugin Dokumentation](https://rdmo.readthedocs.io/en/latest/plugins/index.html).

<b>Juli 2020</b>
Die neue Version 1.0.7 von RDMO beinhaltet als Neuerungen 1) Multi-Site-Setup: Betreiben verschiedener RDMO-Seiten mit unterschiedlichen URLs und Themes auf einem Server mit einer gemeinsamen Datenbank (mehr unter [https://rdmo.readthedocs.io/en/latest/configuration/multisite.html](https://rdmo.readthedocs.io/en/latest/configuration/multisite.html)); 2) Bestimmte User können jetzt über das Admin-Interface zu Site-Managern gemacht werden (mehr unter [https://rdmo.readthedocs.io/en/latest/administration/users.html#roles](https://rdmo.readthedocs.io/en/latest/administration/users.html#roles)); 3) RDMO steht ab sofort in französischer Sprache zu Verfügung (Texte in der Software selbst, RDMO-Fragenkatalog sowie die ihm anhängigen Optionen und einige andere Bezeichner und Hilfetexte), die entsprechenden XML-Dateien stehen über das Catalog-Repository zur Verfügung;  4) die Nutzungsbedingungen sind nun über eine eigene URL verfügbar. Außerdem ist sind die Aufzeichnung und Folien der Präsentation des RDMO-Teams “Datenmanagementpläne mit RDMO” für das Projekt FDM-BB nun verfügbar unter: [https://mediaup.uni-potsdam.de/Play/19500](https://mediaup.uni-potsdam.de/Play/19500).

<b>Juni 2020</b>
Im Mai haben wir die erste virtuelle RDMO-Sprechstunde durchgeführt. Aus dem Gespräch ergab sich die Bitte, Bedarfe möglichst als GitHub-Issues, als dauerhaftesten und am besten nachvollziehbaren Workflow anzulegen. Für Fragen zum Anlegen von Issues kontaktieren Sie uns am besten im RDMO-Slack oder über Email. Das RDMO-Team hat vom 27.-28.05.2020 am [virtuellen “RDA Hackathon on maDMP”](https://rda-dmp-common.github.io/hackathon-2020/) teilgenommen und an der Interoperabilität von RDMO mit dem [maDMP Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) gearbeitet. Das Ergebnis ist ein Plugin, in dem das Mapping stattfindet und ein Export zum maDMP JSON-Format erstellt wird. Außerdem präsentierte das RDMO-Team “Datenmanagementpläne mit RDMO” am 08.06.2020 in einem vom Projekt FDM-BB (Universität Potsdam, Fachhochschule Potsdam) organisierten Webinar.

<b>Mai 2020</b>
RDMO ist nun in Version 1.0.6 verfügbar. Mit der neuen Version ist es möglich, in Ansichten einfache mathematische Berechnungen durchzuführen z. B. für einfache tabellarische Zusammenfassung der anfallenden Personal- und Sachkosten. Nähere Erläuterungen im [Tutorial](https://www.forschungsdaten.org/index.php/Ansicht_erstellen) und in der [technischen Dokumentation](https://rdmo.readthedocs.io/en/latest/management/views.html). Seit Mai gibt es jeden ersten Donnerstag des Monats (außer an Feiertagen) für Mitglieder der RDMO-Community (DatenmanagerInnen, AdministratorInnen etc.) eine “virtuelle RDMO-Sprechstunde”. Details im [RDMO-Newsletter](https://www.listserv.dfn.de/sympa/info/rdmo). Außerdem hat die Steuerungsgruppe beschlossen, dass RDMO als Open Source Projekt ab sofort RDMO Arbeitsgemeinschaft heißt und bereitet ein Memorandum of Understanding vor, auf dessen Grundlage die Beteiligung an der Weiterführung von RDMO von Institutionen und Organisationen erfolgen wird. Die Mitglieder der Gruppen der Arbeitsgemeinschaft sind unter [https://rdmorganiser.github.io/groups/](/groups/) zu finden.

<b>April 2020</b>
RDMO Release 1.0.5 (Bug Fixes, u. a. Login mit ORCID, Fehler beim Download der Vendor Files, Darstellung von Sets in Views). Ein Update ist empfohlen. Siehe die Dokumentation bzgl. der für die ORCID notwendigen neuen Einträge in der local.py. Der Bericht des 3. RDMO-Anwendertreffens ist [online](https://www.forschungsdaten.org/index.php/Drittes_Community-Treffen). Ab Mai 2020 gibt es eine “virtuelle RDMO Sprechstunde”, bitte [kontaktieren](https://rdmorganiser.github.io/) Sie uns für Details. Wir haben den [“DFG-Fragenkatalog” vom Projekt FoDaKo, Bergische Universität Wuppertal (Torsten Rathmann) (CC0)](https://github.com/rdmorganiser/rdmo-catalog/tree/master/shared/fodako) in die AIP-Demo-Instanz eingepflegt und nehmen weiterhin Kataloge aus der Community in das GitHub Repository auf: entweder einen Pull-Request auf GitHub erstellen oder die XML-Dateien per Mail an omichaelis@aip.de senden. Besonders hilfreich für die Nachnutzung sind die zusätzliche Bereitstellung einer Read.me-Datei bzw. Dokumentation zum jeweiligen Katalog.

<b>März 2020</b>

Im Februar fand das dritte RDMO-Anwendertreffen statt. Es war fokussiert auf die Etablierung einer Governance-Struktur für die Weiterführung von RDMO, unabhängig von dem in diesem Jahr endenden DFG-Projekt, das die Grundlage für RDMO geschaffen hat. Ein Block von Kurzvorträgen, die den Kontext im europäischen (Horizon Europe) und nationalen Raum (NFDI) skizzierten, wie auch einige Weiterentwicklungsaspekte von RDMO, reflektierte die gegenwärtige Situation. [Vorträge und Programm](/events/workshop022020_programm/). Das vom Projekt vorgelegte Manifest und weitere Beiträge haben in der Etablierung einer Steuerungsgruppe mit  6+ Personen, einer  Softwaregruppe mit 3+ Personen sowie einer Content-Gruppe mit 6+ Personen resultiert. Die Steuerungsgruppe wurde damit beauftragt, die Governance-Struktur weiter auszuarbeiten und ein MoU für RDMO auszuarbeiten, um den formalen Rahmen für RDMO zu festigen. Weitere Schritte werden über die Website und Mails bekannt gemacht. Während der [RDA-De-Tagung](https://www.rda-deutschland.de/events/tagung-2020) haben Olaf Michaelis und Ulrike Wuttke am Vormittag des 25.02.2020 im Rahmen des Project-Tracks einen RDMO-Workshop angeboten. Während des gut besuchten Workshops, in dem die wichtigsten Features und weitere Entwicklungsmöglichkeiten des Werkzeugs vorgestellt wurden, und im weiteren Verlauf der Konferenz freuten wir uns über intensiven Austausch zu RDMO. Das starke Interesse an RDMO in der deutschen Community wurde insbesondere aus den Präsentationen der Bundesland-FDM-Initiativen deutlich.

<b>Februar 2020</b>
Diesen Monat gab es [RDMO-Release 1.0.3.](https://github.com/rdmorganiser/rdmo/releases/tag/1.0.3) Es enthält einige Verbesserungen und behebt kleinere Fehler. Es stehen neue API-Filter-Attribute zur Verfügung, die Schnittstellen flexibler machen. Sie werden es unter anderem erleichtern, einen Satz an Antworten zu exportieren und diesem anschließend die entsprechenden Fragen zuzuordnen, da Fragen nun beispielsweise mit dem Parameter “attribute” über die API lokalisiert werden können. Außerdem nutzt RDMO nun “pytest”, mit dem auch die [RDMO-App getestet werden kann](https://github.com/rdmorganiser/rdmo/blob/master/docs/testing.md). Im Januar war RDMO beim [Workshop der DHd-AG Datenzentren am 23./24.01.2020 in Frankfurt an Main](http://dig-hum.de/aktuelles/einladung-zum-workshop-der-dhd-ag-datenzentren-zum-thema-interoperabilit%C3%A4t-am-2324012020) vertreten. Ulrike Wuttke und Olaf Michaelis haben die bisher im Projekt erfolgten Anstrengungen vorgestellt, RDMO Datacite kompatibel zu machen. Der Beitrag “Vom Projekt zum nachhaltigen Werkzeug für das Forschungsdatenmanagement: Das Beispiel Research Data Management Organiser” wurde zum [109. Deutschen Bibliothekartag](https://bibliothekartag2020.de) (26. - 29. Mai 2020, Hannover) angenommen.

<b>Januar 2020</b>
Im Mittelpunkt des inzwischen 3. RDMO-Community-Treffens am 24.02.2020 am Leibniz-Institut für Astrophysik Potsdam (AIP) werden die Verabschiedung des [RDMO-Manifests](/docs/RDMO-Manifest-122019.pdf) und die Gründung der RDMO Community, insbesondere die Konstituierung der *Steuerungsgruppe* und der *Software-Gruppe* stehen. Außerdem sind wieder kurze *Spotlights* aus der Community der RDMO-Anwender\*innen vorgesehen. Link zum [Programm](/events/workshop022020_programm/). Während der an das Community-Treffen anschließenden [RDA-De-Tagung](https://www.rda-deutschland.de/events/tagung-2020) werden wir am Vormittag des 25.02.2020 einen RDMO-Workshop anbieten. Die Registrierung ist inzwischen möglich.

<b>November 2019</b>
Diesen Monat haben wir einige Aktualisierungen und Umgestaltungen an den RDMO-Schulungsmaterialien vorgenommen. Sie finden Schulungsmaterialien wie Video-Tutorials oder den RDMO-Fragenkatalog auf der RDMO-Webseite unter [Dokumentation](/dokumentation/). Weitere Tutorials, FAQs etc. für verschiedene Zielgruppen (Administrator*innen, Nutzer*innen) finden Sie auf dem Wiki [forschungsdaten.org](https://www.forschungsdaten.org/index.php/RDMO). Das 3. Anwendertreffen wird am 24.02.2020 in Potsdam am AIP stattfinden. Dort ist die Konstituierung der künftigen Organisation von RDMO geplant.

<b>Oktober 2019</b>
RDMO hat den Sprung auf Version 1 gemacht. Die neueste Version enthält zwei wichtige Neuerungen, die die Projektzugehörigkeit von Nutzern betreffen. Zum einen kann diese nun über die API gesteuert werden und zum anderen können Nutzer sich nun selbst jederzeit aus einem Projekt entfernen, wenn sie nicht der letzte Besitzer dieses Projektes sind. Der Bericht vom 2. RDMO-Anwendertreffen am 07.10.2019 in Darmstadt an der ULB ist [online](https://www.forschungsdaten.org/index.php/Zweites_Community-Treffen). Außerdem haben wir RDMO bei den Open Access Tagen in Hannover präsentiert sowie die Schulungsmaterialien zu RDMO bei einem Workshop in Hildesheim ([Folien online auf Zenodo](http://doi.org/10.5281/zenodo.3520839)).  

<b>September 2019</b>
Am 27.09.2019 fand in Berlin das halbjährliche Treffen des RDMO-Projekts statt. Es gab intensive Diskussionen zum Thema Nachhaltigkeit und zur weiteren Entwicklung von RDMO. Außerdem wurden die letzten Details für das nächste RDMO-Anwendertreffen in Darmstadt geklärt.

<b>August 2019</b>
Das diesjährige [**RDMO-Anwendertreffen** findet am 07.10.2019 an der ULB Darmstadt](/events/workshop2019/) statt. Studenten “Data Stewardship” der TU Wien haben einige Prototypen, Mappings und Beispiele entwickelt mit Hinsicht auf den Export von machine-actionable Data Management Plans aus einer RDMO-Instanz nach dem [**RDA-Standard für maDMPs**](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard). Mehr Informationen finden sich [hier](https://helmuthb.github.io/dmp-tools-actionable/). Diese Entwicklungen stehen im Kontext zu Bestrebungen des RDMO-Projekts, mit RDMO erstellte DMPs mit dem maDMP-Standard interoperabel zu machen. Außerdem ist die neue [**RDMO-Version 0.14.6**](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.6) verfügbar (kleine Änderungen, Bugfix).

<b>Juli 2019</b>
Im letzten Monat haben wir ein paar kleinere Bugs in RDMO gefunden und beseitigt. Insbesondere hat der Installationsvorgang durch ein Update bei einer von uns verwendeten Bibliothek nicht mehr funktioniert. Die Änderungen sind in der [**neuen Version 0.14.5** auf Github](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.5) enthalten, die wie üblich installiert werden kann.

<b>Juni 2019</b>
Wir haben den **DCC-Fragenkatalog**, dessen Import nicht korrekt funktionierte, repariert. Die aktualisierte Version ist auf GitHub. Er enthält zehn neue Attribute, die dem Domänenmodell hinzugefügt wurden. Daher sollte vor dem Einlesen des Katalogs erst das Domänenmodell importiert werden. Der Import der aktuellen XML-Datei kann ohne vorbereitende Schritte erfolgen. Bereits importierte Daten bleiben erhalten und werden lediglich um die fehlenden zehn Einträge ergänzt. Außerdem gibt es nun eine **weitere Methode, RDMO zu installieren oder auch schnell auszuprobieren**. Auf GitHub befindet sich eine Version RDMOs, die in Docker Compose verpackt ist. Wir würden uns über weitere Anregungen freuen, um auch diesen RDMO-Installationsweg weiter zu verbessern. Mit Beginn des Monats Juli wird Olaf Michaelis bis Anfang Oktober in Elternzeit gehen. RDMO wird in den drei Monaten seiner Abwesenheit natürlich trotzdem weiter betreut und entwickelt, wenn auch mit etwas weniger Personal.

<b>Mai 2019</b>
RDMO **Version 0.14.4** (Bug Fixes) ist verfügbar. Probleme, die durch die Umstellung auf Django2 und Python3 verursacht wurden, sollten nun beseitigt sein. Ein Update wird wärmstens empfohlen, da Python2 nicht mehr lange unterstützt wird. Im Mai hat der Kick-Off des Projekts [**»Management Molekularer Daten im Research Data Life Cycle« (MaMoDaR)**](https://www.fh-potsdam.de/informieren/aktuelles/news-detailansicht/artikel/start-fuer-forschungsprojekt-mamodar/), eine Kooperation der FH Potsdam und des Robert Koch-Instituts, an der FHP stattgefunden und das **IPK Gatersleben** hat RDMO als Forschungsdatenmanagement-Werkzeug aus der Testphase in die Anwendungsphase überführt. Falls Sie **FDM-Schulungen mit dem Einsatz von RDMO** planen, teilen Sie uns die Termine mit, dann können wir sie mitbewerben (z. B. Twitter, Newsletter) und teilen Sie uns auch gerne Ihr Feedback und Erfahrungsberichten aus den Schulungen bzw. Schulungsmaterialien mit.

<b>April 2019</b>
Die neue **Version 0.14** ist veröffentlicht. Die größten Neuerungen sind die Umstellung auf Django 2.2 und Python 3 (ab dieser Version funktioniert RDMO mit Python 2 nicht mehr!) und die Überarbeitung der API und Erweiterung auf Schreibzugriffe. Ab Django 2.1 werden ältere Versionen von MySQL und PostgreSQL nicht mehr unterstützt. Bitte schauen Sie vor dem Update in die [Django release notes](https://docs.djangoproject.com/en/2.2/releases/2.1/) um Überraschungen zu vermeiden. Außerdem soll eine **Plattform für den Austausch von Fragenkatalogen** geschaffen werden. Sie können uns Fragenkataloge, die Sie gerne teilen möchten, zukommen lassen.

<b>März 2019</b>
Die neue RDMO-Version 0.13 ist veröffentlicht. Die größte Neuerung ist die Überarbeitung der Mehrsprachigkeit. RDMO lässt sich jetzt mit bis zu 5 Sprachen verwenden. Auch eine Instanz nur auf Englisch ist möglich. RDMO war diesen Monat auf zwei Veranstaltungen vertreten: beim 7. Bibliothekskongress 2019 (Leipzig) mit einem RDMO Hands-On Lab und den eScience-Tagen 2019 in Heidelberg mit einem Poster, einem Demotisch und einem Lightning Talk.

<b>Februar 2019</b>
Im Februar fand das reguläre Treffen der RDMO-Projektgruppe in Berlin statt. Es gab intensive Diskussionen zur Nachhaltigkeit. Es wurde beschlossen, am 07.10.2019 ein RDMO-Anwendertreffen an der ULB Darmstadt zu organisieren. Auf der **RDA Deutschland Tagung** war das RDMO-Projekt mit einem [Poster](https://www.rda-deutschland.de/events/rda-deutschland-tagung-2019-poster) vertreten.

<b>Januar 2019</b>

Wir veröffentlichen **Version 0.12.0** von RDMO mit verbessertem Fehlermanagament, einer Schaltfläche für den URI Präfix und der Möglichkeit Nutzerprofile zu löschen. Es wurden zwei neue **[Screencasts](/materialien/)** veröffentlicht. Wir sammeln *Fragenkataloge und Ansichten* ein. *Janine Straka* vom RMDO-Team geht ab Februar in Mutterschutz und anschließend in die Elternzeit. Die Vertretung übernimmt ab März *Ulrike Wuttke*.

<b>Dezember 2018</b>

Es steht nun fest, dass *Jochen Klar* das AIP verlassen wird, aber auch zukünftig eng mit dem RDMO-Team zusammenarbeiten wird. Weitere Screencasts sind in Arbeit.

<b>November 2018</b>

Wir veröffentlichen **Version 0.11.0** von RDMO mit dem neuen *Datenmodell*. Mit dem neuen Aufbau wird es möglich sein, unkompliziert eigene Fragenkataloge zu erstellen und gleichzeitig das Domänenmodell der ganzen RDMO Community zu nutzen, um Ansichten, Fragenkataloge, etc. nachzunutzen. Wir haben auch unsere Dokumentation überarbeitet und um die neuen Arbeitsschritte ergänzt.

Außerdem haben wir die **Unterabschnitte des Fragenkatalogs entfernt** und die Fragensets so umgestaltet, dass sie jetzt immer einer Seite im Interview entsprechen, einen eigenen Titel haben und in der kleinen Übersicht auf der Seite auftauchen.
Wir waren zu Gast beim **Open Science Forum in [Luxemburg](https://openscience2018.uni.lu/)** und haben dort über FDM in den Digital Humanities referiert. Dabei kam auch RDMO in einer Hands-On Session zum Einsatz. Die Materialien hierzu sind auf Zenodo veröffentlicht.
Wir haben außerdem einen ersten **[Screencast](/materialien/)** auf unserer Webseite veröffentlicht. Es werden zeitnah weitere folgen.


<b>Oktober 2018</b>

Am 24.10. präsentierten wir ein RDMO-Poster bei der **[International Open Access Week 2018](http://www.open-access-berlin.de/aktivitaeten)** in Berlin.
Außerdem haben wir unsere **Werbepostkarte** überarbeitet und es gibt jetzt auch eine englische [Version](/en/promotion/).


<b>September 2018</b>

Anfang September fand unser erstes, großes Community-Treffen an der Universität Duisburg-Essen mit regem Austausch statt. Hier gibt es einen Bericht: http://www.forschungsdaten.org/index.php/Erstes_Community-Treffen Mitte September hatten wir einen lokalen Workshop an der SLUB Dresden veranstaltet, wo RDMO noch recht neu ist. Ende September fand unser zweites Projekttreffen der zweiten Projektphase in Karlsruhe statt.
Für die Weiterentwicklung von RDMO haben wir einen Fahrplan für die nächsten großen Features festgelegt:

2018:

 * Finalisierung Import/Export
 * Ausbau der API und RDMO-Anbindung an andere Beispielsoftware
 * Release mit neuem Datenmodell

2019:

 * Implementierung von rollenbezogenen, projektübergreifenden Ansichten
 * Weiterentwicklung der kollaborativen Funktionen von RDMO durch die Möglichkeit zur Kommentierung und Versionierung von Eingaben.
 * Diff--Funktion von Snapshots
 * Echte Mehrsprachigkeit
 * Mandantenfähigkeit

<b>August 2018</b>

Im August haben wir die letzten Vorkehrungen für unser erstes, großes **Community-Treffen** getroffen, welches in der Universität Duisburg-Essen statt finden wird. Wir haben auch auf Anfrage einen aktuellen **[Foliensatz](/materialien/)** entworfen, den Sie gerne nachnutzen und für Ihre Bedarfe anpassen können. Außerdem steht im September auch unser nächstes Projekttreffen an.

<b>Juli 2018</b>

Im Juli haben wir dank diverser Diskussionen mit der Community beschlossen eine eingeschränkte **Mandantenfähigkeit** in RDMO umzusetzen, allerdings voraussichtlich erst im nächsten Jahr. Wir arbeiten intensiv an dem Refractoring des **Datenmodels** und werden bald davon berichten. Außerdem gibt es jetzt zwei **[Videos](/materialien/
)** zu RDMO, die Sie gerne nachnutzen dürfen.

<b>Juni 2018</b>

Im Juni haben wir die Webseite mit Untermenüs versehen, um eine höhrere Übersichtlichkeit zu gewährleisten. So wurde beispielsweise das Thema **[Datenschutz]({{ site.baseurl}}/schutz)** hinzugefügt. Es gibt jetzt eine **Kurzanleitung** zu den Import- und Exportfunktionen: http://www.forschungsdaten.org/index.php/Import_Export . Am 13.06. haben wir ein *[Vortrag](/vorträge/)* über RMDO beim 107. Bibliothekartag gehalten.


<b>April & Mai 2018</b>

Im April haben wir intensiv daran gearbeitet die **Import- und Exportfunktionen** zu verbessern, so dass wir Anfang Mai eine neue RDMO-Version herausbringen konnten. Kleinere Bug-Fixes wurden auch vorgenommen, so dass die aktuelle **Release-Nummer 0.10.2** lautet. Außerdem gibt es jetzt einen **[Flyer]({{site.baseurl}}/materialien)**, den Sie gerne abwandeln und für ihr Institut anpassen dürfen, um so für ihre RDMO-Instanz Werbung zu machen.
Das Thema Datenschutzes (Stichwort DSGVO) hat uns veranlasst eine Vorschaltseite für die Nutzungsbedingungen einzubauen und ist seit der **Version 0.10.3.** verfügbar.

<b>März 2018</b>

In diesem Monat waren wir sowohl auf der Open Science Conference 2018 als auch auf dem 11. RDA Plenary vertreten und haben einige anregende Diskussionen geführt. Ein großes Thema sind sogenannte Machine-Actionable DMP (**maDMP**), also machinell auswertbare DMP. In RDMO haben wir von Anfang an die Unterstützung des Workflows während des gesamten Projekts und die Einbindung in Infrastrukturen zum Ziel und sind daher quasi Vorreier auf diesem Gebiet.
Derzeitige Arbeitsschwerpunkte sind unsere *Softwarearchitektur* bei der wir einen einheitlichen Standard anstreben, weiterhin Vorlagen für *Nutzungsbedingungen* und *Datenschutz* und außerdem stehen jetzt eine [**Postkarte**, ein **Poster** und  **Vortragsfolien**]({{site.baseurl}}/materialien) für die Nachnutzung für Sie zur Verfügung.

<b>Februar 2018</b>

Die aktuellen und neuen Mitglieder des RDMO-Projektteams kamen am 8. und 9. Februar 2018  zum **Kickoff-Meeting**
am Leibniz-Institut für Astrophysik Potsdam (AIP) zusammen.

Nach einer kurzen Vorstellungrunde machten wir uns ans Werk und einigten uns auf einen **Arbeitsplan** für die nächsten 6 Monate:

* RDMO wird auch in Zukunft bei **Workshops und Konferenzen** Präsenz zeigen. Als nächstes werde wir bei der [Open Science Conference](https://www.open-science-conference.eu/) und dem [RDA Plenary Meeting](https://www.rd-alliance.org/plenaries/rda-eleventh-plenary-meeting-berlin-germany) im März vor Ort sein. Beide Konferenzen finden in Berlin statt.
* Außerdem identifizierten wir dringend benötigte **Features** und priorisierten ihre Implementation. Wir planen den oft gewünschten verbesserten Import/Export im nächsten Monat zu implementieren. Danach werden wir uns um ein verbessertes Management-Interface kümmern. Dies wird auch die Möglichkeit umfassen, Fragenkataloge, Abschnitte usw. kopieren und verschieben zu können. Es folgen die Anbindung an externe Software über Plugins und die Integration von APIs, z.B. re3data.org.
* Wir werden weiter an **Tutorials und Schulungs- sowie Outreachmaterialien** arbeiten.
* Die meisten Institutionen, die den Einsatz von RDMO planen, müssen eine **Verfahrensbeschreibung für den Datenschutz** und **Nutzungsbedingungen** (unter Einschluss von Datenschutzgesichtspunkten) formulieren. Wir planen dies durch das Bereitstellen von Vorlagen auf unserer Weibseite zu unterstützen.


<b>Januar 2018</b>

Wir begrüßen unsere neuen **Teammitglieder** Kerstin Vanessa Wedlich (KIT) and Olaf Michaelis (AIP). Während Kerstin sich um die intergration von RDMO in [forschungsdaten.info](http://www.forschungsdaten.info) kümmern wird, wird Olaf die Software weiterentwickeln und den technischen Support unterstützen.

Unsere ersten beiden **Tutorials** zu ["Wie erstelle ich einen Fragenktalog in RDMO?"](http://www.forschungsdaten.org/index.php/Katalog_erstellen) und ["Wie erstelle ich eine Ansicht in RDMO?"](http://www.forschungsdaten.org/index.php/Ansicht_erstellen) wurden veröffentlicht. Eine Seite für [häufig gestellte Fragen (FAQ)](http://www.forschungsdaten.org/index.php/FAQs) ist jetzt ebenfalls verfügbar.

Ein neuer **Fragenkatalog für den Schweizer Nationalfonds (SNF)** wurde erstellt und kann auf [GitHub](http://www.github.com/rdmorganiser/rdmo-catalog) herruntergeladen werden.





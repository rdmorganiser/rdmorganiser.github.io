---
layout: page

key: news
lang: de
---

Aktuelles
========

Auf dieser Seite fassen wir komprimiert unsere Aktivitäten zusammen. Um immer auf dem neuesten Stand zu bleiben, abonnieren Sie bitte unsere [Mailingliste](https://www.listserv.dfn.de/sympa/info/rdmo) oder folgen Sie uns auf [Twitter](https://www.twitter.com/rdmorganiser).

RDMO Arbeitsgemeinschaft
------------------------


Die [Arbeitsgemeinschaft RDMO]({{ siteurl }}/rdmo_arge) hat sich mit der Veranstaltung am 07.10.2020 konstituiert. Sie ruft die Anwender von RDMO auf, sich auf der Grundlage des [Memorandum of Understanding (MoU)]({{ siteurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) an der Weiterarbeit zu beteiligen. 


Reguläre RDMO  Zoom Termine: 11:00h -12:00h
-------------------------------------
(Stand: Dezember 2020)

Allgemeiner JourFixe: jeder 1. Donnerstag im Monat

Content Gruppe: jeder 2. Donnerstag im Monat

Software Gruppe: jeder 3. Donnerstag im Monat

Bitte die RDMO Arbeitsgemeinschaft kontaktieren fuer die Zoom-Verbindungsinformation. Interessierte sind herzlich willkommen.



November 2020
-------------

Regelmäßige virtuelle Treffen der Content-Gruppe und der Software-Gruppe

Die Content-Gruppe trifft sich ab jetzt jeden 2. Donnerstag im Monat von 11-12h. Das Treffen findet via Zoom statt und wird per E-mail und Slack erneut angekündigt. Immer eine Woche später, also am 3. Donnerstag im Monat, trifft sich in gleicher Form die Software-Gruppe. Beide Treffen sind für alle Interessierten offen.

Community-Treffen 07.10.2020

Unser 4. Community-Treffen hat am 07.10.2020 virtuell mit ca. 60 Teilnehmerinnen und Teilnehmern stattgefunden.   Der ausführliche Bericht ist auf Forschungdaten.org   (https://www.forschungsdaten.org/index.php/Viertes_Community-Treffen) zu finden, nebst den meisten Folien, die präsentiert und diskutiert wurden. 

Oktober 2020
------------

Zunächst wollen wir vor allem noch einmal auf das geplante virtuelle RDMO Anwender-Treffen am 07.10.2020 hinweisen. Ein detailliertes [Programm](https://rdmorganiser.github.io/events/workshop022020_programm/) ist auf der RDMO-Webseite veröffentlicht. Die Keynote wird von Herrn Sure-Vetter (NFDI-Direktor) gehalten. Außerdem wird das RDMO Memorandum of Understanding (MoU) ausführlich vorgestellt. Bitte melden Sie sich bis zum 04.10.2020 für das Anwender-Treffen auf der [Registrierungsseite](https://meetings.aip.de/event/9/) an.

In der kommenden Woche wird noch vor dem Anwender-Treffen das RDMO-Release 1.3 erscheinen. Es wird einige Neuerungen enthalten, von denen hier nur ausschnittsweise ein paar genannt werden sollen. So wird es neben einigen Bug-Fixes kleinere Verbesserungen an der Nutzeroberfläche, eine erweiterte Konfigurierbarkeit von Referenz-Dokumenten und Erleichterungen beim Anpassen des Footers. Außerdem ist RDMO dank der Arbeit von Dario Pilori und Giacomo Lanza mit dem nächsten Release auch in italienischer Sprache nutzbar. Eine der größeren Veränderungen betrifft die Überarbeitung von Tasks, die in ihrer Funktionalität deutlich erweitert wurden.

September 2020
--------------

Auch in diesem Monat waren wir nicht untätig und haben heute Version 1.2 von RDMO veröffentlicht. In den Management-Oberflächen können nun Elemente wie Optionen, Attribute, aber auch ganze Fragenkataloge direkt kopiert werden. Kataloge, Aufgaben und Ansichten können von den Nutzenden verborgen werde (z.B. so lange noch an ihnen gearbeitet wird). Attribute und Bedingungen zeigen an, in welchen Fragen, Fragensets, etc. sie genutzt werden. Elemente können jetzt auch einzeln exportiert werden, z.B. ein Fragenset oder eine Ansicht. Auch den Import haben wir neu gestaltet. Vor dem eigentlichen Import wird jetzt angezeigt was importiert wird und ob es Probleme dabei gibt. Außerdem können einzelne Elemente abgewählt werden. Nach dem Import wird noch einmal gezeigt was importiert wurde und ob es Fehler gegeben hat.

Auch einige Fehler wurden mit dem neuen Release behoben. Viele von ihnen betrafen Übersetzungen. RDMO ist nun besser auf fehlende Texte vorbereitet, sollten diese in der gewählten Sprache nicht verfügbar sein. In diesen Fällen wird auf die vorhandene Sprache zurückgegriffen. Views wurden um vier verfügbare Variablen erweitert. Die Funktion “render_value” kann nun mit “project/title”, “project/description”, “project/created” und “project/updated” verwendet werden.


August 2020
-----------

In der neuen RDMO-Version 1.1 haben wir die Projekt Export- und Import-Funktionalitäten überarbeitet. Damit sind die Grundlagen gelegt, Formate wie DataCite, das von DataCite abgeleitete Schema von RADAR und auch das von der RDA vorgeschlagene [maDMP](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) in RDMO zu unterstützen. Da das Mapping von RDMO auf diese Formate aber abhängig von unserem Domänenmodell ist, das aber wiederum kein Teil des RDMO-Codes ist, sondern unabhängig gepflegt wird, war es nötig den Code hierfür in Plugins auszulagern. Diese werden in der Zukunft, analog zu dem [rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog) Repository, in [rdmo-plugins](https://github.com/rdmorganiser/rdmo-plugins) gesammelt. Das “Mapping” der Formate auf das RDMO Domänenmodell passiert im Code dieser Plugins, wurde von uns aber zusätzlich in einem [Google-Doc](https://docs.google.com/spreadsheets/d/16fQ0Rgg-2ewMK9FklEjU8pAcpHODEm7PYy6xDCninew/edit?usp=sharing) dokumentiert. Für die vollständige Unterstützung wird es aber noch nötig sein, zusätzliche Fragen und Attribute einzuführen.

In der Zukunft wollen wir diese Art von Plugins verstärkt nutzen, um Domänenspezifische Features in RDMO zu realisieren und natürlich können Plugins auch von Instanzen genutzt werden, um stärker angepasste Funktionalitäten zu realisieren. Die Details gibt es in der [Plugin Dokumentation](https://rdmo.readthedocs.io/en/latest/configuration/plugins.html).

Juli 2020
---------
Die neue Version 1.0.7 von RDMO beinhaltet als Neuerungen 1) Multi-Site-Setup: Betreiben verschiedener RDMO-Seiten mit unterschiedlichen URLs und Themes auf einem Server mit einer gemeinsamen Datenbank (mehr unter [https://rdmo.readthedocs.io/en/latest/configuration/multisite.html](https://rdmo.readthedocs.io/en/latest/configuration/multisite.html)); 2) Bestimmte User können jetzt über das Admin-Interface zu Site-Managern gemacht werden (mehr unter [https://rdmo.readthedocs.io/en/latest/administration/users.html#roles](https://rdmo.readthedocs.io/en/latest/administration/users.html#roles)); 3) RDMO steht ab sofort in französischer Sprache zu Verfügung (Texte in der Software selbst, RDMO-Fragenkatalog sowie die ihm anhängigen Optionen und einige andere Bezeichner und Hilfetexte), die entsprechenden XML-Dateien stehen über das Catalog-Repository zur Verfügung;  4) die Nutzungsbedingungen sind nun über eine eigene URL verfügbar. Außerdem ist sind die Aufzeichnung und Folien der Präsentation des RDMO-Teams “Datenmanagementpläne mit RDMO” für das Projekt FDM-BB nun verfügbar unter: [https://mediaup.uni-potsdam.de/Play/19500](https://mediaup.uni-potsdam.de/Play/19500).

Juni 2020
---------
Im Mai haben wir die erste virtuelle RDMO-Sprechstunde durchgeführt. Aus dem Gespräch ergab sich die Bitte, Bedarfe möglichst als GitHub-Issues, als dauerhaftesten und am besten nachvollziehbaren Workflow anzulegen. Für Fragen zum Anlegen von Issues kontaktieren Sie uns am besten im RDMO-Slack oder über Email. Das RDMO-Team hat vom 27.-28.05.2020 am [virtuellen “RDA Hackathon on maDMP”](https://rda-dmp-common.github.io/hackathon-2020/) teilgenommen und an der Interoperabilität von RDMO mit dem [maDMP Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) gearbeitet. Das Ergebnis ist ein Plugin, in dem das Mapping stattfindet und ein Export zum maDMP JSON-Format erstellt wird. Außerdem präsentierte das RDMO-Team “Datenmanagementpläne mit RDMO” am 08.06.2020 in einem vom Projekt FDM-BB (Universität Potsdam, Fachhochschule Potsdam) organisierten Webinar.

Mai 2020
--------
RDMO ist nun in Version 1.0.6 verfügbar. Mit der neuen Version ist es möglich, in Ansichten einfache mathematische Berechnungen durchzuführen z. B. für einfache tabellarische Zusammenfassung der anfallenden Personal- und Sachkosten. Nähere Erläuterungen im [Tutorial](https://www.forschungsdaten.org/index.php/Ansicht_erstellen) und in der [technischen Dokumentation](https://rdmo.readthedocs.io/en/latest/management/views.html). Seit Mai gibt es jeden ersten Donnerstag des Monats (außer an Feiertagen) für Mitglieder der RDMO-Community (DatenmanagerInnen, AdministratorInnen etc.) eine “virtuelle RDMO-Sprechstunde”. Details im [RDMO-Newsletter](https://www.listserv.dfn.de/sympa/info/rdmo). Außerdem hat die Steuerungsgruppe beschlossen, dass RDMO als Open Source Projekt ab sofort RDMO Arbeitsgemeinschaft heißt und bereitet ein Memorandum of Understanding vor, auf dessen Grundlage die Beteiligung an der Weiterführung von RDMO von Institutionen und Organisationen erfolgen wird. Die Mitglieder der Gruppen der Arbeitsgemeinschaft sind unter [https://rdmorganiser.github.io/groups/](https://rdmorganiser.github.io/groups/) zu finden.

April 2020
----------
RDMO Release 1.0.5 (Bug Fixes, u. a. Login mit ORCID, Fehler beim Download der Vendor Files, Darstellung von Sets in Views). Ein Update ist empfohlen. Siehe die Dokumentation bzgl. der für die ORCID notwendigen neuen Einträge in der local.py. Der Bericht des 3. RDMO-Anwendertreffens ist [online](https://www.forschungsdaten.org/index.php/Drittes_Community-Treffen). Ab Mai 2020 gibt es eine “virtuelle RDMO Sprechstunde”, bitte [kontaktieren](https://rdmorganiser.github.io/) Sie uns für Details. Wir haben den [“DFG-Fragenkatalog” vom Projekt FoDaKo, Bergische Universität Wuppertal (Torsten Rathmann) (CC0)](https://github.com/rdmorganiser/rdmo-catalog/tree/master/shared/fodako) in die AIP-Demo-Instanz eingepflegt und nehmen weiterhin Kataloge aus der Community in das GitHub Repository auf: entweder einen Pull-Request auf GitHub erstellen oder die XML-Dateien per Mail an omichaelis@aip.de senden. Besonders hilfreich für die Nachnutzung sind die zusätzliche Bereitstellung einer Read.me-Datei bzw. Dokumentation zum jeweiligen Katalog.

März 2020
------------

Im Februar fand das dritte RDMO-Anwendertreffen statt. Es war fokussiert auf die Etablierung einer Governance-Struktur für die Weiterführung von RDMO, unabhängig von dem in diesem Jahr endenden DFG-Projekt, das die Grundlage für RDMO geschaffen hat. Ein Block von Kurzvorträgen, die den Kontext im europäischen (Horizon Europe) und nationalen Raum (NFDI) skizzierten, wie auch einige Weiterentwicklungsaspekte von RDMO, reflektierte die gegenwärtige Situation. [Vorträge und Programm](https://rdmorganiser.github.io/workshop022020_programm/). Das vom Projekt vorgelegte Manifest und weitere Beiträge haben in der Etablierung einer Steuerungsgruppe mit  6+ Personen, einer  Softwaregruppe mit 3+ Personen sowie einer Content-Gruppe mit 6+ Personen resultiert. Die Steuerungsgruppe wurde damit beauftragt, die Governance-Struktur weiter auszuarbeiten und ein MoU für RDMO auszuarbeiten, um den formalen Rahmen für RDMO zu festigen. Weitere Schritte werden über die Website und Mails bekannt gemacht. Während der [RDA-De-Tagung](https://www.rda-deutschland.de/events/tagung-2020) haben Olaf Michaelis und Ulrike Wuttke am Vormittag des 25.02.2020 im Rahmen des Project-Tracks einen RDMO-Workshop angeboten. Während des gut besuchten Workshops, in dem die wichtigsten Features und weitere Entwicklungsmöglichkeiten des Werkzeugs vorgestellt wurden, und im weiteren Verlauf der Konferenz freuten wir uns über intensiven Austausch zu RDMO. Das starke Interesse an RDMO in der deutschen Community wurde insbesondere aus den Präsentationen der Bundesland-FDM-Initiativen deutlich.

Februar 2020
------------
Diesen Monat gab es [RDMO-Release 1.0.3.](https://github.com/rdmorganiser/rdmo/releases/tag/1.0.3) Es enthält einige Verbesserungen und behebt kleinere Fehler. Es stehen neue API-Filter-Attribute zur Verfügung, die Schnittstellen flexibler machen. Sie werden es unter anderem erleichtern, einen Satz an Antworten zu exportieren und diesem anschließend die entsprechenden Fragen zuzuordnen, da Fragen nun beispielsweise mit dem Parameter “attribute” über die API lokalisiert werden können. Außerdem nutzt RDMO nun “pytest”, mit dem auch die [RDMO-App getestet werden kann](https://github.com/rdmorganiser/rdmo/blob/master/docs/testing.md). Im Januar war RDMO beim [Workshop der DHd-AG Datenzentren am 23./24.01.2020 in Frankfurt an Main](http://dig-hum.de/aktuelles/einladung-zum-workshop-der-dhd-ag-datenzentren-zum-thema-interoperabilit%C3%A4t-am-2324012020) vertreten. Ulrike Wuttke und Olaf Michaelis haben die bisher im Projekt erfolgten Anstrengungen vorgestellt, RDMO Datacite kompatibel zu machen. Der Beitrag “Vom Projekt zum nachhaltigen Werkzeug für das Forschungsdatenmanagement: Das Beispiel Research Data Management Organiser” wurde zum [109. Deutschen Bibliothekartag](https://bibliothekartag2020.de) (26. - 29. Mai 2020, Hannover) angenommen.

Januar 2020
-----------
Im Mittelpunkt des inzwischen 3. RDMO-Community-Treffens am 24.02.2020 am Leibniz-Institut für Astrophysik Potsdam (AIP) werden die Verabschiedung des [RDMO-Manifests](https://rdmorganiser.github.io/docs/RDMO-Manifest-122019.pdf) und die Gründung der RDMO Community, insbesondere die Konstituierung der *Steuerungsgruppe* und der *Software-Gruppe* stehen. Außerdem sind wieder kurze *Spotlights* aus der Community der RDMO-Anwender\*innen vorgesehen. Link zum [Programm](https://rdmorganiser.github.io/workshop022020_programm/). Während der an das Community-Treffen anschließenden [RDA-De-Tagung](https://www.rda-deutschland.de/events/tagung-2020) werden wir am Vormittag des 25.02.2020 einen RDMO-Workshop anbieten. Die Registrierung ist inzwischen möglich.

Dezember 2019
-------------
Keine Meldungen

November 2019
-------------
Diesen Monat haben wir einige Aktualisierungen und Umgestaltungen an den RDMO-Schulungsmaterialien vorgenommen. Sie finden Schulungsmaterialien wie Video-Tutorials oder den RDMO-Fragenkatalog auf der RDMO-Webseite unter [Dokumentation](https://rdmorganiser.github.io/dokumentation/). Weitere Tutorials, FAQs etc. für verschiedene Zielgruppen (Administrator*innen, Nutzer*innen) finden Sie auf dem Wiki [forschungsdaten.org](https://www.forschungsdaten.org/index.php/RDMO). Das 3. Anwendertreffen wird am 24.02.2020 in Potsdam am AIP stattfinden. Dort ist die Konstituierung der künftigen Organisation von RDMO geplant.

Oktober 2019
------------
RDMO hat den Sprung auf Version 1 gemacht. Die neueste Version enthält zwei wichtige Neuerungen, die die Projektzugehörigkeit von Nutzern betreffen. Zum einen kann diese nun über die API gesteuert werden und zum anderen können Nutzer sich nun selbst jederzeit aus einem Projekt entfernen, wenn sie nicht der letzte Besitzer dieses Projektes sind. Der Bericht vom 2. RDMO-Anwendertreffen am 07.10.2019 in Darmstadt an der ULB ist [online](https://www.forschungsdaten.org/index.php/Zweites_Community-Treffen). Außerdem haben wir RDMO bei den Open Access Tagen in Hannover präsentiert sowie die Schulungsmaterialien zu RDMO bei einem Workshop in Hildesheim ([Folien online auf Zenodo](http://doi.org/10.5281/zenodo.3520839)).  

September 2019
--------------
Am 27.09.2019 fand in Berlin das halbjährliche Treffen des RDMO-Projekts statt. Es gab intensive Diskussionen zum Thema Nachhaltigkeit und zur weiteren Entwicklung von RDMO. Außerdem wurden die letzten Details für das nächste RDMO-Anwendertreffen in Darmstadt geklärt.

August 2019
-----------
Das diesjährige [**RDMO-Anwendertreffen** findet am 07.10.2019 an der ULB Darmstadt](https://rdmorganiser.github.io/workshop2019/) statt. Studenten “Data Stewardship” der TU Wien haben einige Prototypen, Mappings und Beispiele entwickelt mit Hinsicht auf den Export von machine-actionable Data Management Plans aus einer RDMO-Instanz nach dem [**RDA-Standard für maDMPs**](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard). Mehr Informationen finden sich [hier](https://helmuthb.github.io/dmp-tools-actionable/). Diese Entwicklungen stehen im Kontext zu Bestrebungen des RDMO-Projekts, mit RDMO erstellte DMPs mit dem maDMP-Standard interoperabel zu machen. Außerdem ist die neue [**RDMO-Version 0.14.6**](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.6) verfügbar (kleine Änderungen, Bugfix).

Juli 2019
---------
Im letzten Monat haben wir ein paar kleinere Bugs in RDMO gefunden und beseitigt. Insbesondere hat der Installationsvorgang durch ein Update bei einer von uns verwendeten Bibliothek nicht mehr funktioniert. Die Änderungen sind in der [**neuen Version 0.14.5** auf Github](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.5) enthalten, die wie üblich installiert werden kann.

Juni 2019
---------
Wir haben den **DCC-Fragenkatalog**, dessen Import nicht korrekt funktionierte, repariert. Die aktualisierte Version ist auf GitHub. Er enthält zehn neue Attribute, die dem Domänenmodell hinzugefügt wurden. Daher sollte vor dem Einlesen des Katalogs erst das Domänenmodell importiert werden. Der Import der aktuellen XML-Datei kann ohne vorbereitende Schritte erfolgen. Bereits importierte Daten bleiben erhalten und werden lediglich um die fehlenden zehn Einträge ergänzt. Außerdem gibt es nun eine **weitere Methode, RDMO zu installieren oder auch schnell auszuprobieren**. Auf GitHub befindet sich eine Version RDMOs, die in Docker Compose verpackt ist. Wir würden uns über weitere Anregungen freuen, um auch diesen RDMO-Installationsweg weiter zu verbessern. Mit Beginn des Monats Juli wird Olaf Michaelis bis Anfang Oktober in Elternzeit gehen. RDMO wird in den drei Monaten seiner Abwesenheit natürlich trotzdem weiter betreut und entwickelt, wenn auch mit etwas weniger Personal.

Mai 2019
--------
RDMO **Version 0.14.4** (Bug Fixes) ist verfügbar. Probleme, die durch die Umstellung auf Django2 und Python3 verursacht wurden, sollten nun beseitigt sein. Ein Update wird wärmstens empfohlen, da Python2 nicht mehr lange unterstützt wird. Im Mai hat der Kick-Off des Projekts [**»Management Molekularer Daten im Research Data Life Cycle« (MaMoDaR)**](https://www.fh-potsdam.de/informieren/aktuelles/news-detailansicht/artikel/start-fuer-forschungsprojekt-mamodar/), eine Kooperation der FH Potsdam und des Robert Koch-Instituts, an der FHP stattgefunden und das **IPK Gatersleben** hat RDMO als Forschungsdatenmanagement-Werkzeug aus der Testphase in die Anwendungsphase überführt. Falls Sie **FDM-Schulungen mit dem Einsatz von RDMO** planen, teilen Sie uns die Termine mit, dann können wir sie mitbewerben (z. B. Twitter, Newsletter) und teilen Sie uns auch gerne Ihr Feedback und Erfahrungsberichten aus den Schulungen bzw. Schulungsmaterialien mit.

April 2019
----------
Die neue **Version 0.14** ist veröffentlicht. Die größten Neuerungen sind die Umstellung auf Django 2.2 und Python 3 (ab dieser Version funktioniert RDMO mit Python 2 nicht mehr!) und die Überarbeitung der API und Erweiterung auf Schreibzugriffe. Ab Django 2.1 werden ältere Versionen von MySQL und PostgreSQL nicht mehr unterstützt. Bitte schauen Sie vor dem Update in die [Django release notes](https://docs.djangoproject.com/en/2.2/releases/2.1/) um Überraschungen zu vermeiden. Außerdem soll eine **Plattform für den Austausch von Fragenkatalogen** geschaffen werden. Sie können uns Fragenkataloge, die Sie gerne teilen möchten, zukommen lassen.

März 2019
---------
Die neue RDMO-Version 0.13 ist veröffentlicht. Die größte Neuerung ist die Überarbeitung der Mehrsprachigkeit. RDMO lässt sich jetzt mit bis zu 5 Sprachen verwenden. Auch eine Instanz nur auf Englisch ist möglich. RDMO war diesen Monat auf zwei Veranstaltungen vertreten: beim 7. Bibliothekskongress 2019 (Leipzig) mit einem RDMO Hands-On Lab und den eScience-Tagen 2019 in Heidelberg mit einem Poster, einem Demotisch und einem Lightning Talk.

Februar 2019
------------
Im Februar fand das reguläre Treffen der RDMO-Projektgruppe in Berlin statt. Es gab intensive Diskussionen zur Nachhaltigkeit. Es wurde beschlossen, am 07.10.2019 ein RDMO-Anwendertreffen an der ULB Darmstadt zu organisieren. Auf der **RDA Deutschland Tagung** war das RDMO-Projekt mit einem [Poster](https://www.rda-deutschland.de/events/rda-deutschland-tagung-2019-poster) vertreten.

Januar 2019
-----------

Wir veröffentlichen **Version 0.12.0** von RDMO mit verbessertem Fehlermanagament, einer Schaltfläche für den URI Präfix und der Möglichkeit Nutzerprofile zu löschen. Es wurden zwei neue **[Screencasts](https://rdmorganiser.github.io/materialien/)** veröffentlicht. Wir sammeln *Fragenkataloge und Ansichten* ein. *Janine Straka* vom RMDO-Team geht ab Februar in Mutterschutz und anschließend in die Elternzeit. Die Vertretung übernimmt ab März *Ulrike Wuttke*.

Dezember 2018
-------------

Es steht nun fest, dass *Jochen Klar* das AIP verlassen wird, aber auch zukünftig eng mit dem RDMO-Team zusammenarbeiten wird. Weitere Screencasts sind in Arbeit.

November 2018
-------------

Wir veröffentlichen **Version 0.11.0** von RDMO mit dem neuen *Datenmodell*. Mit dem neuen Aufbau wird es möglich sein, unkompliziert eigene Fragenkataloge zu erstellen und gleichzeitig das Domänenmodell der ganzen RDMO Community zu nutzen, um Ansichten, Fragenkataloge, etc. nachzunutzen. Wir haben auch unsere Dokumentation überarbeitet und um die neuen Arbeitsschritte ergänzt.

Außerdem haben wir die **Unterabschnitte des Fragenkatalogs entfernt** und die Fragensets so umgestaltet, dass sie jetzt immer einer Seite im Interview entsprechen, einen eigenen Titel haben und in der kleinen Übersicht auf der Seite auftauchen.
Wir waren zu Gast beim **Open Science Forum in [Luxemburg](https://openscience2018.uni.lu/)** und haben dort über FDM in den Digital Humanities referiert. Dabei kam auch RDMO in einer Hands-On Session zum Einsatz. Die Materialien hierzu sind auf Zenodo veröffentlicht.
Wir haben außerdem einen ersten **[Screencast](https://rdmorganiser.github.io/materialien/)** auf unserer Webseite veröffentlicht. Es werden zeitnah weitere folgen.


Oktober 2018
------------

Am 24.10. präsentierten wir ein RDMO-Poster bei der **[International Open Access Week 2018](http://www.open-access-berlin.de/aktivitaeten/oa-week-2018)** in Berlin.
Außerdem haben wir unsere **Werbepostkarte** überarbeitet und es gibt jetzt auch eine englische [Version](https://rdmorganiser.github.io/en/promotion/).


September 2018
--------------

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

August 2018
-----------

Im August haben wir die letzten Vorkehrungen für unser erstes, großes **Community-Treffen** getroffen, welches in der Universität Duisburg-Essen statt finden wird. Wir haben auch auf Anfrage einen aktuellen **[Foliensatz](https://rdmorganiser.github.io/materialien/)** entworfen, den Sie gerne nachnutzen und für Ihre Bedarfe anpassen können. Außerdem steht im September auch unser nächstes Projekttreffen an.

Juli 2018
---------

Im Juli haben wir dank diverser Diskussionen mit der Community beschlossen eine eingeschränkte **Mandantenfähigkeit** in RDMO umzusetzen, allerdings voraussichtlich erst im nächsten Jahr. Wir arbeiten intensiv an dem Refractoring des **Datenmodels** und werden bald davon berichten. Außerdem gibt es jetzt zwei **[Videos](https://rdmorganiser.github.io/materialien/
)** zu RDMO, die Sie gerne nachnutzen dürfen.

Juni 2018
----------

Im Juni haben wir die Webseite mit Untermenüs versehen, um eine höhrere Übersichtlichkeit zu gewährleisten. So wurde beispielsweise das Thema **[Datenschutz]({{ site.baseurl}}/schutz)** hinzugefügt. Es gibt jetzt eine **Kurzanleitung** zu den Import- und Exportfunktionen: http://www.forschungsdaten.org/index.php/Import_Export . Am 13.06. haben wir ein *[Vortrag](https://rdmorganiser.github.io/vorträge/)* über RMDO beim 107. Bibliothekartag gehalten.


April & Mai 2018
-----------------

Im April haben wir intensiv daran gearbeitet die **Import- und Exportfunktionen** zu verbessern, so dass wir Anfang Mai eine neue RDMO-Version herausbringen konnten. Kleinere Bug-Fixes wurden auch vorgenommen, so dass die aktuelle **Release-Nummer 0.10.2** lautet. Außerdem gibt es jetzt einen **[Flyer]({{site.baseurl}}/materialien)**, den Sie gerne abwandeln und für ihr Institut anpassen dürfen, um so für ihre RDMO-Instanz Werbung zu machen.
Das Thema Datenschutzes (Stichwort DSGVO) hat uns veranlasst eine Vorschaltseite für die Nutzungsbedingungen einzubauen und ist seit der **Version 0.10.3.** verfügbar.

März 2018
----------

In diesem Monat waren wir sowohl auf der Open Science Conference 2018 als auch auf dem 11. RDA Plenary vertreten und haben einige anregende Diskussionen geführt. Ein großes Thema sind sogenannte Machine-Actionable DMP (**maDMP**), also machinell auswertbare DMP. In RDMO haben wir von Anfang an die Unterstützung des Workflows während des gesamten Projekts und die Einbindung in Infrastrukturen zum Ziel und sind daher quasi Vorreier auf diesem Gebiet.
Derzeitige Arbeitsschwerpunkte sind unsere *Softwarearchitektur* bei der wir einen einheitlichen Standard anstreben, weiterhin Vorlagen für *Nutzungsbedingungen* und *Datenschutz* und außerdem stehen jetzt eine [**Postkarte**, ein **Poster** und  **Vortragsfolien**]({{site.baseurl}}/Materialien) für die Nachnutzung für Sie zur Verfügung.

Februar 2018
--------------

Die aktuellen und neuen Mitglieder des RDMO-Projektteams kamen am 8. und 9. Februar 2018  zum **Kickoff-Meeting**
am Leibniz-Institut für Astrophysik Potsdam (AIP) zusammen.

Nach einer kurzen Vorstellungrunde machten wir uns ans Werk und einigten uns auf einen **Arbeitsplan** für die nächsten 6 Monate:

* RDMO wird auch in Zukunft bei **Workshops und Konferenzen** Präsenz zeigen. Als nächstes werde wir bei der [Open Science Conference](https://www.open-science-conference.eu/) und dem [RDA Plenary Meeting](https://www.rd-alliance.org/plenaries/rda-eleventh-plenary-meeting-berlin-germany) im März vor Ort sein. Beide Konferenzen finden in Berlin statt.
* Außerdem identifizierten wir dringend benötigte **Features** und priorisierten ihre Implementation. Wir planen den oft gewünschten verbesserten Import/Export im nächsten Monat zu implementieren. Danach werden wir uns um ein verbessertes Management-Interface kümmern. Dies wird auch die Möglichkeit umfassen, Fragenkataloge, Abschnitte usw. kopieren und verschieben zu können. Es folgen die Anbindung an externe Software über Plugins und die Integration von APIs, z.B. re3data.org.
* Wir werden weiter an **Tutorials und Schulungs- sowie Outreachmaterialien** arbeiten.
* Die meisten Institutionen, die den Einsatz von RDMO planen, müssen eine **Verfahrensbeschreibung für den Datenschutz** und **Nutzungsbedingungen** (unter Einschluss von Datenschutzgesichtspunkten) formulieren. Wir planen dies durch das Bereitstellen von Vorlagen auf unserer Weibseite zu unterstützen.


Januar 2018
---------------

Wir begrüßen unsere neuen **Teammitglieder** Kerstin Vanessa Wedlich (KIT) and Olaf Michaelis (AIP). Während Kerstin sich um die intergration von RDMO in [forschungsdaten.info](http://www.forschungsdaten.info) kümmern wird, wird Olaf die Software weiterentwickeln und den technischen Support unterstützen.

Unsere ersten beiden **Tutorials** zu ["Wie erstelle ich einen Fragenktalog in RDMO?"](http://www.forschungsdaten.org/index.php/Katalog_erstellen) und ["Wie erstelle ich eine Ansicht in RDMO?"](http://www.forschungsdaten.org/index.php/Ansicht_erstellen) wurden veröffentlicht. Eine Seite für [häufig gestellte Fragen (FAQ)](http://www.forschungsdaten.org/index.php/FAQs) ist jetzt ebenfalls verfügbar.

Ein neuer **Fragenkatalog für den Schweizer Nationalfonds (SNF)** wurde erstellt und kann auf [GitHub](http://www.github.com/rdmorganiser/rdmo-catalog) herruntergeladen werden.

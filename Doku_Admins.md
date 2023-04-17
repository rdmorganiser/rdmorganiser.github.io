---
layout: page

key: docu_admin
lang: de
---

Software
========

RDMO ist als Webanwendung realisiert und steht als Open-Source Software auf [github.com](https://github.com/rdmorganiser) zur Verfügung. Die Software soll es sowohl einzelnen Forschenden als auch Kooperationspartner erlauben, alle für das nachhaltige Datenmanagement nötigen Informationen zentral einzugeben und zu verwalten. Auf der obersten Ebene werden diese Informationen anhand von durch die Nutzer im jeweiligen Forschungskontext zu definierenden *Projekten* verwaltet.

Die Hauptfunktionalität von RDMO umfasst folgende Features:

Eingabe
-------

Die Eingabe der Informationen zu einem Projekt erfolgt in Form eines strukturierten Interviews über ein interaktives Webinterface. Dies beinhaltet folgende Funktionalitäten:

* Kooperatives Arbeiten der verschiedenen Stakeholder
* Überspringen redundanter Fragen auf Basis bereits gegebener Antworten
* Fortschrittsanzeige der bereits getätigten Eingaben
* Verschiedene Widgets (Schieberegler, Auswahlboxen, Dropdown-Menüs etc.)
* Nutzung von kontrollierten Vokabularen als Antwortoptionen
* Upload von Dokumenten (z. B. Metadatendokumentation, Codebooks u. ä.)
* Einfrieren des Informationsstandes für Projekte zu bestimmten Zeitpunkten mittels Snapshots

Ausgabe
-------

Die eingegebenen Informationen können auf verschiedene Arten abgerufen werden:

* Aggregation der eingegebenen Informationen zu textuellen Ansichten (z. B. strukturiert für Datenmanagementpläne bei Förderanträgen zu Horizon Europe, DFG)
* Zeitliche Übersicht von anstehenden Aufgaben zum Datenmanagement
* Schnittstellen zu externen Services bzw. Datenmodellen

Installation und Betrieb
------------------------

Besonderen Wert legen wir auf die reibungslose Installation und Anpassbarkeit von RDMO durch Institutionen wie Forschungsinstitute, Bibliotheken oder Universitäten. Dies umfasst:

* Vollständige Anpassbarkeit der Oberfläche
    * Corporate Design
    * Layout
* Vollständige Anpassbarkeit der Inhalte
    * Fragen und Antwortmöglichkeiten
    * Hilfe-/Erläuterungstexte inkl. Verlinkung zu externen Informationsquellen
    * Vorlagen für textuelle Datenmanagementpläne
    * Zu erledigende Aufgaben
* Integration in die lokale Infrastruktur
    * Autorisierung und Authentifizierung
    * Schnittstellen

Weiterentwicklung
-----------------

Für die Weiterentwicklung von RDMO nutzen wir einen Roadmap-Prozess, in dem die bestehenden Issues auf GitHub durch die Community priorisiert werden. Im Jahr 2022 wurden so in zwei Community-Treffen ein Großteil der Issues in die Priorotäten `critical`, `high`, `medium`, und `low` eingruppiert. Die einzelnen Listen können am besten auf GitHub eingesehen werden, und zwar unter diesen Links:

* [Critical](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+critical%22)
* [High](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+high%22)
* [Medium](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+medium%22)
* [Low](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+low%22)

Um den Status der laufenden Arbeiten transparent zu kommunizieren, nutzen wir die "Projekte" Funktionalität von GitHub, bei der die einzelnen Issues, auf einem [Kanban-Board](https://de.wikipedia.org/wiki/Kanban-Board) dargestellt wird:

* <https://github.com/orgs/rdmorganiser/projects/1>

Neue Feature-Wünsche, Bug-Reports oder Sicherheitsprobleme werden am besten per GitHub Issue vorgeschlagen bzw. gemeldet:

* <https://github.com/rdmorganiser/rdmo/issues/new/choose>

Wir nehmen aber natürlich auch Anfragen auf allen anderen Kommunkationskanälen entgehen.

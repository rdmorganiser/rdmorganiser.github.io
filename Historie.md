---
layout: page

key: rdmo-begin
lang: de
---

# Historie

*RDMO wurde in zwei Projektphasen von der DFG gefördert und danach in eine community-getragene Arbeitsgemeinschaft überführt. In der ersten Projektphase waren das Leibniz-Institut für Astrophysik Potsdam (AIP) sowie der Fachbereich Informationswissenschaften der Fachhochschule Potsdam beteiligt, in der zweiten Phase außerdem die Bibliothek des Karlsruher Instituts für Technologie (KIT). Hier dokumentieren wir auszugsweise Projektbeschreibungen und Ergebnisse der DFG-Förderphasen.*

## Erste DFG-Projektphase (11.2015-04.2017)

### Projektbeschreibung

**Ziel des Projekts war es, ein Werkzeug zur Verfügung zu stellen, das die strukturierte Planung, Umsetzung und Verwaltung des Forschungsdatenmanagements unterstützt und zusätzlich die textuelle Ausgabe eines Datenmanagementplans (DMP) ermöglicht.**

Spezielle Online-Tools zur Erstellung von DMPs wurden zuvor durch mehrere Institutionen entwickelt. Vorreiter waren das [Digital Curation Centre (DCC)](http://www.dcc.ac.uk) in Großbritannien mit [DMPonline](https://dmponline.dcc.ac.uk), die [California Digital Library (CDL)](http://www.cdlib.org) mit dem [DMPTool](https://dmptool.org/) und in Deutschland die [Universität Bielefeld](https://www.uni-bielefeld.de/ub/digital/forschungsdaten).

Diese Instrumente unterstützen Forschende vor allem bei der Erstellung von DMP gemäß den Vorgaben des jeweiligen Förderers. Während sie damit sinnvolle Hilfsmittel im Rahmen der Antragstellung sind, beschränken sie sich im Wesentlichen auf die für diesen Zweck relevanten Fragen und schöpfen somit nicht das volle Potential von DMPs aus. 

Neben der Dokumentation des Forschungsdaten¬manage¬ments können DMPs auch dazu dienen, die Planung des Forschungsdatenmanagements schon im Vorfeld zu optimieren, die Umsetzung im Projektverlauf – gewissermaßen als Leitfaden – zu unterstützen und dadurch die Effizienz und Qualität von wissenschaftlicher Arbeit zu erhöhen. Die Wissenschaftlerin oder der Wissenschaftler hätte in diesem Fall voraussichtlich eine höhere Motivation, zum eigenen Nutzen einen DMP zu erstellen.

Aufbauend auf externen und eigenen Vorarbeiten (insb. dem [WissGrid-Leitfaden zum Forschungsdatenmanagement]({{ site.baseurl }}/docs/Leitfaden_Data-Management-WissGrid.pdf)) stellte das Projekt ein Werkzeug zur Verfügung, das die strukturierte Planung, Umsetzung und Verwaltung des For¬schungs¬datenmanagements unterstützt, statt nur einen Text für Förderanträge zu generieren. Das Werkzeug kann auch als begleitendes Instrument für den Projektverlauf genutzt werden.

### Arbeitspakete

+ **Konzeption**: Erarbeitung von Inhalten, logischer Struktur und Bedienungsablauf des geplanten Werkzeugs für Forschungsdatenmanagementpläne.

+ **Software**: Beinhaltet die technische Umsetzung, Softwarearchitektur und Datenmodell. Der Quellcode der Anwendung wurde schon in der Entwicklungsphase unter einer offenen Lizenz veröffentlicht und ist seither auf [github.com/rdmorganiser](https://github.com/rdmorganiser) abrufbar.

+ **Community und Nutzertests**: Austausch mit Zielgruppen zu Anforderungserhebung sowie Evaluierung von Prototypen des RDMO-Tools. Am Ende der ersten Projektphase wurde die finale Version von RDMO in einem Abschlussworkshop der Community vorgestellt.

### Publikationen

Neuroth, H., Engelhardt, C., Klar, J., Ludwig, J., & Enke, H. (2018). [Aktives Forschungsdatenmanagement](https://www.degruyter.com/view/journals/abitech/38/1/article-p55.xml), ABI Technik, 38(1), 55-64. [https://doi.org/10.1515/abitech-2018-0008](https://doi.org/10.1515/abitech-2018-0008)

Engelhardt, C., Enke, H., Klar, J., Ludwig, J., & Neuroth, H. (2017). Research data management organiser. In _Proceedings of the 14th International Conference on Digital Preservation_, 25-29. [http://www.ipres-conference.org/ipres17/ipres2017.jp/wp-content/uploads/27Claudia-Engelhardt.pdf](http://www.ipres-conference.org/ipres17/ipres2017.jp/wp-content/uploads/27Claudia-Engelhardt.pdf)

<details>
  <summary style="list-style-image: &#9658;"><h3>Ehemaliges DFG Projekt Team</h3></summary>
  {% for member in site.data.dfg_team.former %}
    <div class="team-member">
      <img src="{{ site.baseurl }}/{{ member.image}}" />
      <div class="team-member-info">
        {{ member.text.de | markdownify }}
      </div>
    </div>
  {% endfor %}
</details>

##  Zweite DFG-Projektphase (11.2017 – 4.2020)

In der ersten Projektphase wurde RDMO mit grundlegenden Features ausgestattet, die für die Organisation des Datenmanagements benötigt werden. In der zweiten Projektphase wurden ausgewählte Funktionalitäten ausgebaut:

* Erweiterung des Datenmodells um Aufgaben
* ein Rollenkonzept mit rollenbezogenen Ansichten, um Informationen und Aufgaben zielgruppenspezifisch und projektübergreifend zu verwalten
* Unterstützung von Repositorien und Identifiezierungssystemen, um Datenmanagementpläne mit den tatsächlichen Daten in temporären Projektspeicherorten bzw. in dauerhaften Datenrepositorien zu verlinken.
* Unterstützung der Auswertung von DMPs, um z.B. automatisch Datenrepositorien zu empfehlen oder Kostenabschätzung anhand der Kriterien der Datenrepositorien durchzuführen
* Ausbau der unterstützten Authentifizierungs- und Autorisierungs-Systeme (LDAP, Shibboleth, OAuth, ORCID)
* Beteiligung an der Entwicklung eines internationalen Austauschformats für DMPs
* verbesserte technische Wartbarkeit durch Standardisierung der Installation (Docker-Container) und Integration eines Update-Mechanismus
* Nachhaltigkeit und Community-Building
* Dissemination und Training

## RDMO-Arbeitsgemeinschaft (ab 2020)

Im Herbst 2020 endete die DFG-Förderung für RDMO. RDMO wurde zu diesem Zeitpunkt bereits an vielen Forschungsinstitutionen in Deutschland als Tool für die dynamische Begleitung des Forschungsdatenmanagements in Projekten und für die Erstellung von Datenmanagementplänen genutzt.

Um die Open Source Software weiterhin nutzbar zu halten und weiterzuentwickeln gründet sich aktuell die Arbeitsgemeinschaft (AG) RDMO mit der Unterzeichnung eines [Memorandum of Understanding]({{ site.baseurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) . 
Bereits auf dem letzten RDMO-Community-Treffen im Februar in Potsdam wurde hierfür der Weg geebnet, indem eine künftige [Organisationsstruktur]({{ site.baseurl }}/Community) mit verschiedenen Gremien ins Leben gerufen wurde. Diese Struktur soll die künftige Entwicklung tragen und ist im MoU detailliert ausgeführt.

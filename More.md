---
layout: page

key: more
lang: de
---

# Werbematerial und Datenschutz


## Werbematerial


Wir stellen hier Werbematerial zur Verfügung, das frei genutzt werden darf, also unter CC0- oder CC-BY-Lizenz steht.

* **Postkarte**
  - PDF: [Vorderseite]({{ site.baseurl }}/img/promo/vdtv4.pdf) [Rückseite]({{ site.baseurl }}/img/promo/rdtv6.pdf)
  - SVG: [Vorderseite]({{ site.baseurl }}/img/promo/vdtv4.svg) [Rückseite]({{ site.baseurl }}/img/promo/rdtv6.svg) (kann z. B. mit Inkscape geöffnet werden)
* **Poster** (auf Englisch): [PDF]({{ site.baseurl }}/img/promo/RDMOPoster.pdf) oder [SVG]({{ site.baseurl }}/img/promo/RDMOPoster.svg)
*  **Aktuelle Vortragsfolien**: [PDF]({{ site.baseurl }}/slides/RDMO_Vortragsfolien_Jun_2020.pdf) oder [PowerPoint]({{ site.baseurl }}/slides/RDMO_Vortragsfolien_Jun_2020.pptx)
* **Flyer**: [PDF]({{ site.baseurl }}/img/promo/Flyer11.pdf) oder [SLA]({{ site.baseurl }}/img/promo/Flyer4.sla) (kann z. B. mit Scribus geöffnet werden)

<br/>

## Datenschutz


### Verfahrensbeschreibung

Wir stellen hier einen Entwurf einer **Verfahrensbeschreibung** für die RDMO Demo Instanz rdmo.aip.de zur Verfügung: 
* [PDF]({{ site.baseurl }}/docs/DS_AIP_DE.pdf)


### Nutzungsbedingungen

Vorlage für Ihre **Nutzungsbedingungen**:

<details>
  <summary style="list-style-image: &#9658;"><h4>1) Betrieb von RDMO</h4></summary>

Für den Betrieb von RDMO ist die Einrichtung von Nutzern erforderlich. 
Es werden zu diesem Zweck folgende Daten eines Nutzers erhoben und in der betreffenden RDMO-Instanz des Betreibers gespeichert:

Name, Vorname, E-Mailadresse, Institutszugehörigkeit (Institut / Organisation), Account name (Shibboleth ID, LDAP ID)

Falls der Betreiber eine Authentisierung durch ORCID, Google, Facebook, Twitter, Github zulässt, wird bei Nutzung dieser Authentisierung die Möglichkeit der Registrierung dieser Verbindung zu RDMO bei den verschiedenen genutzten Diensten gegeben. 

Eine andere Variante der Authentisierung ist durch Verwendung von Shibboleth oder LDAP möglich, hier werden die Nutzerdaten (s.o.) aus der Shibboleth- oder LDAP-Umgebung zur Verfügung gestellt. Die Nutzung von LDAP und Shibboleth muss durch die Datenschutzprozesse der Betreiber abgesichert sein.
  
RDMO-Nutzerprofile werden ausschließlich im Rahmen der betreibenden Institutionen oder Kollaborationen verwendet und verbleiben dort.  

Die Verwendung von RDMO-Nutzerdaten sollten in einer “Terms of Use” Erklärung dem Nutzer bei Anlegen des Accounts deutlich gemacht werden. Der Nutzer sollte sein Einverständnis dokumentieren. RDMO stellt hierfür technische Hilfsmittel bereit. 

</details>
<details>
  <summary style="list-style-image: &#9658;"><h4>2) Nutzung von RDMO und personenbezogene Daten der Nutzer</h4></summary>

Innerhalb von RDMO wird ein Nutzer zu bestimmten Projekten zugeordnet, bzw. ist ‘Eigentümer’ von Projekten. Die Beiträge des Nutzers werden in diesem RDMO-Projekt gespeichert. In einem Projektkontext kann eine Weitergabe von personenbezogener Information erfolgen, z.B. 
bei der Abfrage von Speicherbedarf wird Projektname und ggf. Projektverantwortlicher genannt
bei Abfrage von Projekt-Kennziffern z.B. durch Forschungsreferate der beteiligten Institutionen
bei der Ausgabe von Informationen z.B. für einen Datenmanagement -Plan 

Für alle solche Abfragen ist eine entsprechende Autorisierung durch den RDMO-Betreiber erforderlich. 

Die Projekte sind in RDMO voneinander getrennt, d.h. ein Nutzer kann nur Projekte und Informationen abfragen, sofern er Projektbeteiligter ist. 
Der Import und Export von Projektdaten ist immer nur auf Basis von Zugriffsrechten der Projektbeteiligten möglich. 

Ein Administrator (Superuser) kann alle Projekte sehen, er hat jedoch auch die besondere Verpflichtung, diese Rechte nur im Rahmen seiner administrativen Tätigkeiten anzuwenden. 

</details>
<details>
  <summary style="list-style-image: &#9658;"><h4>3) Projekte die schutzwürdige, personenbezogene Daten zu Forschungszwecken erheben bzw. nutzen</h4></summary>

Diese Projekte müssen bezogen auf ihr Vorhaben gesonderte Maßnahmen und Verfahren überlegen. RDMO bietet hier mit der Trennung der Projekte und Separierung der Nutzer eine Grundlage. Gegebenenfalls ist eine weitergehende ToU hier notwendig.  

</details>


### Historie

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
  {% for member in site.data.team.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.de | markdownify }}
    </div>
</div>
{% endfor %}
</details>
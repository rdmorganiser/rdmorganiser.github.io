---
layout: page

key: rdmo-arge
lang: de
---

# Research Data Management Organiser e.V.

Der Verein Research Data Management Organiser e.V. wurde am 21.11.2024 in Berlin gegründet und widmet insbesondere die Weiterentwicklung der
Software RDMO. Der Verein unterstützt die RDMO-Arbeitsgruppen, ist Anspechpartner für Entwickelnde und Nutzdende, organisiert das Releasemanagement und betreibt die Außendarstellung. Dies erfolgt gemeinsam mit der gesamten RDMO-Community.  

Rechtsfähige Institutionen können Mitglieder im Verein werden.

## Vorstand des RDMO e.V.

{% for member in site.data.board.current %}
{% include persons.html %}
{% endfor %}

# RDMO-Community

## Entwicklungsgruppe

Die technische Koordination und Weiterentwicklung von RDMO erfolgt durch eine Entwicklungsgruppe (EG). Neben einem Kern von langfristig engagierten
Entwickler\*innen, die die Entwicklung kontinuierlich vorantreiben, ist auch eine niedrigschwellige Beteiligung einer größeren Anzahl von Entwickler\*innen wünschenswert und möglich. Diese können z. B. projektgebunden zur Entwicklung beitragen.

So erreichen Sie die Entwicklungsgruppe: [Slack](https://rdmo.slack.com/archives/CFRAZJ9LG)

{% for member in site.data.sw-group.current %}
{% include persons.html %}
{% endfor %}


## Contentgruppe

Die Contentgruppe (CG) setzt sich aus Freiwilligen zusammen, die die inhaltliche Koordination und Weiterentwicklung von RDMO vorantreiben. Eine niedrigschwellige Beteiligung einer größeren Anzahl von Freiwilligen ist wünschenswert und möglich. Diese können z. B. projektgebunden zur Entwicklung beitragen.
Im Fokus der Arbeit stehen die Pflege und die kontrollierte Zusammenführung bestehender und neu generierter Inhalte wie beispielsweise Attribute oder Fragenkatalog-Templates. Es erfolgt eine Moderation und Begleitung der einzelnen Prozesse sowie Domänen-Anpassungen. Die CG dient dazu User Feedback einzusammeln und die allgemeine Usability vor dem Hintergrund des Feedbacks zu prüfen und ggf. zu verbessern.

So erreichen Sie die Contentgruppe: [E-Mail](mailto:rdmo-contentgruppe@listserv.dfn.de), [Slack](https://rdmo.slack.com/archives/C8B6VCKJ9)

{% for member in site.data.cg-group.current %}
{% include persons.html %}
{% endfor %}


## Ad-Hoc-Gruppen

Für spezielle Aufgaben und Fragestellungen können aus dem Kreis der Mitglieder jederzeit weitere Arbeitsgruppen gebildet werden, die mit der Steuerungsgruppe abgestimmt werden.
Über die Weiterführung der Ad-Hoc-Gruppen entscheidet die Mitgliederversammlung.


## Ehemalige Community-Mitglieder

<details>
  <summary><u>Ehemalige Mitarbeiterinnen und Mitarbeiter</u></summary>
  {% for member in site.data.former %}
  {% include persons.html %}
  {% endfor %}
</details>

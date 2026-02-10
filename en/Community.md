---
layout: page

key: rdmo-arge
lang: en
---

# Research Data Management Organiser e.V.

The association Research Data Management Organiser e.V. was founded on 21.11.2024 in Berlin and is dedicated to the further development of the software RDMO. The association supports the RDMO working groups, is a contact partner for developers and users, organizes the release management and does outreach. This is done together with the entire RDMO community. 

Institutions with legal capacity can become members of the association.

RDMO's way from a DFG project to a community with established structures is retraced in the presentation [10 Jahre RDMO - Der Research Data Management Organiser als Software und Community](https://opus4.kobv.de/opus4-bib-info/files/19811/BiblioCon-10-Jahre-RDMO.pdf) (in German).

## Board of RDMO e.V.

{% for member in site.data.sg-group.current %}
{% include persons.html %}
{% endfor %}

# RDMO Community

## Development Group

The technical coordination and further development of RDMO is organised by a development group (EG). In addition to a core of long-term committed developers, who continuously drive the development forward, a low-threshold participation of a larger number of developers is desired and possible. These can, for example, contribute to development on a project-specific basis.
<br/>
The development group can be contacted here: [Matrix](https://matrix.to/#/!TkuaqRhEvKlDopwKNP:matrix.org)

{% for member in site.data.sw-group.current %}
{% include persons.html %}
{% endfor %}

## Content group

The content group (CG) consists of volunteers who drive the content coordination and further development of RDMO. A low-threshold participation of a larger number of volunteers is desired and possible. They can, for example, contribute to the development of the project. The focus of their work is the maintenance and controlled merging of existing and newly generated content such as attributes or questions for catalog templates. A moderation and support of the individual processes as well as domain adaptations will take place. The CG collects user feedback and checks the general usability against the background of user feedback.
<br/>
The content group is can be contacted here: [E-Mail](mailto:rdmo-contentgruppe@listserv.dfn.de), [Matrix](https://matrix.to/#/!CKcQDXWbFhOGAWySvv:matrix.org)
{% for member in site.data.cg-group.current %}
{% include persons.html %}
{% endfor %}

## Ad Hoc Groups

For special tasks and questions, further working groups can be formed from among the members at any time. They are coordinated by the Board. The general meeting decides on the continuation of the ad-hoc groups.

## Former community members

<details>
  <summary><u>Formerly engaged people</u></summary>
  {% for member in site.data.former %}
  {% include persons.html %}
  {% endfor %}
</details>

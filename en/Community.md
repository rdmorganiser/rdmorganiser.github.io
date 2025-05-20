---
layout: page

key: rdmo-arge
lang: en
---


## Research Data Management Organiser e.V.

The association Research Data Management Organiser e.V. was founded on 21.11.2024 in Berlin and supports the further development of 
the software RDMO. The association supports the RDMO working groups, is a contact partner for developers and users, organizes the release management and does outreach. This is done together with the entire RDMO community. 

Institutions with legal capacity can become members of the association.

How to contact the association: .

### Board of RDMO e.V.

{% for member in site.data.board.current %}
{% include persons.html %}
{% endfor %}

## Development Group

The technical coordination and further development of RDMO is organised by a development group (EG). In addition to a core of long-term committed developers, who continuously drive the development forward, a low-threshold participation of a larger number of developers is desired and possible. These can, for example, contribute to development on a project-specific basis.
<br/>
The development group ist contactable via: [Slack](https://rdmo.slack.com/archives/CFRAZJ9LG)

{% for member in site.data.sw-group.current %}
{% include persons.html %}
{% endfor %}

## Content group

The content group (CG) consists of volunteers who drive the content coordination and further development of RDMO. A low-threshold participation of a larger number of volunteers is desired and possible. They can, for example, contribute to the development of the project. The focus of their work is the maintenance and controlled merging of existing and newly generated content such as attributes or questions for catalog templates. A moderation and support of the individual processes as well as domain adaptations will take place. The CG collects user feedback and checks the general usability against the background of user feedback.
<br/>
The content group is contactable via: [E-Mail](mailto:rdmo-contentgruppe@listserv.dfn.de), [Slack](https://rdmo.slack.com/archives/C8B6VCKJ9)
{% for member in site.data.cg-group.current %}
{% include persons.html %}
{% endfor %}


## Ad Hoc Groups

For special tasks and questions, further working groups can be formed from among the members at any time. They are coordinated by the Steering Group. The general meeting decides on the continuation of the ad-hoc groups.


## General meeting

The general meeting of the RDMO collaboration comprises the entirety of all members. Users and other interested parties can participate in the general meeting. The members elect the representatives in the Steering group. The general meeting meets at least once a year as required.


## Former community members

<details>
  <summary><u>Formerly engaged people</u></summary>
  {% for member in site.data.former %}
  {% include persons.html %}
  {% endfor %}
</details>

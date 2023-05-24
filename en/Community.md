---
layout: page

key: rdmo-arge
lang: en
---

# RDMO Consortium

With the end of the DFG funding for RDMO in autumn 2020, the RDMO working group was founded at the user meeting on October 7th, 2020. It is based on the voluntary cooperation of institutions and individuals to keep the open source software RDMO usable and to further develop it.
They have expressed their support by signing the [Memorandum of Understanding (MoU)]({{ site.baseurl}}/docs/Memorandum-of-Understanding-RDMO.pdf).

The organizational structure with various bodies is intended to support this development and is detailed in the MoU.

## Steering Group

The RDMO Consortium is led by a steering group (SG). The representatives of the steering group are elected by the members at the general meeting every three years or as needed. The SG will accompany the direction of the further development and coordinate the processes for the further development of the software and its content. The SG is composed of at least five persons.
<br/>
You can reach the steering group via: rdmo-steuerungsgruppe@listserv.dfn.de

{% for member in site.data.sg-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}


## Development Group

The technical coordination and further development of RDMO is organised by a development group (EG). In addition to a core of long-term committed developers, who continuously drive the development forward, a low-threshold participation of a larger number of developers is desired and possible. These can, for example, contribute to development on a project-specific basis.
<br/>
The development group ist contactable via: [Slack](https://rdmo.slack.com/archives/CFRAZJ9LG)

{% for member in site.data.sw-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

## Content group

The content group (CG) consists of volunteers who drive the content coordination and further development of RDMO. A low-threshold participation of a larger number of volunteers is desired and possible. They can, for example, contribute to the development of the project. The focus of their work is the maintenance and controlled merging of existing and newly generated content such as attributes or questions for catalog templates. A moderation and support of the individual processes as well as domain adaptations will take place. The CG collects user feedback and checks the general usability against the background of user feedback.
<br/>
The content group is contactable via: [E-Mail](mailto:rdmo-contentgruppe@listserv.dfn.de), [Slack](https://rdmo.slack.com/archives/C8B6VCKJ9)
{% for member in site.data.cg-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}


## Ad Hoc Groups

For special tasks and questions, further working groups can be formed from among the members at any time. They are coordinated by the Steering Group. The general meeting decides on the continuation of the ad-hoc groups.<br/>
We would like to invite all institutions that are interested in the preservation and further development of RDMO to sign the MoU and send it to the following e-mail address: rdmo-steuerungsgruppe@listserv.dfn.de.

## General meeting

The general meeting of the RDMO collaboration comprises the entirety of all members. Users and other interested parties can participate in the general meeting. The members elect the representatives in the Steering group. The general meeting meets at least once a year as required.


## Former community members

<details>
  <summary><u>Former employees</u></summary>
  {% for member in site.data.former %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}
</details>

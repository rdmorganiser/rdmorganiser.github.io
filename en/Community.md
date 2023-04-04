---
layout: page

key: rdmo-arge
lang: en
---

# RDMO Consortium 

...

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
The content group is contactable via: [E-Mail](rdmo-contentgruppe@listserv.dfn.de), [Slack](https://rdmo.slack.com/archives/C8B6VCKJ9)
{% for member in site.data.cg-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

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
---
layout: page

key: docu_user
lang: en
---

# Help / Guide / Documentation for RDMO Users

There are three different roles within RDMO: [User]({{ site.baseurl }}/Docu_User), [Manager]({{ site.baseurl }}/Docu_Manager) and [Admins]({{ site .baseurl }}/Docu_Admins).<br/>
As a <b>user</b> you have the option:

* Create DMPs and work on them collaboratively
* customize the output using the views
* central administration of information for research data management
* continuous updateability and versioning of information in the course of a project
* Freeze the status of information for projects at certain points in time using snapshots
* Overview of different projects

## First Aid

The english documentation is available on [rdmo.readthedocs.io](http://rdmo.readthedocs.io/en/latest).

* [Quickstart Guide (pdf document)]({{ site.baseurl }}/docs/Schnellstartanleitung_v2020.pdf)
* [FAQs](http://www.forschungsdaten.org/index.php/FAQs)

<b>You can find views of DMP specifications, e.g. on:</b>
* forschungsdaten.info under ["Funder Guidelines"](https://forschungsdaten.info/praxis-kompakt/english-pages/funder-guidelines/)
* forschungsdaten.org unter ["Förderorganisationen"](https://www.forschungsdaten.org/index.php/F%C3%B6rderorganisationen)

<b>Overview of all questions of the complete RDMO catalog as PDF:</b>

* [question overview]({{ site.baseurl }}/docs/RDMO-Fragenkatalog_nummeriert_201911.pdf)

<b>The XML file of the generic questionnaire can be found here:</b>
* [GitHub/rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog). Alle Fragenkataloge sind mit einer CC0-Lizenz veröffentlicht.


## Videos
*Please note that the following videos are available in German language only.*

<br>
<p style="margin-left:25%;">Was ist RDMO? (<a href="{{ site.baseurl }}/img/promo/videos/was-ist-rdmo_v4.mp4">Video-Download</a>)</p>
<video poster="{{ site.baseurl}}/img/promo/videos/was-ist-rdmo_frame.jpg" controls="controls" style="width: 50%; margin-left:25%;">
<source src="{{ site.baseurl}}/img/promo/videos/was-ist-rdmo_v4.mp4" type="video/mp4">Your browser does not support the video tag.</video>

<br>
<p style="margin-left:25%;">Wie beantworte ich einen Fragenkatalog? (<a href="{{ site.baseurl }}/img/promo/videos/fragenkatalog_v2.mp4">Video-Download</a>)</p>
<video poster="{{ site.baseurl}}/img/promo/videos/fragenkatalog_frame.jpg" controls="controls" style="width: 50%; margin-left:25%;">
<source src="{{ site.baseurl}}/img/promo/videos/fragenkatalog_v2.mp4">Your browser does not support the video tag.</video>

<br>
<p style="margin-left:25%;">Was kann man mit RDMO machen? (<a href="{{ site.baseurl }}/img/promo/videos/rdmo-erklaert_v4.mp4">Video-Download</a>)</p>
<video poster="{{ site.baseurl}}/img/promo/videos/rdmo-erklaert_frame.jpg" controls="controls" style="width: 50%; margin-left:25%;">
<source src="{{ site.baseurl}}/img/promo/videos/rdmo-erklaert_v4.mp4" type="video/mp4">Your browser does not support the video tag.</video>


### History

In the first project phase these features were implemented to use RDMO for data management. RDMO is now in its second project phase.
The project now targets:

* extending the data model towards task definition and handling
* role based views for stakeholders across multiple projects
* support of repositories and identifier systems to link with data storage systems or long term archives
* support for suggestion of suitable data repositores, and possibly cost estimations based on their terms
* extension of interfaces to authentication and authorisation systems
* participation in the effort of creating an international exchange format for DMP
* improvement of technical installation, maintenance and update procedures
* sustainibility and community building
* dissemination and training

The RDMO collaborates with multiple institutions, discipline specific and other scientific organisations, and also international
initiatives to ensure the usefulness and sustainability of the software and its applications. For questions and contact, pleasae send a mail to [rdmo-contact@listserv.dfn.de].

The RDMO project is funded by DFG (Deutsche Forschungsgemeinschaft).

The description of the first project phase is available [here](/en/first-project-phase).


**The RDMO project will be transferred to the community-based RDMO working group

RDMO's DFG funding will come to an end in autumn 2020. In the meantime RDMO has become an important tool supporting dynamic research data management in multiple projects, creating research data management plans at many German research institutions.

In order to keep the Open Source Software usable and evolving, the RDMO working group (AG) is currently being founded by signing a [Memorandum of Understanding](/docs/Memorandum-of-Understanding-RDMO.pdf) .
The last RDMO community meeting in Potsdam in February paved the way for this by creating a future [organisational structure](/groups) with various committees. This structure is intended to support future development and elaborated in detail inside the MoU.
<br/>

<details>
  <summary><u>Former DFG Project Team</u></summary>
  {% for member in site.data.team.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}
</details>
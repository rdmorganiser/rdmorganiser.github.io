---
layout: page

key: rdmo-begin
lang: en
---

# History

## First projekt phase

*Most of RDMO was developed during the first project phase from November 2015 - April 2017. On this page, we document the description of the project and the workpackages. Please note that the information on this page is no longer up to date.*

### Project description

**Research Data Management Organiser (RDMO) develops a tool to support the systematic planning, organisation and implementation of research data management throughout the course of a project. An additional feature will be the output of a data management plan in the form of a text document.**

The aim of data management planning is to ensure that research data produced in a project are (re-)usable and accessible - during the project as well as afterwards. It comprises a number of strategies and methods associated with various aspects of the research and research data lifecycle as well as some related topics. A data management plan (DMP) is a means to outline and document these items. Recently, several institutions have developed online tools to support researchers in writing such a data management plan. Pioneers were the UK-based [Digital Curation Centre (DCC)](http://www.dcc.ac.uk) in UK with [DMPonline](https://dmponline.dcc.ac.uk), the [California Digital Library (CDL)](http://www.cdlib.org) with [DMPTool](https://dmptool.org/), and in Germany the [Universität Bielefeld](https://www.uni-bielefeld.de/ub/digital/forschungsdaten).

DMPs have a great potential - they can be used to optimise the data management from the beginning and to serve as a roadmap that gives guidance for the various data management tasks during the lifetime of a project. DMPs support an appropriate and effective data management which ensures that the produced research data are re-usable within and outside the project and can be transferred to long-term preservation without unnecessary obstacles. It also enhances the effectiveness and quality of the research itself and therefore can generate a considerable benefit for researchers.

However, the tools mentioned above focus on the requirements of funding agencies and the creation of DMPs as part of a research proposal. While they are useful in that respect, they do not sufficiently support the other functionalities mentioned above.

The RDMO project aims to fill this gap. Based on preliminary work, in particular from the WissGrid project (see [WissGrid-Leitfaden zum Forschungsdatenmanagement]({{ site.baseurl }}/docs/Leitfaden_Data-Management-WissGrid.pdf)), it develops an online tool that takes an integrated approach and will support the systematic planning, organisation and implementation of research data management throughout the whole project and the research data lifecycle, including the output of a DMP document.

The target group comprises all parties involved in research data management, i.e. researchers, PIs, institutional data managers, IT departments etc. Adaptations to discipline-specific or institutional needs are supported. The installation of the tool into local environments and its integration into existing administrative IT infrastructure and workflows is given special consideration. The tool will be multilingual (at first German and English).

For more information about the project please visit the description of our [workpackages]({{ site.baseurl }}/en/workpackages), [outreach]({{ site.baseurl }}/en/talks) and [cooperations]({{ site.baseurl }}/en/cooperations/). For questions and other matters, please contact us by mail <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a>.

### Concept

The content and its logical structure and dependencies have to be cast into a user friendly flow of questions, which is the main task of WP1. It uses material already available from previous work which will be critically assessed, extended and modularised. In addition, we want to include specialized sections for disciplinary variations.

The first iteration will chiefly assess the available Know-How from our own work and already published works. The general questions and the specialised sections for specific target groups need to be carefully fitted to create a robust application with a decision tree that enables a stable implementation. In following iterations the usability, robustness and extensibility will be reviewed and improved.

### Software

This workpackage will implement the concepts worked out in "Concepts". This requires the selection of an appropriate software platform and the development of an architecture and a database model. We base this on our experiences with implementing web applications and will make use of the Open Source code of [DMPonline](https://dmponline.dcc.ac.uk) and [DMPTool](https://dmptool.org/).

The core of the architecture and basic features (i.e. interaction with user, server/client functionalities, multi-lingual questions) of the planned application are developed in parallel with conceptual work. Also, we will explore how to interface with other tools and existing infrastructure. A prototype based on this work, with a preliminary set of questions, has formed the basis for a first round of testing with collaborating projects.

In later stages, functionalities like export/import and continuous updating of the gathered information, templates for output formats etc. will be added. The final version of the tool is planned to be applicable within small project groups as well as for whole institutions running independent instances of the software.

The source code will be available from the first stages of development on with an OpenSource license (Apache 2.0) on [github.com/rdmorganiser](https://github.com/rdmorganiser).


### Testing by Community and Users

Feedback and input from the community are needed with regards to assess the usability, to work out extended sets of discipline-specific questions or to gather feedback on the various features. Improving the tool is an iterative process that will help to eliminate errors and problems of the implementation.

WP3 will organize tests with collaborating projects and partners (from Social Sciences and Astronomy, from data providers and IT departments) and also workshops for a broader audience to gather input for the iterative improvement of the tool. We plan two rounds of tests and workshops, the first round is already done, the second will be done a year after the project has started. Especially the first round is designed to gather input for community specific aspects of the questionnaire and associated data management tasks.

While the feedback from scientists will focus on gathering specifics on content, discussion with IT infrastructure providers will address deployment into and adaptability of features to the institutional context. This input and interaction is a necessary element for delivering a useful tool that can be efficiently implemented and maintained.

The final version of the tool will be presented and discussed in a public workshop. In some cases, our collaborators will offer deployment of the RDMO for various departments or groups.


### Features

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

<br/>

<details>
  <summary><u>Former DFG Projekt Team</u></summary>
  {% for member in site.data.dfg_team.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}
</details>
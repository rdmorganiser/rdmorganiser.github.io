---
layout: page

key: rdmo-begin
lang: en
---

*RDMO was funded by the DFG in two project phases and then transferred to a community-based working group. In the first phase of the project, the Leibniz Institute for Astrophysics Potsdam (AIP) and the Department of Information Sciences of the University of Applied Sciences Potsdam were involved, in the second phase also the library of the Karlsruhe Institute of Technology (KIT). Here we document excerpts of project descriptions and results of the DFG funding phases.*

# First projekt phase (11/2015-04/2017)

## Project description

**The aim of the project was to provide a tool that supports the structured planning, implementation and administration of research data management and also enables the textual output of a data management plan (DMP).**

Special online tools for creating DMPs have previously been developed by several institutions. Pioneers were the [Digital Curation Centre (DCC)](http://www.dcc.ac.uk) in UK with [DMPonline](https://dmponline.dcc.ac.uk), the [California Digital Library (CDL)](http://www.cdlib.org) with [DMPTool](https://dmptool.org/), and in Germany the [Universität Bielefeld](https://www.uni-bielefeld.de/ub/digital/forschungsdaten).

These instruments support researchers primarily in the creation of DMPs in accordance with the specifications of the respective funder. While they are useful tools in the context of the application, they are essentially limited to the questions relevant for this purpose and therefore do not exploit the full potential of DMPs.

In addition to the documentation of research data management, DMPs can also be used to optimize the planning of research data management in advance, to support implementation during the project - as a guide - and thus to increase the efficiency and quality of scientific work. In this case, the scientist would probably have a higher motivation to create a DMP for their own benefit.

Building on external and own preparatory work (see [WissGrid-Leitfaden zum Forschungsdatenmanagement]({{ site.baseurl }}/docs/Leitfaden_Data-Management-WissGrid.pdf)), the project provided a tool that supports the structured planning, implementation and administration of research data management instead of just generating a text for funding applications. The tool can also be used as an accompanying instrument for the course of the project.


## Workpackages:

### Concept

Development of content, logical structure and operating procedure of the planned tool for research data management plans.

### Software


Includes the technical implementation, software architecture and data model. The application's source code was released under an open license during the development phase and has since been available at [github.com/rdmorganiser](https://github.com/rdmorganiser).


### Testing by Community and Users

Exchange with target groups for requirements gathering and evaluation of prototypes of the RDMO tool. At the end of the first project phase, the final version of RDMO was presented to the community in a final workshop.


### Publications

Neuroth, H., Engelhardt, C., Klar, J., Ludwig, J., & Enke, H. (2018). [Aktives Forschungsdatenmanagement](https://www.degruyter.com/view/journals/abitech/38/1/article-p55.xml), ABI Technik, 38(1), 55-64. doi: [https://doi.org/10.1515/abitech-2018-0008](https://doi.org/10.1515/abitech-2018-0008)

Engelhardt, C., Enke, H., Klar, J., Ludwig, J., & Neuroth, H. (2017, September). Research data management organiser. In Proceedings of the 14th International Conference on Digital Preservation (pp. 25-29).

# Second DFG-Phase (11/2017 – 4/2020)

In the first phase of the project, RDMO was equipped with the basic features needed to organize data management. In the second project phase, selected functionalities were expanded:
* extending the data model towards task definition and handling
* role based views for stakeholders across multiple projects
* support of repositories and identifier systems to link with data storage systems or long term archives
* support for suggestion of suitable data repositores, and possibly cost estimations based on their terms
* extension of interfaces to authentication and authorisation systems
* participation in the effort of creating an international exchange format for DMP
* improvement of technical installation, maintenance and update procedures
* sustainibility and community building
* dissemination and training


## RDMO Working Group

DFG funding for RDMO ended in autumn 2020. At that time, RDMO was already being used at many research institutions in Germany as a tool for the dynamic monitoring of research data management in projects and for the creation of data management plans.

In order to keep the open source software usable and to further develop it, the working group (AG) RDMO was founded with the signing of a [Memorandum of Understanding]({{ site.baseurl }}/docs/Memorandum-of-Understanding-RDMO.pdf) by institutions and individuals.

The way was paved for this at the RDMO community meeting in February 2020 in Potsdam, in which a future [organisational structure]({{ site.baseurl }}/en/Community) with various committees was created. This structure is intended to support further development and is detailed in the MoU.
<br/>

<br/>


<details>
  <summary style="list-style-image: &#9658;"><u>Former DFG Projekt Team</u></summary>

{% for member in site.data.dfg_team.former %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

</details>

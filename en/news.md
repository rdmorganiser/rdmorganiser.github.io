---
layout: page

key: news
lang: en
---

News
====

On this page, we briefly summarize our activities. For up-to-date information please subscribe to your [mailing list](https://www.listserv.dfn.de/sympa/info/rdmo) or follow us on [Twitter](https://www.twitter.com/rdmorganiser).

RDMO Arbeitsgemeinschaft
------------------------

The continuation of the RDMO works is organised by the RDMO Arbeitsgemeinschaft. More info [here]({{ siteurl }}/rdmo_arge) (currently German language only). Base of the RMDO Arbeitsgemeinschaft is the [Memorandum of Understanding (MoU)]({{ siteurl}}/docs/Memorandum-of-Understanding-RDMO.pdf) (currently German language only).

Regular RDMO Times: 11:00h -12:00h
-------------------------------------
(status:  August 2021)

- General JourFixe: each 1st Thursday of the month
- Content  group:  each  2nd Thursday of the month
- Development group: each 3rd Thursday of the month

Please contact the RDMO Arbeitsgemeinschaft via the usual channels for connection information.  
All interested parties are  welcome.


December 2021
-------------

as of now the new version RDMO 1.7.0 is available. While these are primarily bug fixes, since additional functionality has been added, the middle number of the version number is increased. In response to feedback, we have slightly revised the interview. For record questions, "Save and Continue" now moves to the next question set rather than the next record, but continues to process the same record. (The old behavior can be kept via the PROJECT_QUESTIONS_CYCLE_SETS setting). Question sets that can be skipped by conditions are marked by a small question mark in the navigation. As always, more information is available on the release page: https://github.com/rdmorganiser/rdmo/releases.

There are also some new features coming to the rdmo-catalog repository. They are released under the version number 1.1.0-rdmo-1.6.0, where rdmo-1.6.0 means that the release can be used with RDMO from 1.6.0. The following changes are included:

- Domain: 22 new attributes (required for Horizon Europe).
- Conditions: 4 new conditions
- Options: additional options; language adjustment; localization to French and Italian
- Catalogs: additional questions and help texts; DFG links update; language adjustment; localization in French and Italian
- Community contributions: Table overview; new catalog for Science Europe / VW Foundation; update FoDaKo-DFG catalog.


November 2021
-------------
in the last weeks some minor problems in RDMO have been noticed, so version 1.6.2 is now available, which mainly contains bug fixes. For example, overlays were fixed in case PROJECT_ISSUES were disabled in the settings. Also, an error that occurred when records were removed was fixed. A problem with resolving conditions in question sets was also fixed. Some improvements that might be more interesting for technical interested people or RDMO administrators are also on the list of new features. From now on we use Github actions and not Travis-CI for our automated tests. Furthermore, a command has been added on the command line to track down and remove projects that have no owners, for example. As always, our release notes can be found here: https://github.com/rdmorganiser/rdmo/releases.

The reports of the community meeting on 04.10.2021 can be found - as always - at
https://www.forschungsdaten.org/index.php/Sechstes_Community-Treffen.

November 16 was the day of research data in NRW. In the afternoon program Torsten Rathmann talked about requirements of third party funders and DMPs and also presented RDMO, especially also a new version of the FoDaKo questionnaires for DFG projects. More information is available on the [event website](https://www.fdm.uni-wuppertal.de/de/schulungen-veranstaltungen.html).


October 2021
-----------

After a 2 month testing period, we released RDMO 1.6 on Tuesday. As always, you can find the relevant information on the release page on GitHub:

    https://github.com/rdmorganiser/rdmo/releases/tag/1.6

There will be many new features in the new version:

- Question sets can now be nested to map hierarchies such as datasets -> creators -> institutions (as in DataCite).
- In the catalogs, questions can be marked as optional for users and default answers can be configured.
- An autocomplete widget, tooltips in help texts, the possibility to arrange questions side by side serve for better usability.
- An overlay tutorial for new users is designed to make it easier to get started.
- The instance can be configured to automatically save most input when answering questions.
- The implementation of the conditions and other database accesses have been optimized to improve page load speed.
- Questions, question sets and options can be hidden in the management interface.
- For question sets configured as a collection, the attribute is now set explicitly (i.e. project/dataset/id instead of project/dataset). A migration will automatically adjust existing question catalogs.
- Theme creation is simplified for new instances, but existing instances can continue to operate as usual.

RDMO uses Django 3.2 from version 1.6 and thus requires Python 3.6. If this should cause problems for you, please contact us.


September 2021
-----------

Community Workshop on October 4, 2021:

The detailed [program](https://rdmorganiser.github.io/events/workshop102021_programm/) is now posted. We will still add the contributions for the breakout sessions in the last week of September.

The [registration](https://meetings.aip.de/event/13/) is open.

Software:

the release candidate of RDMO is still in the testing phase. We would appreciate it if institutions that have test instances or similar would try the release so that any bugs can be found and ironed out during the testing phase. The release candidate must be installed directly from GitHub. How to do that is described on the (pre-)release page:

[pre-release](https://github.com/rdmorganiser/rdmo/releases/tag/1.6-rc.1)

The test phase will run at least until the next developer meeting, which will take place on the third Thursday in September. Depending on the feedback, the test phase will then be extended or terminated in order to then start work on a new RDMO release.


August 2021
-----------

The work on RDMO will continue diligently in the summer! The new version of RDMO is now ready for a test phase, as announced. The release candidate has to be installed directly from GitHub, how to do that is described on the [(pre-)release page](https://github.com/rdmorganiser/rdmo/releases/tag/1.6-rc.1). In addition, the list of numerous changes can be viewed on this page.

July 2021
---------

Work is underway on the new release of RDMO, which is expected to be arriving in early August. Part of the release will be nested question sets, optional questions, preset default answers, an autocomplete widget, tooltips in help texts, tutorial overlays for new users and numerous other improvements. Unlike before, we will have a test phase before the release, during which the new version can be tried out on test instances (if available). We will inform you by e-mail when the time comes.

April 2021
-----------

RDMO 1.5.5: a new version has been published, with a cpuple of minor bug fixes. Installation procedures as usual. If RDMO version is 1.5.x no database migrations are required. More info at [Release page on GitHub](https://github.com/rdmorganiser/rdmo/releases/tag/1.5.5)

March 2021
-------------

*RDMO 1.5*

Last week, version 1.5 of RDMO was released, which again contains a number of innovations. This time, the focus was particularly on practical usability for researchers. The interview is now always continued on the page that was last accessed. A number of details have been changed in the user interface, making it much more intuitive. In the questionnaires, file uploads can be configured to upload additional material such as graphics or documents. Projects can now be created as sub-projects of existing projects, with inherited access rights. Views of parent projects can access sub-projects to collate information from multiple projects. Adding new users to projects now works via email notifications and users who are not yet registered in the RDMO instance can also be invited via this way. We have also worked on RDMO "under the bonnet": By optimising the database accesses, RDMO should now be much faster and smoother. The (rather technical) overview of the individual features can be found on the [release page on GitHub](https://github.com/rdmorganiser/rdmo/releases/tag/1.5).

*News from the RDMO Content Group*.

Meanwhile, in addition to the UAG Editorial Processes for Attributes, Options and Views, 3 other UAGs have formed: Text Guidance for DMPs, Promotion for RDMO and Engagement in an RDA - UAG for DMPs. Anyone who is interested in getting involved in the UAGs is very welcome. For example, the UAG Editorial Processes is currently working on adding new attributes, options and conditions to the corresponding files of the RDMO standard catalogue on the basis of a concrete case. The CG meets every 2nd Thursday of the month from 11-12h. Announcements are made via the RDMO distribution list.

*Report NFDI - DMP Workshop*

On 02.03. the Steering Group of the RDMO Working Group together with the NFDI Directorate and the NFDI4Ing consortium held a virtual workshop on the topic "Creation of data management plans and use of DMP tools in the NFDI" with 50 representatives of 21 consortia (funded and not yet funded). A detailed report on this event can be found on the [RDMO's website](/docs/nfdiws/wsreport).


February 2021
-------------

Work is underway on a new version of RDMO, which is scheduled for release at the end of February. If all goes well, it will include improvements to the user interface, allow files to be uploaded when answering questions, and introduce a hierarchical structure of projects that can be nested in this way. However, there is still some testing and development to be done before this can happen.

As announced elsewhere, the UAG Data Management Plans of the DINI/nestor-AG Research Data in cooperation with fdm.nrw is organising a virtual workshop series on the topic of data management plans in spring 2021. A description of the workshops and the registration form are now online.

The workshops are aimed both at participants who have had little contact with the topic of DMPs so far and at people who already have a wide range of experience with DMPs.

The RDMO steering group, together with the NFDI Directorate and the NFDI4Ing consortium, has invited all NFDI consortia to actively participate with a short presentation in the virtual workshop "Creating Data Management Plans and DMP Tools in the NFDI" in early March 2021.  This is against the background of the "Leipzig-Berlin Declaration on NFDI Cross-Cutting Issues in Infrastructure Development" and the cross-cutting issue "Creation of Data Management Plans" mentioned therein. It is intended to serve the exchange within the NFDI.  We will report on the results in due course.


November 2020
-------------

Virtual Meetings of Content group and  Software group

Content group meets regularly  each 2.nd Thursday of the month, from 11:00-12:00h. The Zoom meeting will be announced via E-mail und Slack. A week later, each 3.rd Thursday of the month, from 11:00-12:00h the Software group meets. Both meetings are inviting interested parties.

Community-Meeting 07.10.2020

Our 4.th Community-Meeting took place on 07.10.2020, with about 60 participants as a virtual conference. An extended report has been published (in German language) at [Forschungdaten.org](https://www.forschungsdaten.org/index.php/Viertes_Community-Treffen), including most presented discussion material.




October 2020
------------

First we would like to draw your attention once again to the planned virtual RDMO user meeting on 07.10.2020. A detailed [programme](/en/events/workshop022020) is published on the RDMO website. The keynote will be given by Mr. Sure-Vetter (NFDI Director). The RDMO Memorandum of Understanding (MoU) will also be presented in detail. Please register for the User Meeting on the [registration page](https://meetings.aip.de/event/9/) by 04.10.2020.

Next week the RDMO Release 1.3 will be released before the User Meeting. It will contain some new features, of which only a few will be mentioned here. Besides some bug fixes there will be minor improvements in the user interface, an extended configurability of reference documents and easier customization of the footer. Furthermore, thanks to the work of Dario Pilori and Giacomo Lanza, RDMO will also be available in Italian with the next release. One of the major changes concerns the revision of tasks, whose functionality has been significantly expanded.


September 2020
--------------

We have not been idle this month and have released version 1.2 of RDMO. In the management interfaces, elements such as options, attributes, but also entire question catalogues can now be copied directly. Catalogues, tasks and views can be hidden by the users (e.g. as long as they are still being worked on). Attributes and conditions indicate in which questions, question sets, etc. they are used. Elements can now also be exported individually, e.g. a question set or a view. We have also redesigned the import. Before the actual import, it is now shown what is being imported and if there are any problems. In addition, individual elements can be deselected. After the import it is shown again what has been imported and if there have been any errors.

Also some errors have been fixed with the new release. Many of them concerned translations. RDMO is now better prepared for missing texts, should they not be available in the selected language. In these cases the existing language is used. Views have been extended by four available variables. The function "render_value" can now be used with "project/title", "project/description", "project/created" and "project/updated".


August 2020
-----------

In the new RDMO version 1.1 we have revised the project export and import functionalities. This lays the foundation to support formats like DataCite, the schema of RADAR derived from DataCite and also the [maDMP](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) proposed by the RDA in RDMO. Since the mapping of RDMO to these formats is dependent on our domain model, which is not part of the RDMO code but is maintained independently, it was necessary to store the code in plugins. In the future, these will be collected in [rdmo-plugins](https://github.com/rdmorganiser/rdmo-plugins), analogous to the [rdmo-catalog](https://github.com/rdmorganiser/rdmo-catalog) repository. The "mapping" of the formats to the RDMO domain model is done these plugins' code. It is additionally documented by us in a [Google document](https://docs.google.com/spreadsheets/d/16fQ0Rgg-2ewMK9FklEjU8pAcpHODEm7PYy6xDCninew/edit?usp=sharing). For full support it will be necessary to introduce additional questions and attributes.

In the future we want to use this kind of plugins more to implement domain specific features in RDMO and of course plugins can be used by instances to implement more customized functionality. The details are available in the [plugin documentation](https://rdmo.readthedocs.io/en/latest/plugins/index.html).

July 2020
---------
The new version 1.0.7 of RDMO includes as new features 1) Multi-site setup: Run different RDMO pages with different URLs and themes on one server with a common database (more at [https://rdmo.readthedocs.io/en/latest/configuration/multisite.html](https://rdmo.readthedocs.io/en/latest/configuration/multisite.html)); 2) Certain users can now be made site managers via the admin interface (more at [https://rdmo.readthedocs.io/en/latest/administration/users. html#roles](https://rdmo.readthedocs.io/en/latest/administration/users.html#roles)); 3) RDMO is now available in French (texts in the software itself, RDMO question catalog and its attached options and some other identifiers and help texts), the corresponding XML files are available via the catalog repository; 4) the terms of use are now available via a separate URL. Furthermore, the recording and slides of the presentation of the RDMO team "Datenmanagementpläne mit RDMO" for the FDM-BB project are now available at [https://mediaup.uni-potsdam.de/Play/19500](https://mediaup.uni-potsdam.de/Play/19500).

June 2020
---------
In May we held the first virtual RDMO consultation. The discussion resulted in the request to create requirements as GitHub issues, as the most permanent and comprehensible workflow. If you have any questions about creating issues, please contact us at RDMO-Slack or via email. The RDMO team participated in the [virtual "RDA Hackathon on maDMP"](https://rda-dmp-common.github.io/hackathon-2020/) from 27-28.05.2020 and worked on the interoperability of RDMO with the [maDMP standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard). The result is a plugin where the mapping takes place and an export to the maDMP JSON format is created. In addition, the RDMO team presented "Data Management Plans with RDMO" on 08.06.2020 in a webinar organised by the FDM-BB project (University of Potsdam, Potsdam University of Applied Sciences).

May 2020
--------
RDMO is now available in version 1.0.6. With the new version it is possible to perform simple mathematical calculations in views, e.g. for simple tabular summaries of the personnel and material costs incurred. Further explanations in the [tutorial](https://www.forschungsdaten.org/index.php/Ansicht_erstellen) and in the [technical documentation](https://rdmo.readthedocs.io/en/latest/management/views.html). Since May, every first Thursday of the month (except on holidays), there is a "virtual RDMO consultation hour" for members of the RDMO community (data managers, administrators etc.). Details in the [RDMO Newsletter](https://www.listserv.dfn.de/sympa/info/rdmo). Furthermore, the steering group has decided that RDMO as an open source project is now called "RDMO Arbeitsgemeinschaft" and is preparing a Memorandum of Understanding on the basis of which institutions and organizations will be able to participate in the continuation of RDMO. The members of the groups of the Arbeitsgemeinschaft can be found at [https://rdmorganiser.github.io/groups/](/groups/).

April 2020
----------
RDMO Release 1.0.5 (bug fixes, including login with ORCID, errors when downloading vendor files, display of sets in views). Update is recommended. See the documentation regarding the new entries in local.py required for the ORCID. The report of the 3rd RDMO Community Meeting is [online](https://www.forschungsdaten.org/index.php/Drittes_Community-Treffen). There will be a "virtual RDMO consultation" from May 2020, please [contact us](/) for details. We have added the ["DFG-Fragenkatalog" (DFG Question Catalog) from the FoDaKo project, Bergische Universität Wuppertal (Torsten Rathmann) (CC0)](https://github.com/rdmorganiser/rdmo-catalog/tree/master/shared/fodako) to the AIP demo instance and continue to add catalogs from the community to the GitHub repository: either create a pull request on GitHub or send the XML files via mail to omichaelis@aip.de. Especially helpful for re-use is the additional provision of a read.me file or documentation for each catalog.

February 2020
-------------
This month we released [RDMO Release 1.0.3.](https://github.com/rdmorganiser/rdmo/releases/tag/1.0.3) It contains improvements and minor bug fixes. New API filter attributes are provided to make interfaces more flexible, e.g. making it easier to export a set of answers and then assign the corresponding questions to it, since questions can now be localized via the API using the "attribute" parameter. Furthermore, RDMO now uses "pytest", which can also be used to [test the RDMO app](https://github.com/rdmorganiser/rdmo/blob/master/docs/testing.md). In January Ulrike Wuttke and Olaf Michaelis presented at the [workshop of the DHd-AG data centers on 23/24.01.2020 in Frankfurt an Main](http://dig-hum.de/aktuelles/einladung-zum-workshop-der-dhd-ag-datenzentren-zum-thema-interoperabilit%C3%A4t-am-2324012020) the efforts made by the RDMO-project to make it Datacite compatible. The paper "From Project to Sustainable Tool for Research Data Management: The Example of Research Data Management Organiser" was accepted for the [109th German Librarians' Day](https://bibliothekartag2020.de) (26-29 May 2020, Hannover).

January 2020
------------
The focus of the meanwhile 3rd RDMO Community Meeting on 24.02.2020 at the Leibniz Institute for Astrophysics Potsdam (AIP) will be the adoption of the [RDMO Manifesto](/docs/RDMO-Manifest-122019.pdf) and the foundation of the RDMO Community, especially the constitution of the *Steering Group* and the *Software Group*. In addition, there will be short spotlights from the community of RDMO users. Link to the [program](/en/events/workshop022020/). During the [RDA De-Meeting](https://www.rda-deutschland.de/events/tagung-2020) following the RDMO-Community Meeting, we will offer an RDMO workshop in the morning of 25.02.2020. Registration is now possible.

December 2019
-------------
No news.

November 2019
-------------
This month we have made some updates and changes to the RDMO training materials. You can find training materials such as video tutorials or the RDMO questionnaire on the RDMO website at [Documentation](/dokumentation/). Further tutorials, FAQs etc. for different target groups (administrators*, users*) can be found on the Wiki [forschungsdaten.org](https://www.forschungsdaten.org/index.php/RDMO). The 3rd User Meeting will take place on 24.02.2020 in Potsdam at the AIP. There the constitution of the future organisation of RDMO is planned.

October 2019
------------
RDMO has made the jump to version 1. The latest version contains two important changes concerning the project membership of users. Firstly, this can now be controlled via the API and secondly, users can now remove themselves from a project at any time if they are not the last owner of this project. The report of the 2nd RDMO User Meeting on 07.10.2019 in Darmstadt at the ULB is [online](https://www.forschungsdaten.org/index.php/Zweites_Community-Treffen). We also presented RDMO at the Open Access Days in Hannover and the RDMO training materials at a workshop in Hildesheim ([slides online on Zenodo](http://doi.org/10.5281/zenodo.3520839)).

September 2019
--------------
On 27.09.2019 the semi-annual meeting of the RDMO project took place in Berlin. There were intensive discussions on the topic of sustainability and the further development of RDMO. In addition, the final details for the next RDMO User Meeting in Darmstadt were clarified.

August 2019
-----------
This year's [**RDMO User Meeting** takes place on 07.10.2019 at the ULB Darmstadt](/en/events/workshop2019). Students "Data Stewardship" of the TU Vienna have developed some prototypes, mappings and examples regarding the export of machine-actionable data management plans from an RDMO instance according to the [**RDA-Standard for maDMPs**](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard). More information can be found [here](https://helmuthb.github.io/dmp-tools-actionable/). These developments are part of the RDMO project's efforts to make DMPs created with RDMO interoperable with the maDMP standard. In addition, the new [**RDMO version 0.14.6**](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.6) is available (small changes, bugfix).

July 2019
---------
Last month we found and fixed some minor bugs in RDMO. Especially the installation process didn't work anymore due to an update of a library we used. The changes are contained in the [**new version 0.14.5** on Github](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.5), which can be installed as usual.

June 2019
---------
We repaired the **DCC question catalog** whose import did not work correctly. You can find the updated version on GitHub. It contains ten new attributes that have been added to the domain model. Therefore, you should import the domain model first before importing the DCC-catalog. The current XML file can be imported without any preparatory steps. Already imported data is retained and only the missing ten entries are added. Furthermore, there is **another method to install RDMO or to try it out quickly**. You can find on GitHub a version of RDMO that is packaged in Docker Compose. We would be happy to receive suggestions to further improve this RDMO installation method. Olaf Michaelis will take parental leave from the beginning of July until the beginning of October. Of course, we will continue to support and develop RDMO during the three months of his absence, however, with less personnel.

Mai 2019
--------
RDMO **version 0.14.4** (bug fixes) is now available. Problems caused by the switch to Django2 and Python3 should now be fixed. An update is highly recommended, as Python2 will not be supported for long. In May the kick-off of the project **"Management of Molecular Data in the Research Data Life Cycle" (MaMoDaR)**, a cooperation of FH Potsdam and Robert Koch Institute, took place at FHP and the **IPK Gatersleben** transferred RDMO as a research data management tool from the test phase to the productive phase. If you are planning **RDM training courses using RDMO**, please let us know the dates, then we can promote them (e.g. Twitter, Newsletter). We would also be happy to receive your feedback and experience reports from the training courses or training materials.

April 2019
----------
The **new version 0.14** is released. The biggest changes are the conversion to Django 2.2 and Python 3 (from this version on RDMO doesn't work with Python 2 anymore!) and the revision of the API and an extension of write access. Starting from Django 2.1 onwards, older versions of MySQL and PostgreSQL are no longer supported. Please check the [Django release notes](https://docs.djangoproject.com/en/2.2/releases/2.1/) before updating to avoid surprises. In addition, a **platform for the exchange of questionnaires** will be created. You can send us questionnaires that you would like to share.

March 2019
----------
The new RDMO version 0.13 is released. The biggest innovation is the revision of the multilingualism. RDMO can now be used with up to 5 languages. An instance in English only is also possible. RDMO was represented at two events this month: an RDMO Hands-On Lab took place at the 7th Bibliothekskongress 2019 (Leipzig) and during the eScience Days 2019 in Heidelberg RDMO was present with a poster, a demo table, and a lightning talk.

February 2019
-------------
In February the regular meeting of the RDMO project group took place in Berlin. There were intensive discussions on sustainability. It was decided to organise an RDMO user meeting at the ULB Darmstadt on 07.10.2019. The RDMO project was represented with a [poster](https://www.rda-deutschland.de/events/rda-deutschland-tagung-2019-poster) at the **RDA Germany conference**.

January 2019
-----------

We release **Version 0.12.0** of RDMO with improved error handling, a button for the URI prefix and the possibility to delete user profiles. Two new **[Screencasts](/materialien/)** have been released. We collect now *question catalogs and views*. *Janine Straka* from the RMDO team will be on maternity leave from February and then on parental leave. From March on, *Ulrike Wuttke* will take over the substitution.

December 2018
-------------

It is now clear that *Jochen Klar* will leave the AIP, but will continue to work closely with the RDMO team in the future. More screencasts are in preparation.

November 2018
-------------

We release **version 0.11.0** of RDMO with the *new data model*. With the new structure it will be possible to easily create your own question catalogs and at the same time to use the domain model of the whole RDMO community to reuse views, question catalogs, etc. We have also revised our documentation and added the new work steps.

In addition, we have **removed the subsections** of the question catalog and redesigned the question sets so that they now always correspond to a page in the interview, have their own title and appear in the small overview on the page. We were a guest at the **[Open Science Forum in Luxembourg](https://openscience2018.uni.lu/)** and gave a lecture on data management in the Digital Humanities. RDMO was also used in a hands-on session. The materials are published on Zenodo. We also published a first **[screencast](/en/promotion/)** on our website. More screencasts will follow soon.


October 2018
------------

On the 24th October we presented a RDMO poster at the **[International Open Access Week 2018](http://www.open-access-berlin.de/aktivitaeten)** in Berlin. Moreover we improved our **Postcard** and there is now a English [version](/en/promotion/).

September 2018
--------------

At the beginning of September the first bigger Community-Meeting took place at the University of Duisburg-Essen with a lot of discussions. Here is a German report of the meeting: http://www.forschungsdaten.org/index.php/Erstes_Community-Treffen
Mid-September we were at the Library of Dresden, where RDMO is quite new. At the end of September we had our second meeting of the project members in Karlsruhe and agreed on the following plan of main features:

2018:

* Finalisation of Import/Export
* Extension of API and RDMO connection to other examplary software
* Release of new data model

2019:
* Implementation of role-based views across projects
* Further development of collaborative features of RDMO for comments and versioning of input
* Diff–function for snapshots
* Genuine multilingualism
* Client capability

August 2018
-----------

In August weprepaired the first and big **Community Meeting** of RDMO which will take place at the University Duisburg-Essen. We have created a **[set of topical slides](/en/promotion/)** which was asked for and which you are allowed to re-use and adapt. Moreover, the next meeting of the project members will be in September.

July 2018
---------

In July we decided, based on discussions with the community, to evolve a restricted **multi-clientcapability** in RDMO, but expected not before next year. We were working very hard on the refractoring of our **data model** and we will report about it soon.
Moreover, there are now two **[movies](/en/promotion/)** about what RDMO, which you can re-use.

June 2018
----------

In June we added submenues to our website to achieve a clear arrangement, for example we added the topic **Data protection({{site.baseurl}}/en/protection)**. There is now a **Quick tutorial** for the import and export available: http://www.forschungsdaten.org/index.php/Import_Export . At the 13th of June we gave a *[talk]({{ site.baseurl}}/en/talks)* about RDMO at the 107th Bibliothekartag.

April & May 2018
------------------

In April we were focused on improving the **import and export** and we released a new RDMO version at the beginning of May. Including some mino bug fixes the current **version number is 0.10.2**. Moreover we provide a **[flyer]({{site.baseurl}}/en/promotion)** which you can reuse and adapt for your institute to advertise for your RDMO instance.
The current issue about data security let us introduce a splash screen for the terms of use available since **version 0.10.3**.

March 2018
------------

This month we attended the [Open Science Conference](https://www.open-science-conference.eu/) and the 11th [RDA Plenary Meeting](https://www.rd-alliance.org/plenaries/rda-eleventh-plenary-meeting-berlin-germany) and had many stimulating discussions. One big topic are machine actionable DMPs (**maDMPs**). In RDMO we support the workflow during a whole project and the integration in the infrastructure right from the start and hence, we are pioneers.
Our main goals are at the moment the *software architecture* for which we need a common standard, templates for *terms of use* and *data protection* and moreover, we provide a [**postcard**, a **poster** and **presentation slides**]({{site.baseurl}}/en/promotion) for you to use freely.

February 2018
----------------

On 8th and 9th of February, the current and new members of the RDMO project team came together for the **kickoff-meeting of the second phase of the RDMO project** at the Leibniz-Institute for Astrophysics Potsdam (AIP).

After a short introduction, we got down to business and assmbled our **work plan** for the next 6 months:

* RDMO will be present in future **workshops and conferences**. The next meetings are the [Open Science Conference](https://www.open-science-conference.eu/) and the [RDA Plenary Meeting](https://www.rd-alliance.org/plenaries/rda-eleventh-plenary-meeting-berlin-germany) in March. Both meetings are in Berlin.
* We identified **upcoming features** in RDMO and prioritised their implementation. We plan to add the much wanted improved Import/Export in the next month. Next, we will improve the management interface, including the possibility to copy and move catalogs, sections, etc. Following up, we will implement the interface to 3rd party tools via plugins and the integration of external APIs, e.g. re3data.org.
* We will further work on **tutorials and material for training and outreach**.
* Most institutions who plan to use RDMO will need to create a **documentation regarding data privacy regulations** and **terms of use** (including probably a consent declaration of users for DPR) in the process. We plan to support this by providing corresponding templates on our webpage.

January 2018
-----------------

We welcome our **new team members** Kerstin Vanessa Wedlich (KIT) and Olaf Michaelis (AIP). While Kerstin will work on the integration of RDMO into forschungsdaten.info, Olaf will delevelop the RDMO codebase further and help the technical support.

We published our first two **tutorials** on ["How do I create a catalogue in RDMO?"](https://forschungsdaten.org/index.php/Katalog_erstellen) and ["How do I create a view in RDMO?"](https://forschungsdaten.org/index.php/ansicht_erstellen) (in German). A page for [Frequently Asked Questions](http://www.forschungsdaten.org/index.php/FAQs) was created as well.

A **new questionaire** for the Switzer National Fonds (SNF) was created and can be obtained on [GitHub](http://www.github.com/rdmorganiser/rdmo-catalog).

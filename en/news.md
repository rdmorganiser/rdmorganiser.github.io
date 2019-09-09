---
layout: page

key: news
lang: en
---

News
====

On this page, we briefly summarize our activities. For up-to-date information please subscribe to your [mailing list](https://www.listserv.dfn.de/sympa/info/rdmo) or follow us on [twitter](https://www.twitter.com/rdmorganiser).

August 2019
-----------
This year's [**RDMO User Meeting** takes place on 07.10.2019 at the ULB Darmstadt](https://rdmorganiser.github.io/workshop2019/). Students "Data Stewardship" of the TU Vienna have developed some prototypes, mappings and examples regarding the export of machine-actionable data management plans from an RDMO instance according to the [**RDA-Standard for maDMPs**](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard). More information can be found [here](https://helmuthb.github.io/dmp-tools-actionable/). These developments are part of the RDMO project's efforts to make DMPs created with RDMO interoperable with the maDMP standard. In addition, the new [**RDMO version 0.14.6**](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.6) is available (small changes, bugfix).

July 2019
---------
Last month we found and fixed some minor bugs in RDMO. Especially the installation process didn't work anymore due to an update of a library we used. The changes are contained in the [**new version 0.14.5** on Github](https://github.com/rdmorganiser/rdmo/releases/tag/0.14.5), which can be installed as usual.

June 2019
---------
We repaired the **DCC question catalog** whose import did not work correctly. You can find the updated version on GitHub. It contains ten new attributes that have been added to the domain model. Therefore, you should import the domain model first before importing the DCC-catalog. The current XML file can be imported without any preparatory steps. Already imported data is retained and only the missing ten entries are added. Furthermore, there is **another method to install RDMO or to try it out quickly**. You can find on GitHub a version of RDMO that is packaged in Docker Compose. We would be happy to receive suggestions to further improve this RDMO installation method. Olaf Michaelis will take parental leave from the beginning of July until the beginning of October. Of course, we will continue to support and develop RDMO during the three months of his absence, however, with less personnel. 

Mai 2019
--------
RDMO **version 0.14.4** (bug fixes) is now available. Problems caused by the switch to Django2 and Python3 should now be fixed. An update is highly recommended, as Python2 will not be supported for long. In May the kick-off of the project [**"Management of Molecular Data in the Research Data Life Cycle" (MaMoDaR)**](https://www.fh-potsdam.de/informieren/aktuelles/news-detailansicht/artikel/start-fuer-forschungsprojekt-mamodar/), a cooperation of FH Potsdam and Robert Koch Institute, took place at FHP and the **IPK Gatersleben** transferred RDMO as a research data management tool from the test phase to the productive phase. If you are planning **RDM training courses using RDMO**, please let us know the dates, then we can promote them (e.g. Twitter, Newsletter). We would also be happy to receive your feedback and experience reports from the training courses or training materials. 

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

We release **Version 0.12.0** of RDMO with improved error handling, a button for the URI prefix and the possibility to delete user profiles. Two new **[Screencasts](https://rdmorganiser.github.io/materialien/)** have been released. We collect now *question catalogs and views*. *Janine Straka* from the RMDO team will be on maternity leave from February and then on parental leave. From March on, *Ulrike Wuttke* will take over the substitution.

December 2018
-------------

It is now clear that *Jochen Klar* will leave the AIP, but will continue to work closely with the RDMO team in the future. More screencasts are in preparation.

November 2018
-------------

We release **version 0.11.0** of RDMO with the *new data model*. With the new structure it will be possible to easily create your own question catalogs and at the same time to use the domain model of the whole RDMO community to reuse views, question catalogs, etc. We have also revised our documentation and added the new work steps.

In addition, we have **removed the subsections** of the question catalog and redesigned the question sets so that they now always correspond to a page in the interview, have their own title and appear in the small overview on the page. We were a guest at the **[Open Science Forum in Luxembourg](https://openscience2018.uni.lu/)** and gave a lecture on data management in the Digital Humanities. RDMO was also used in a hands-on session. The materials are published on Zenodo. We also published a first **[screencast](https://rdmorganiser.github.io/en/promotion/)** on our website. More screencasts will follow soon.


October 2018
------------

On the 24th October we presented a RDMO poster at the **[International Open Access Week 2018](http://www.open-access-berlin.de/aktivitaeten/oa-week-2018)** in Berlin. Moreover we improved our **Postcard** and there is now a English [version](https://rdmorganiser.github.io/en/promotion/).

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

In August weprepaired the first and big **Community Meeting** of RDMO which will take place at the University Duisburg-Essen. We have created a **[set of topical slides](https://rdmorganiser.github.io/en/promotion/)** which was asked for and which you are allowed to re-use and adapt. Moreover, the next meeting of the project members will be in September.

July 2018
---------

In July we decided, based on discussions with the community, to evolve a restricted **multi-clientcapability** in RDMO, but expected not before next year. We were working very hard on the refractoring of our **data model** and we will report about it soon.
Moreover, there are now two **[movies](https://rdmorganiser.github.io/en/promotion/)** about what RDMO, which you can re-use.

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

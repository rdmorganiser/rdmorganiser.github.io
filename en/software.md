---
layout: page

key: software
lang: en
---

Software
========

RDMO is implemented as a web application. It is available as open-source software on [github.com](https://github.com/rdmorganiser). Our main use case is the collaborative collecting, editing and maintenance of all necessary information for a sustainable data management. This is done along the notion of *projects*, which will be defined by the users for their particular context.

The main functionality of RDMO includes the following features:

Input
-----

The input of all information about a project is collected via a structured interview using an interactive web interface. This includes the following functions:

* Collaborative work of the different Stakeholders
* Skipping of redundant questions based on the given answers
* Display of progress of the given input
* Different widgets (rulers, check boxes, drop-down lists)
* Use of a controlled vocabulary for answering choices
* Upload of documents (e.g. meta data documentation, codebooks, etc.)
* Freezing the state of all project information at times using snapshots

Output
------

The information can be retrieved in several ways:

* Aggregation of the given information into textual views (e.g. structured for data management plans to be used in proposals for Horizon 2020, DFG)
* Time line of all tasks to be done regarding data management
* Interfaces to external services or data models

Setup and operation
-------------------

We pay special attention to making RDMO easily installable and customisable, so that institutions like research institutes, libraries and universities can adapt it for their work. This includes:

* Complete customisation of the user interface
    * Corporate design
    * Layout
* Complete customisation of the content
    * Questions and answering options
    * Help texts, including links to external sources
    * Templates for textual data management plans
    * Tasks to be done
* Integration into the local infrastructure
    * Authorisation and authentication
    * APIs

Development
-----------

For the further development of RDMO, we use a roadmap process in which the existing issues on GitHub are prioritised by the community. In 2022, a large number of issues were prioritised into `critical`, `high`, `medium` and `low` in two community meetings. The best way to view the individual lists is on GitHub, under these links:

* [Critical](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+critical%22)
* [High](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+high%22)
* [Medium](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+medium%22)
* [Low](https://github.com/rdmorganiser/rdmo/issues?q=is%3Aopen+is%3Aissue+label%3A%22priority%3A+low%22)

To transparently communicate the status of the work in progress, we use the "Projects" functionality of GitHub, where the individual issues are displayed on a [Kanban board](https://en.wikipedia.org/wiki/Kanban_board):

<https://github.com/orgs/rdmorganiser/projects/1>

New feature requests, bug reports or security issues are best suggested or reported via GitHub Issue:

<https://github.com/rdmorganiser/rdmo/issues/new/choose>

Of course, we also accept requests via all other communication channels.

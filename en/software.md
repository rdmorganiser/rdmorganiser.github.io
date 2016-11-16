---
layout: page

key: software
lang: en
---

Software
========

RDMO is implemented as a web application. It is, even in the development stage, available as open-source software on [github.com](https://github.com/rdmorganiser). Our main use case is the collaborative editing and maintenance of all necessary information for a sustainable data management. his is done along the notion of *projects*, which will be defined by the users for their particular context.

As of now, we plan the following features:

Input
-----

The input of all information about a project is collected via a structured interview using an interactive web interface. This includes the following functions:

* Collaborative work of the different Stakeholders
* Skipping of redundant questions based on the given answers
* Display of progress of the given input
* Different widgets (rulers, check boxes, drop-down lists)
* Use of a controlled vocabulary for answering choices
* Discussion and comments
* Upload of documents (e.g. meta data documentation, codebooks, etc.)
* Freezing the state of all project information at times using snapshots

Output
------

The information can be retrieved in several ways:

* Aggregation of the given information into textual views (e.g. structured for data management plans to be used in proposals for Horizon 2020)
* Time line of all tasks to be done regarding data management
* Notifications about upcoming (predefined) events
* Overview summarizing different projects, e.g. information about required IT-resources
* Interfaces to external services or data models (e.g. CERIF)

Setup and operation
-------------------

We pay special attention to making RDMO easily installable and customisable, so that institutions like research institutes, libraries and university groups can adapt it for their work. This includes:

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

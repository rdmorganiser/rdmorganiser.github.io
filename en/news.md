---
layout: page

key: news
lang: en
---

# News

On this page we summarize our current activities.
To stay up to date, subscribe to our mailing list [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/info/rdmo), follow us on [Twitter](https ://twitter.com/rdmorganiser), or chat with us on [Slack](https://rdmo.slack.com).
(Write an email to us: <a href="mailto:rdmo-team@listserv.dfn.de">rdmo-team@listserv.dfn.de</a> and we will invite you to Slack.) <br/>

{% for announcement in site.data.2023.current %}
## Announcements:

<table style="width: 100%; border: 3px dotted red;">
  <tr>
    <th style="width: 20%; padding: 10px;"></th>
    <td style="width: 80%; padding: 10px;"></td>
  </tr>
  <tr>
    <th style="width: 20%; padding: 10px;">{{ announcement.date | markdownify }}</th>
    <td style="width: 80%; padding:10px;">{{ announcement.event.en | markdownify }}
    </td>
  </tr>
</table>
{% endfor %}

## RDMO working group

The [RDMO working group]({{ siteurl }}/Community) was constituted with the event on October 7th, 2020. It calls on RDMO users to participate in further work on the basis of the [Memorandum of Understanding (MoU)]({{ siteurl}}/docs/Memorandum-of-Understanding-RDMO.pdf).
For connection information to the workshops and regular dates, please contact the RDMO working group or the responsible person. Interested people are welcome.

## Regular RDMO video conference dates
(Status: April 2023)


<table style="width: 100%; border:1px solid black;">
	<tr>
		<th style="width: 20%;"/>
		<th style="width: 45%; padding: 10px;">Fokus</th>
		<th style="width: 20%; padding: 10px;">Termin</th>
		<th style="width: 25%; padding: 10px;">Ansprechperson</th>
	</tr>
	{% for group in site.data.groups.current %}
	<tr>
		<td style="font-weight: bold; padding: 10px;">{{ group.name_en | markdownify }}</td>
		<td>
			<ul>
				<li>{{ group.content_en1 | markdownify }}</li>
				<li>{{ group.content_en2 | markdownify }}</li>
			</ul>
		</td>
		<td>{{ group.date_en | markdownify }}</td>
		<td><a href="mailto:{{ leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
	{% for group in site.data.groups.former %}
	<tr style="border:1px solid grey; border-bottom-right-radius: 15px; color:grey;">
		<td style="font-weight: bold;">{{ group.name_en | markdownify }}</td>
		<td>
			<ul>
				<li>{{ group.content_en1 | markdownify }}</li>
				<li>{{ group.content_en2 | markdownify }}</li>
			</ul>
		</td>
		<td>{{ group.date_en | markdownify }}</td>
		<td><a href="mailto:{{ leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
</table>

## Ad Hoc Groups

For special tasks and questions, further working groups can be formed from among the members at any time. They are coordinated by the SG. The general meeting decides on the continuation of the ad-hoc groups.<br/>
We would like to invite all institutions that are interested in the preservation and further development of RDMO to sign the MoU and send it to the following e-mail address: rdmo-steuerungsgruppe@listserv.dfn.de.

## General Meeting

The general meeting of the RDMO collaboration comprises the entirety of all members. Users and other interested parties can participate in the general meeting. The members elect the representatives in the SG. The general meeting meets at least once a year as required.
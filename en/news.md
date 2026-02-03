

# News

<!--- mdtoc: toc begin -->
1. [Announcements](#announcements-)
2. [Regular RDMO video conference dates](#regular-rdmo-video-conference-dates)
<!--- mdtoc: toc end -->

On this page we summarize our current activities. To stay up to date, subscribe to our mailing list [rdmo@listserv.dfn.de](https://www.listserv.dfn.de/sympa/info/rdmo), or chat with us on [Slack](https://rdmo.slack.com).  
(Write an email to us: [rdmo-team@listserv.dfn.de](mailto:rdmo-team@listserv.dfn.de) and we will invite you to Slack.)

## Announcements

In concomitance with the soon coming [**Love Data Week 2026**](https://forschungsdaten.info/fdm-im-deutschsprachigen-raum/love-data-week-2026/) (9th-13th February) many talks are being offered around RDMO and data management plans. We have put together an overview:

{% include announcements.html %}

The [RDMO working group]({{ site.baseurl }}/en/Community) was constituted with the event on October 7th, 2020. It calls on RDMO users to participate in further work on the basis of the [Memorandum of Understanding (MoU)]({{ site.baseurl}}/docs/Memorandum-of-Understanding-RDMO.pdf). For connection information to the workshops and regular dates, please contact the RDMO working group or the responsible person. Interested people are welcome.

The [RDMO association]({{ site.baseurl }}/en/Community) was constituted with the founding meeting on November 19th, 2024, to guarantee for the required long-term availability and reliability of the RDMO tool.

## Regular RDMO video conference dates

(Status: January 2026)

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
		<td style="padding: 10px;">
			<ul>
				<li>{{ group.content_en1 | markdownify }}</li>
				<li>{{ group.content_en2 | markdownify }}</li>
			</ul>
		</td>
		<td style="padding: 10px;">{{ group.date_en | markdownify }}</td>
		<td style="padding: 10px;"><a href="{{ group.leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
	{% for group in site.data.groups.former %}
	<tr style="border:1px solid grey; border-bottom-right-radius: 15px; color:grey;">
		<td style="font-weight: bold; padding: 10px;">{{ group.name_en | markdownify }}</td>
		<td style="padding: 10px;">
			<ul>
				<li>{{ group.content_en1 | markdownify }}</li>
				<li>{{ group.content_en2 | markdownify }}</li>
			</ul>
		</td>
		<td style="padding: 10px;">{{ group.date_en | markdownify }}</td>
		<td style="padding: 10px;"><a href="{{ group.leader_mail }}">{{ group.leader | markdownify }}</a></td>
	</tr>
	{% endfor %}
</table>

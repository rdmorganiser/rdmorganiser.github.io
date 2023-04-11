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

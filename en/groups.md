---
layout: page

key: sg-group
lang: en

# sg data moved to _data/sg-group.yml, img in img/team

---


# RDMO Consortium Governance

<h1>Steering Group</h1>

{% for member in site.data.sg-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

<h1>Software Group</h1>

{% for member in site.data.sw-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

<h1>Content Group</h1>

{% for member in site.data.cg-group.current %}
<div class="team-member">
    <img src="{{ site.baseurl }}/{{ member.image}}" />
    <div class="team-member-info">
        {{ member.text.en | markdownify }}
    </div>
</div>
{% endfor %}

---
layout: default
title: Contact Us
---

# Contact us
Insightful AI can be reached through email.

<insightfulai@gmail.com>

# Follow Us
Insightful AI can be followed on social media on the following sites:

<nav>
    {% for item in site.data.social %}
        <a href="{{ item.link }}">{{ item.name }} <br> <br> </a>
    {% endfor %}
</nav>
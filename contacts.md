---
layout: default
title: Contact Us
---

# Contact us
For general inquiries, please contact us at <contact@insightfulaiapps.com>.

For media inquiries, please contact us at <media@insightfulaiapps.com>.

If you are a customer and you have an issue with one of your products, please contact us at <support@insightfulaiapps.com>.

# Follow Us
Follow us on these sites!
<nav>
    {% for item in site.data.social %}
        <a href="{{ item.link }}">{{ item.name }} <br> <br> </a>
    {% endfor %}
</nav>
---
layout: infusion-new-text
title: Infusion Manual
---

# Welcome to the Infusion manual!

The Infusion manual is the best official source of all information on Infusion's functions. The Infusion manual has pages explaining every feature in Infusion as well as tutorials which showcase how Infusion's various functions can be used.

New to Infusion? Check out the [Getting Started](getting-started.html) guide.

# Table of Contents

<div>
    {% for item in site.data.manual-pages %}
        <a href="{{ item.link }}">{{ item.name }}</a>
        <br>
    {% endfor %}
</div>
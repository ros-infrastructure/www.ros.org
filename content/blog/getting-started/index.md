---
title: Getting Started
subtitle: Where to get started with ROS 2
author: Katherine Scott
created_at: 2021-06-15 09:00:00 +0000
kind: article
header_class: bg-photo
header_image: /imgs/quadcopter.png # Optional, default defined in blog layout
---

## Installation

ROS is released as *distributions*, also called "distros", with more than one ROS distribution supported at a time. Some are releases come with long term support (LTS), meaning they are more stable and have undergone extensive testing. Other distributions are newer with shorter lifetimes, but with support for more recent platforms and more recent versions of their constituent ROS packages. See the [distributions list](http://docs.ros.org/) for more details. Generally a new ROS distro is released every year on [world turtle day](https://www.worldturtleday.org/), with LTS distros being released in even years. We currently recommend one of the versions below:

<table style="text-align: center">
<tr>
<td style="border: none;">
<a href="http://wiki.ros.org/noetic/Installation/Ubuntu">
<img src="/imgs/noetic.png" alt="ROS Noetic Ninjemys logo" style="float: center; max-height: 120px; vertical-align: middle">
</a>
<p><b>Get ROS Noetic Ninjemys on Ubuntu Linux</b></p>
<p>(Recommended for Latest ROS 1 LTS)</p>
<p><a class="btn btn-large btn-download" href="http://wiki.ros.org/noetic/Installation/Ubuntu">Install</a>
</p>
</td>
<td style="border: none;">
<a href="https://index.ros.org/doc/ros2/Installation/Foxy/">
<img src="/imgs/foxy.png" alt="ROS Foxy Fitzroy logo" style="float: center; max-height: 120px; vertical-align: middle">
</a>
<p><b>Get ROS Foxy Fitzroy on Ubuntu Linux, macOS, or Windows 10</b></p>
<p>(Recommended for Latest ROS 2 LTS)</p>
<p><a class="btn btn-large btn-download" href="https://index.ros.org/doc/ros2/Installation/Foxy/">Install</a>
</p>
</td>
<td style="border: none;">
<a href="https://docs.ros.org/en/galactic/Installation.html">
<img src="/imgs/galactic.png" alt="ROS Galactic Geochelone logo" style="float: center; max-height: 120px; vertical-align: middle">
</a>
<p><b>Get ROS Galactic Geochelone on Ubuntu Linux, macOS, or Windows 10</b></p>
<p>(Recommended for Latest ROS 2)</p>
<p><a class="btn btn-large btn-download" href="https://docs.ros.org/en/galactic/Installation.html">Install</a>
</p>
</td>
</tr>
</table>

## Support

There are several mechanisms in place to provide support to the ROS community, each with its own purpose: [package documentation](https://docs.ros.org), [Q&A forum](https://answers.ros.org), [discussion forum](https://discourse.ros.org), [package index](https://index.ros.org), and of course the issue trackers.
It is important to pick the right resource to reduce response time, avoid message duplication, and promote the discussion of new ideas.

### [ROS Package Documentation <i style="font-size: 1rem;" class="fas fa-file-code"></i>](https://docs.ros.org)
Documentation for core ROS packages as well as package specific content is hosted on [docs.ros.org](https://docs.ros.org).
On this site you can find the core tutorials and documentation for the project as well as generated API documentation for individual packages.

### [ROS Answers <i style="font-size: 1rem;" class="fas fa-question-circle"></i>](https://answers.ros.org)
If the documentation doesn't address your problem, [ROS Answers](https://answers.ros.org) is next.
Take heart: it is very likely that someone else has faced the same problem before, and that it's covered among the more than 60,000 questions at ROS Answers.
Start by searching for questions similar to yours; if your question isn't already asked, post a new one. Be sure to check the guidelines on how to prepare your question before posting.

### [ROS Discourse Forums <i style="font-size: 1rem;" class="fas fa-comments"></i>](https://discourse.ros.org)

To stay up-to-date on the latest developments within the ROS community, you'll want to join the **[ROS Discourse](https://discourse.ros.org)** forums.
These forums are the place for announcements, news, and discussions of general interest.
The ROS Discourse is **not the right place to ask troubleshooting questions or report bugs**; please use the other support resources listed above instead.

### [ROS Index <i style="font-size: 1rem;" class="fas fa-sitemap"></i>](https://index.ros.org)

When you want to find out information about a specific package the [index](https://index.ros.org) is the best place to start.
It connects you to all the important locations relevant to a package.
In addition to the official documentation for ROS packages, the wiki contains two key resources you should consult: the Troubleshooting guide and the FAQ. Solutions to many common problems are covered in these two pages. If you have ever used [PyPI](https://pypi.org/) you should feel right at home on ROS Index. 

### [Issue Trackers <i style="font-size: 1rem;" class="fas fa-bug"></i>](https://github.com/ros2/ros2/issues)

When you've identified a bug (e.g., as a result of a discussion at [ROS Answers](https://answers.ros.org)), or when you want to request a new feature, head to the issue trackers.
Links are provided in the packages metadata available on [ROS Index](https://index.ros.org).
When reporting a bug, be sure to provide a detailed description of the problem, the environment in which it occurs, any detail that may help developers to reproduce the issue, and if possible, a debug backtrace.


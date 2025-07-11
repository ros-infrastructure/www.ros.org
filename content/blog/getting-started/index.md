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

ROS is released as *distributions*, also called "distros", with more than one ROS distribution supported at a time. Some releases come with long term support (LTS), meaning they are more stable and have undergone extensive testing. Other distributions are newer with shorter lifetimes, but with support for more recent platforms and more recent versions of their constituent ROS packages. See the [distributions list](http://docs.ros.org/) for more details. Generally a new ROS distro is released every year on [world turtle day](https://www.worldturtleday.org/), with LTS distros being released in even years. We currently recommend one of the versions below:

<table style="text-align: center">
  <tr>
    <td style="border: none;">
      <a href="https://docs.ros.org/en/kilted/Installation.html">
        <img src="/imgs/kilted-kaiju.png" alt="ROS Kilted Kaiju logo" style="float: center; max-height: 120px; vertical-align: middle">
      </a>
      <p><b>ROS 2 Kilted Kaiju</b></p>
      <p><i>Ubuntu Linux 24.04, Windows 10</i></p>
      <p>(Latest ROS 2 short-term release)</p>
      <p><a class="btn btn-large btn-download" href="https://docs.ros.org/en/kilted/Installation.html">Install</a></p>
    </td>
    <td style="border: none;">
      <a href="https://docs.ros.org/en/jazzy/Installation.html">
        <img src="/imgs/JazzyNoBG.png" alt="ROS Jazzy Jalisco logo" style="float: center; max-height: 120px; vertical-align: middle">
      </a>
      <p><b>ROS 2 Jazzy Jalisco</b></p>
      <p><i>Ubuntu Linux 24.04, Windows 10</i></p>
      <p>(Latest ROS 2 LTS)</p>
      <p><a class="btn btn-large btn-download" href="https://docs.ros.org/en/jazzy/Installation.html">Install</a></p>
    </td>
    <td style="border: none;">
      <a href="https://docs.ros.org/en/humble/Installation.html">
        <img src="/imgs/humble.png" alt="ROS Humble Hawksbill logo" style="float: center; max-height: 120px; vertical-align: middle">
      </a>
      <p><b>Get ROS 2 Humble Hawksbill</b></p>
      <p><i>Ubuntu Linux 22.04, Windows 10</i></p>
      <p>(Best upgrade path for ROS 1 users)</p>
      <p><a class="btn btn-large btn-download" href="https://docs.ros.org/en/humble/Installation.html">Install</a></p>
    </td>
  </tr>
</table>

[Want to try ROS using Docker? Check out the latest distros on Dockerhub](https://hub.docker.com/_/ros/)

**If this is your first time using ROS, we *highly recommend* that you use a Tier 1 operating system as listed by [REP-2000](https://www.ros.org/reps/rep-2000.html) for your desired ROS Distro.**

## Important Notes on Installation

ROS is a complex piece of software that work's closely with your computer's
operating system and system libraries.  As such, we build and test each ROS
distro with only a handful of the latest operating systems, we call these
operating systems, "tier 1".  Each ROS distro is built and tested for these tier
1 operating systems only, **other operating systems may require significantly
more work to run a particular ROS distro**.  In practical terms this means that
you'll get the best experience if you use a the tier 1 operating systems we
recommended.  For example, ROS 2 Humble Hawksbill works best on Ubuntu 22.04
Jammy Jellyfish, and Windows 10.  If you try to install ROS on any other
operating system you may run into issues, **and we do not recommend this for new
users**.  For more information about ROS distros and their tier 1 operating
systems [please read REP-2000.](https://www.ros.org/reps/rep-2000.html)

If you plan on using the [Gazebo simulator](https://gazebosim.org/home) with ROS
we recommend that you consult the Gazebo documentation for the [recommended
version of Gazebo for your ROS
installation](https://gazebosim.org/docs/garden/ros_installation). Not all ROS
and Gazebo versions are compatible, other versions are compatible but require
that you build from source. Using the recommended combination of ROS and Gazebo
will greatly improve your overall experience. No matter what combination you
decide on, you'll need to use [ROS/GZ
bridge](https://github.com/gazebosim/ros_gz) to connect the two pieces of
software.

**If you are a new user and would like to install the latest version of ROS or
ROS 2 on any operating system other than the listed tier 1 operating system we
highly recommend that you install the recommended tier 1 operating system in a
virtual machine and then install ROS inside of the virtual
machine. Alternatively, if you are familiar with Docker, you can also use ROS in
a [Docker container](https://hub.docker.com/_/ros/).**

## Support

There are several mechanisms in place to provide support to the ROS community,
each with its own purpose: [package documentation](https://docs.ros.org), [Q&A
forum](https://robotics.stackexchange.com/), [discussion forum](https://discourse.ros.org),
[package index](https://index.ros.org), and of course the issue trackers.  It is
important to pick the right resource to reduce response time, avoid message
duplication, and promote the discussion of new ideas.

### [ROS Package Documentation <i style="font-size: 1rem;" class="fas fa-file-code"></i>](https://docs.ros.org)
Documentation for core ROS packages as well as package specific content is
hosted on [docs.ros.org](https://docs.ros.org).  On this site you can find the
core tutorials and documentation for the project as well as generated API
documentation for individual packages.

### [Robotics Stack Exchange <i style="font-size: 1rem;" class="fas fa-question-circle"></i>](https://robotics.stackexchange.com/)
If the documentation doesn't address your problem, [Robotics Stack Exchange](https://robotics.stackexchange.com/) is next.  Take heart: it is very likely that
someone else has faced the same problem before, and that it's covered among the
more than 60,000 questions at ROS Answers.  Start by searching for questions
similar to yours; if your question isn't already asked, post a new one. Be sure
to check the guidelines on how to prepare your question before posting.

### [ROS Discourse Forums <i style="font-size: 1rem;" class="fas fa-comments"></i>](https://discourse.ros.org)

To stay up-to-date on the latest developments within the ROS community, you'll
want to join the **[ROS Discourse](https://discourse.ros.org)** forums.  These
forums are the place for announcements, news, and discussions of general
interest.  The ROS Discourse is **not the right place to ask troubleshooting
questions or report bugs**; please use the other support resources listed above
instead.

### [Open Robotics Discord Server  <i style="font-size: 1rem;" class="fas fa-users"></i>](/blog/discord/)

Open Robotics hosts a [community Discord server](/blog/discord/) where ROS,
Gazebo, and Open-RMF users can meet with each other, chat, and coordinate on
open-source development. If you are looking to connect with ROS users this a
great place to start.

### [ROS Index <i style="font-size: 1rem;" class="fas fa-sitemap"></i>](https://index.ros.org)

When you want to find out information about a specific package the
[index](https://index.ros.org) is the best place to start.  It connects you to
all the important locations relevant to a package.  In addition to the official
documentation for ROS packages, the wiki contains two key resources you should
consult: the Troubleshooting guide and the FAQ. Solutions to many common
problems are covered in these two pages. If you have ever used
[PyPI](https://pypi.org/) you should feel right at home on ROS Index.

### [Issue Trackers <i style="font-size: 1rem;" class="fas fa-bug"></i>](https://github.com/ros2/ros2/issues)

When you've identified a bug (e.g., as a result of a discussion at [Robotics Stack Exchange](https://robotics.stackexchange.com/)), or when you want to request a new feature,
head to the issue trackers.  Links are provided in the packages metadata
available on [ROS Index](https://index.ros.org).  When reporting a bug, be sure
to provide a detailed description of the problem, the environment in which it
occurs, any detail that may help developers to reproduce the issue, and if
possible, a debug backtrace.


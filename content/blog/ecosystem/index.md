---
title: The ROS Ecosystem
subtitle: Software, Hardware, Documentation, and People
author: Katherine Scott
created_at: 2021-06-15 09:00:00 +0000
kind: article
header_class: bg-photo
header_image: /imgs/galactic.png # Optional, default defined in blog layout
---

### ROS Has Solutions to Your Robot Problems

Despite the name, ROS is not, in fact, an operating system. Rather, it's an SDK
(software development kit) that provides the building blocks you need to build
your robot applications.
Whether your application is a class project, a scientific experiment, a
research prototype, or a final product, ROS will help you to achieve your goal
faster.

And it's all open source.

<div class="image-large">
  <img src="/imgs/ros-equation.png" />
</div>

#### Plumbing

At its core, ROS provides a message-passing system, often called "middleware" or "plumbing".
Communication is one of the first needs to arise when implementing a new robot
application, or really any software system that will interact with hardware.
ROS's built-in and well-tested messaging system saves you time by managing the
details of communication between distributed *nodes* via an anonymous
publish/subscribe pattern.
This approach encourages good practices in your software
development, including fault isolation, separation of concerns, and clear
interfaces. Using ROS results in systems that are easier to maintain, contribute to,
and reuse.

Along the way you can take advantage of the vast community experience that has
resulted in standard ROS message formats; these standards are used for
interacting with everything from LIDAR and cameras to localization algorithms
and user interfaces.

#### Tools

Building robot applications is challenging.
You have all the difficulties of any software development effort combined with
the need to interact asynchronously with the physical world, through sensors
and actuators.
To build applications efficiently, you need good developer tools. ROS has them, including: launch, introspection, debugging, visualization,
plotting, logging, and playback. These tools accelerate the progress of your dev team, and they can be
included with your product when you ship it.

#### Capabilities

The ROS ecosystem is a cornucopia of robot software.
Whether you need a device driver for your GPS, a walk and balance controller
for your quadruped, or a mapping system for your mobile robot, ROS has
something for you.
From drivers to algorithms, to user interfaces, ROS provides the building
blocks that allow you to focus on your application.

The goal of the ROS project is to continually raise the bar on what is taken
for granted, and thus to lower the barrier to entry to building robot
applications.
Anyone with a good idea for a useful (or fun, or interesting) robot should be
able to make that idea real, without having to understand everything about the
underlying hardware and software.

#### Community

The ROS [community](/blog/community) is large, diverse, and global.
From students and hobbyists to multinational corporations and government
agencies, people and organizations of all stripes keep the ROS
project going.

The community hub and neutral steward for the project is [Open
Robotics](https://www.openrobotics.org), who hosts the shared online services
(such as this website), create and manage distribution releases (including
the binary packages that you install), and develop and maintain much of the core
software within ROS.
*Open Robotics also offers [engineering
services](https://www.openrobotics.org/solutions) related to ROS.*
 

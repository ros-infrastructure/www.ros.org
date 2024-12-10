---
title: "Upcoming ROS 1 End of Life"
author:  Kat Scott 
subtitle: Migration Paths for ROS 1 Users
created_at: 2024-12-16 16:21:05 -0700
kind: article
header_class:  bg-photo 
header_image:  /imgs/eol-bg.png 
---

## ROS 1 Noetic Ninjemys goes End-of-Life 2024-05-31

When we [announced](https://www.openrobotics.org/blog/2020/5/23/noetic-ninjemys-the-last-official-ros-1-release) ROS 1 Noetic Ninjemys on May 23rd, 2020 we made it very clear that it would be the last official ROS 1 distribution. 
In the proceeding five years we focused our efforts on making ROS 2 a world class framework for professional robot development, and our user community seems to agree.
According to September 2024 download data from our servers ROS 2 downloads now make up almost 80% of all ROS downloads.
We've now seen ROS 2 used successfully in production by a large number of companies, across dozens of industries, and we think it is time for the last remaining ROS users to make the switch. 

If you have been directed to this page it was probably because you saw one of the notifications we slipped into the source code for ROS Noetic or RViz. 
We've heard from a number of users that they were unaware that ROS 1 Noetic, and consequently all of 1, will go end-of-life on **May 31st, 2025**.
We're sorry that we interrupted your work, but it is crucial that you know what happens once ROS 1 goes end-of-life.

<img src="/imgs/distro-download-data.png" alt="ROS Downloads by Distro, September 2024" style="width:600px;align:center"/>

### What Does End-of-Life Mean?

Users often ask us, “what does end of life mean?” 
To put it briefly, end of life means that the ROS team will no longer support that particular ROS release. 
In practical terms, this means that we will no longer be providing the following for any ROS 1 release, including Noetic:

* New features or capabilities
* Security updates
* Bug fixes, patches or support
* Updated binaries

After May 31st, 2025 ROS 1 Noetic will progressively become more difficult to support or use. ROS 1 users may find themselves open to un-patched security vulnerabilities and will be unable to easily address bugs encountered after this date. 

It is also worth *noting the things that won’t change after ROS 1* goes end of life:

* ROS 1 binaries will not suddenly disappear
* Users will not need to migrate immediately, but they should migrate as soon as possible
* Your ROS 1 project will not suddenly stop working on May 31st

<br>

### ROS 2 Migration Options

If you are still using ROS 1 it is time to consider switching to ROS 2 Humble Hawksbill ([migration guide](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html)) or ROS 2 Jazzy Jalisco ([migration guide](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html)).
Which distro you choose as your migration target  is going to depend on the complexity of your ROS 1 system.
This [migration heuristic tool](https://github.com/osrf/ros2-porting-heuristics) can provide you with estimate the complexity of your migration to ROS 2.
If have a you smaller ROS 1 project, or a reasonably de-coupled system, you can most likely migrate directly to ROS 2 Jazzy Jalisco.
If your ROS 1 system is tightly coupled, has a number of un-ported dependencies, or is reasonably complex, you may want to take advantage of the [ROS 1 to ROS 2 bridge](https://github.com/ros2/ros1_bridge).
Humble Hawksbill has [limited Tier 3 support for Ubuntu 20.04](https://www.ros.org/reps/rep-2000.html#humble-hawksbill-may-2022-may-2027), and the ROS 1 bridge can be used with Humble if you compile from source. 

**A few things worth noting for current ROS 1 users:**

* ROS 2 is considered feature complete with the release of ROS 2 Humble Hawksbill. 
* Nodelets in ROS 1 have been replaced with ROS 2's [composable nodes concept](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Composition.html).
* Parameters have changed significantly in ROS 2, this [migration guide](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1/Migrating-Parameters.html) provides guidance on how to migrate your parameter set.
* ROS 2 supports three types of launch files [YAML, Python, and XML](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Creating-Launch-Files.html). There is a complete guide to [migrating your ROS 1 launch files](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1/Migrating-Launch-Files.html) available on docs.ros.org.
* The ROS 2 [lifecycle node API](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Writing-a-Composable-Node.html) has standardized the lifecycle of ROS nodes. We recommend taking advantage of this feature when migrating your ROS 1 projects. 
* ROS 2 users now have multiple official and unofficial ROS Middleware (RMWs) to choose from:
  * DDS-based RMW like [Fast-DDS](https://fast-dds.docs.eprosima.com/en/latest/fastdds/ros2/ros2_configure.html) and [Cyclone DDS](https://cyclonedds.io/docs/cyclonedds/latest/about_dds/eclipse_cyclone_dds.html). We recommend new DDS users read our [tuning guide](https://docs.ros.org/en/jazzy/How-To-Guides/DDS-tuning.html) and familiarize themselves with utilities like the [Fast-DDS Discovery Server](https://fast-dds.docs.eprosima.com/en/latest/fastdds/ros2/discovery_server/ros2_discovery_server.html) when using WiFi networks.
  * A preview of [RMW-Zenoh](https://github.com/ros2/rmw_zenoh) is available in ROS 2 Jazzy when compiled from source. 
  * Other RMWs are supported by the community including [IceOryx2](https://discourse.ros.org/t/rmw-iceoryx2-v0-1-0-release/40996), [Gurum-DDS](https://github.com/ros2/rmw_gurumdds) and even, well, [e-mail](https://discourse.ros.org/t/ros-2-over-email-rmw-email-an-rmw-implementation/22360).
* If your robot supports custom hardware, if may be worth investigating [microROS.](https://micro.ros.org/),
* ROSBag performance has improved significantly in ROS 2. As of ROS 2 Humble [MCap](https://mcap.dev/guides) is the standard ROS Bag format. 
* Starting with ROS 2 Iron Irwini, binaries for modern Gazebo are available. ROS 2 / modern Gazebo integration is accomplished using the [`ros_gz` repository](https://github.com/gazebosim/ros_gz)
* Amazon has released a [migration tool for ROS 1 users](https://github.com/awslabs/ros2-migration-tools). 
* ROS Developer David Lu maintains a ROS 1 to ROS 2 [migration tool.](https://github.com/DLu/roscompile/tree/main/magical_ros2_conversion_tool)
* The [ROS 2 Cookbook](https://github.com/mikeferguson/ros2_cookbook) offers code samples for common ROS 2 tasks


<br>

#### Other Migration Options

We highly recommend you migrate your ROS 1 project to ROS 2 as soon as possible.
Our experience is that most users found the migration process significantly less challenging that they initially expected.
If you simply can't migrate your ROS 1 project right now you do have a few options.*
*However, none of these solutions are officially recommended, and we can't speak to their long-term robustness.* 
Canonical, offers [extended security maintenance](https://ubuntu.com/robotics/docs/tutorial-ros-esm) for a number of ROS 1 host operating systems for a fee.
[ROS-O](https://github.com/ros-o/ros-o) is a volunteer run effort to extend the support of ROS 1 projects.
If you simply need an extra set of hands to help with your migration you are welcome to use our [ROS jobs board](https://discourse.ros.org/c/jobs/15) on ROS Discourse. 


<br>

### Where To Find Help

There are a variety of ROSCon talks that cover the process of migrating from ROS 1 to ROS 2. 
A non-exhaustive list of talks is given below.

* [ROSCon 2022:  "Migrating from ROS1 to ROS2 - choosing the right bridge"](https://vimeo.com/showcase/9954564/video/767140113)
* [ROSCon 2019: "Migrating a large ROS 1 codebase to ROS 2"](https://vimeo.com/378682692)
* [ROSCon 2019: "Migrating to ROS 2: Advice from Rover Robotics"](https://vimeo.com/378682068)
* [ROSCon 2019: "Bridging Your Transitions from ROS 1 to ROS 2"](https://vimeo.com/379127737)

A number of ROS users have written about their ROS migration experience. 
We've listed a few relevant blog posts below: 

* [Husarion Blog on Porting](https://medium.com/husarion-blog/porting-a-project-from-ros1-to-ros2-our-experience-ef27b1748915)
* [ROS 2 Migration Guide using TurtleBot 2](https://discourse.ros.org/t/migrating-turtlebot-2-to-ros-2/36225)
* [Robotics Back End Migration Guide](https://roboticsbackend.com/migrate-ros-project-from-ros1-to-ros2/)
* [ROS Industrial Migration Guide](https://industrial-training-master.readthedocs.io/en/melodic/_source/session7/ROS1-to-ROS2-porting.html)


Finally, if you have any questions about ROS 2, please do not hesitate to use the ROS resources listed below. 

* [Discourse](https://discourse.ros.org/) --  -- our ROS discussion forum.
* [ROS Discord](https://discord.com/servers/open-robotics-1077825543698927656)  -- our live discussion server.
* [Robotics Stack Exchange](https://robotics.stackexchange.com/) -- our preferred Q&A forum
* [Official ROS 2 Documentation](https://docs.ros.org/)
* [ROS Package API reference](https://docs.ros.org/en/rolling/p/)
* [ROS Package Index](https://index.ros.org/)
* [ROS on Docker Hub](https://hub.docker.com/_/ros/)

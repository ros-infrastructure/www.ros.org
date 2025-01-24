---
title: "Upcoming ROS 1 End of Life"
author:  Kat Scott 
subtitle: Migration Paths for ROS 1 Users
created_at: 2024-12-16 16:21:05 -0700
kind: article
header_class:  bg-photo 
header_image:  /imgs/eol-bg.png 
---

## ROS 1 Noetic Ninjemys goes End-of-Life 2025-05-31


If you have been directed to this page it was probably because you saw one of the notifications we slipped into the source code for ROS Noetic or RViz. 
We've heard from a number of users that they were unaware that ROS 1 Noetic, and consequently all of 1, [will go end-of-life on **May 31st, 2025**](https://wiki.ros.org/Distributions).
We're sorry that we interrupted your work, but it is crucial that you know what happens once ROS 1 goes end-of-life.

ROS Noetic Ninjemys, the [last ROS 1 release](https://www.openrobotics.org/blog/2020/5/23/noetic-ninjemys-the-last-official-ros-1-release), will reach End of Life in May 2025.
Over the past five years we focused our efforts on making ROS 2 a world class framework for professional robot development, and our user community seems to agree.
According to September 2024 download data from our servers ROS 2 downloads now make up almost 80% of all ROS downloads.
We've now seen ROS 2 used successfully in production by a large number of companies, across dozens of industries, and we think it is time for the last remaining ROS users to make the switch. 

<img src="/imgs/distro-download-data.png" alt="ROS Downloads by Distro, September 2024" style="width:600px;align:center"/>

### What Does End-of-Life Mean?

End of life for ROS Noetic means that the ROS team will no longer support ROS 1. 
After May 31st of 2025, the ROS team will no longer provide the following for ROS 1:


* New features or capabilities
* Security updates
* Bug fixes, patches or support
* Updated binaries

**After May 31st, 2025 ROS 1 Noetic users may find themselves exposed to un-patched security vulnerabilities and bugs, with few avenues of support short of fixing these issues themselves and recompiling Noetic from source.**
However, this isn't an outright emergency, it is good to keep mind what won't change after May of 2025.

ROS 1 going end of life does **not** mean:

* *ROS 1 binaries will suddenly disappear.*
  * ROS 1 binaries will continue to be hosted on `packages.ros.org`
* *ROS 1 projects will suddenly stop working on May 31st.*
  * ROS 1 will continue to work, as it does today.
* *Users must stop using ROS 1 immediately*,
  * ROS 1 will continue to work, but you should have migration plan as soon as possible.


<br>

### ROS 2 Migration Options

**If you are still using ROS 1 it is time to consider switching to ROS 2 Humble Hawksbill ([migration guide](https://docs.ros.org/en/humble/How-To-Guides/Migrating-from-ROS1.html)) or ROS 2 Jazzy Jalisco ([migration guide](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html)).**
Which distro you choose as your migration target is going to depend on the complexity of your ROS 1 system.
This [migration heuristic tool](https://github.com/osrf/ros2-porting-heuristics) can help you estimating the complexity of migrating your project to ROS 2.
If you have a smaller ROS 1 project, or a reasonably de-coupled workspace, it is most likely that you can migrate to ROS 2 Jazzy Jalisco directly.
The ROS community has produced a number of migration tools which you may find helpful, including this migration tool from [AWS Labs](https://github.com/awslabs/ros2-migration-tools), and this migration tool from ROS maintainer [David Lu!](https://github.com/DLu/roscompile/tree/main/magical_ros2_conversion_tool)

If your ROS 1 system is tightly coupled, has a number of un-ported dependencies, or is reasonably complex, you may want to take advantage of the [ROS 1 to ROS 2 Bridge](https://github.com/ros2/ros1_bridge).
The ROS 1 to ROS 2 Bridge performs automated translation between major ROS versions and should allow you to migrate your project one package at a time. 
Due to the operating system constraints for the current active ROS releases (Noetic / Ubuntu  20.04, Humble / 22.04)  the easiest way to use the ROS Bridge is to use ROS 2 Humble Hawksbill compiled from source on Ubuntu 20.04, [which has limited Tier 3 support](https://www.ros.org/reps/rep-2000.html#humble-hawksbill-may-2022-may-2027).


#### Other Migration Options

We highly recommend you migrate your ROS 1 project to ROS 2 as soon as possible.
Most users have found the migration process less difficult than they initially expected. 
If you simply can't migrate your ROS 1 project right now, you do have a few options,
**however, none of these solutions are officially supported, and we can't speak to their long-term robustness.** 

* Canonical, offers [extended security maintenance](https://ubuntu.com/robotics/docs/tutorial-ros-esm) for a number of ROS 1 host operating systems for a fee.
* [ROS-O](https://github.com/ros-o/ros-o) is a volunteer run effort to extend the support lifetime of ROS 1 projects.
* If you simply need an extra set of hands to help with your migration you are welcome to use our [jobs board](https://discourse.ros.org/c/jobs/15) on ROS Discourse to find some help. 


<br>

### What's New in ROS 2?


Before you begin your ROS migration journey, we recommend you read up on some of the new and improved features in ROS 2. 
We've put together a collection of resources that outline some of the major changes in ROS 2. 
**Almost all of these resources are readily available as part of our [migration guide in the ROS 2 documentation](https://docs.ros.org/en/rolling/How-To-Guides/Migrating-from-ROS1.html).**
While understanding what has and hasn't changed between ROS 1 and ROS 2 can make the migration process go a lot smoother, it really isn't necessary to get started!
There's a lot to love in ROS 2, and we think you'll find some of the new ROS 2 features make for a much better user experience.

**Changes to the ROS API** 

Most of the ROS 2 API should look familiar to ROS 1 users with a few notable exceptions. 
Where things have changed, they have changed to address shortcomings in ROS 1. 
The exciting thing about ROS 2 is that it has given us the opportunity to address a number of user complaints about ROS 1! 
The list below outlines some of the larger changes to the ROS API found in version 2.

* Nodelets in ROS 1 have been replaced with ROS 2's [composable nodes concept](https://docs.ros.org/en/rolling/Tutorials/Intermediate/Composition.html). ROS users can now compose their processing routines into the same process space using both compile time and run time composition. 
* Parameters in ROS 2 now support namespacing, and there is an improved interface for loading, saving, and reconfiguring your parameters. This [migration guide](https://docs.ros.org/en/rolling/How-To-Guides/Migrating-from-ROS1/Migrating-Parameters.html) provides guidance on how to migrate your parameter set.
* ROS 2 supports three different types of launch files: [YAML, Python, and XML](https://docs.ros.org/en/rolling/Tutorials/Intermediate/Launch/Creating-Launch-Files.html). There is a complete guide to [migrating your ROS 1 launch files](https://docs.ros.org/en/rolling/How-To-Guides/Migrating-from-ROS1/Migrating-Launch-Files.html) available on docs.ros.org.
* The ROS 2 [lifecycle node API](https://foxglove.dev/blog/how-to-use-ros2-lifecycle-nodes) has standardized the lifecycle of ROS nodes. The process of starting and stopping ROS nodes is now much more robust. We recommend taking advantage of this feature when migrating your ROS 1 project. 
* ROSBag performance has improved significantly in ROS 2, and the new ROS 2 type adaptation makes it even easier to share data using ROS Bags. As of ROS 2 Humble [MCap](https://mcap.dev/guides) is now the standard ROSBag data format.
* If you are looking for examples of common ROS 2 design patterns the [ROS 2 Cookbook](https://github.com/mikeferguson/ros2_cookbook) offers code samples for common ROS 2 tasks.

<br>

**ROS Development**

The ROS build and command line tools have also gotten a face lift in ROS 2. While there have been a few changes, the way you build and run your ROS application should feel familiar. All of our new tools are self-documenting, and you can learn a lot by simply passing them the `--help` command. 

* The [ROS command line interface (CLI)](https://docs.ros.org/en/rolling/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html) syntax has changed slightly in ROS 2. All your favorite commands are still there, but the syntax has been modernized.
* ROS 2 has replaced Catkin for [Colcon](https://colcon.readthedocs.io/en/released/user/quick-start.html). The names have changed, but most of your favorite functionality is still there.
* [Ament](https://github.com/ament) is a collection of [ROS build tool helper functions](https://docs.ros.org/en/rolling/Concepts/Advanced/About-Build-System.html). Ament wraps common build tasks and exposes them to Colcon and ROS. 

<br>

**The ROS Middleware Layer (RMW)**

ROS 1's bespoke publish / subscribe layer was very simple to use, but also difficult to configure for more complex use cases. 
In ROS 2 users have a choice about which protocol they would like to use to move data across their network.
This new abstraction layer is called a ROS Middleware Layer (RMW), and users can pick the [vendor](https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Different-Middleware-Vendors.html) that best supports their application.
**If you don't know which RMW is right for you, we suggest you use the default RMW that ships with your distro**, however ROS 2 users now have multiple official and unofficial ROS RMWs to choose from, including:

* DDS-based RMWs like [Fast-DDS](https://fast-dds.docs.eprosima.com/en/latest/fastdds/ros2/ros2_configure.html) and [Cyclone DDS](https://cyclonedds.io/docs/cyclonedds/latest/about_dds/eclipse_cyclone_dds.html). 
  * We recommend new DDS users read our [tuning guide](https://docs.ros.org/en/jazzy/How-To-Guides/DDS-tuning.html) and familiarize themselves with utilities like the [Fast-DDS Discovery Server](https://fast-dds.docs.eprosima.com/en/latest/fastdds/ros2/discovery_server/ros2_discovery_server.html) when using WiFi networks.
* A preview of [RMW-Zenoh](https://github.com/ros2/rmw_zenoh) is available in ROS 2 Jazzy, and binaries for the new RMW [are now available via apt.](https://discourse.ros.org/t/rmw-zenoh-binaries-for-rolling-jazzy-and-humble/41395) 
* Other community supported and proprietary RMWs are also available including [RTI Connext](https://github.com/ros2/rmw_connextdds), [IceOryx2](https://discourse.ros.org/t/rmw-iceoryx2-v0-1-0-release/40996), [Gurum-DDS](https://github.com/ros2/rmw_gurumdds) and even, [e-mail](https://discourse.ros.org/t/ros-2-over-email-rmw-email-an-rmw-implementation/22360).

<br>

**Related Projects**

Most of the major ROS packages and projects have already upgraded to ROS 2. 
Our sister project, Gazebo, is also in the process of migrating to its second major release, and many ROS users are also making the switch to a modern version of Gazebo.
You don't necessarily need to upgrade both ROS and Gazebo at the same time, but it is important to note that [Gazebo Classic is also going end of life in 2025](https://community.gazebosim.org/t/gazebo-classic-end-of-life/2563) too.
Other related ROS projects like MoveIt, Nav2, and ros2_control also have new and improved releases that are production-ready for your robotics application!

* We recommend Gazebo users [migrate their Gazebo simulation to a modern version of Gazebo](https://gazebosim.org/docs/harmonic/gazebo_classic_migration/).
  * Starting with ROS 2 Iron Irwini, binaries for modern Gazebo are available. ROS 2 / modern Gazebo integration is accomplished using the [`ros_gz` repository](https://github.com/gazebosim/ros_gz)
* If your robot supports custom hardware, it may be worth investigating [micro-ROS](https://micro.ros.org/).
* MoveIt2, the latest version of MoveIt, has a complete [migration guide available in their official documentation.](https://moveit.picknik.ai/main/api/html/index.html)
* Nav2, the ROS 2 navigation framework, has [complete documentation available for new users.](https://docs.nav2.org/index.html)
* [ROS 2 Control](https://control.ros.org/master/doc/getting_started/getting_started.html) is the new ROS 2 control framework with extensive documentation.


<br>


### Where To Find Help

You don't just have to take our word for it, a number of professional ROS users have already made the jump to ROS 2 and written about their ROS migration experience. 
We've collected a few relevant blog posts below: 

* [Husarion Blog on ROS 2 Migration](https://medium.com/husarion-blog/porting-a-project-from-ros1-to-ros2-our-experience-ef27b1748915)
* [ROS 2 Migration Guide using the TurtleBot 2](https://discourse.ros.org/t/migrating-turtlebot-2-to-ros-2/36225)
* [Robotics Back End Migration Guide](https://roboticsbackend.com/migrate-ros-project-from-ros1-to-ros2/)
* [ROS Industrial Migration Guide](https://industrial-training-master.readthedocs.io/en/melodic/_source/session7/ROS1-to-ROS2-porting.html)


At ROSCon 2024, our annual ROS developers conference, an overwhelming majority of the talks were about ROS 2. 
Below you find a collection of ROSCon talks that directly cover the process of migrating from ROS 1 to ROS 2. 


* [ROSCon 2022: "Migrating from ROS1 to ROS2 - choosing the right bridge"](https://vimeo.com/showcase/9954564/video/767140113)
* [ROSCon 2019: "Migrating a large ROS 1 codebase to ROS 2"](https://vimeo.com/378682692)
* [ROSCon 2019: "Migrating to ROS 2: Advice from Rover Robotics"](https://vimeo.com/378682068)
* [ROSCon 2019: "Bridging Your Transitions from ROS 1 to ROS 2"](https://vimeo.com/379127737)


Robotics is a tough field but the ROS community is always happy to help!
Below you'll find a list of community resources that can support you in migrating your ROS system.
If you run into migration problem that you just can't solve feel free to swing by our Discord server for some advice. 


* [Discourse](https://discourse.ros.org/) -- our ROS discussion forum.
* [ROS Discord](https://discord.com/servers/open-robotics-1077825543698927656) -- our live discussion server.
* [Robotics Stack Exchange](https://robotics.stackexchange.com/) -- our preferred Q&A forum.
* [Official ROS 2 Documentation](https://docs.ros.org/) -- our official ROS documentation.
* [ROS Package API reference](https://docs.ros.org/en/rolling/p/) -- API documentation for ROS package.
* [ROS Package Index](https://index.ros.org/) -- our list of ROS packages and binaries of their source code.
* [ROS on Docker Hub](https://hub.docker.com/_/ros/) -- a complete collection of ROS Docker containers for every ROS distro. 
